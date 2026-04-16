import { Vector3 } from "three";

let faceLandmarkerModule: typeof import("@mediapipe/tasks-vision") | null = null;

async function loadVision() {
  if (faceLandmarkerModule) return faceLandmarkerModule;
  faceLandmarkerModule = await import("@mediapipe/tasks-vision");
  return faceLandmarkerModule;
}

export class FaceTracker {
  video: HTMLVideoElement | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faceLandmarker: any = null;
  tracking = false;
  eye = new Vector3(0, 0, 0.61);
  eyeSmoothed = new Vector3(0, 0, 0.61);
  calibrationOffset = new Vector3(0, 0, 0);
  webcamWorldPos = new Vector3(0, 0, 0);
  userScale = 1.68;
  status = "idle";
  private lastVideoTime = -1;
  private matrixLogged = false;

  async start(video: HTMLVideoElement) {
    this.video = video;
    this.status = "loading model...";

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
    await new Promise<void>((r) => {
      video.onloadedmetadata = () => r();
    });
    await video.play();

    const vision = await loadVision();
    const filesetResolver = await vision.FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17/wasm"
    );

    this.faceLandmarker = await vision.FaceLandmarker.createFromOptions(
      filesetResolver,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFacialTransformationMatrixes: true,
      }
    );

    this.tracking = true;
    this.status = "tracking";
  }

  tick(screenHeightMeters: number) {
    if (!this.tracking || !this.video || this.video.readyState < 2) return;
    if (!this.faceLandmarker) return;
    if (this.video.currentTime === this.lastVideoTime) return;
    this.lastVideoTime = this.video.currentTime;

    let res;
    try {
      res = this.faceLandmarker.detectForVideo(
        this.video,
        performance.now()
      );
    } catch {
      return;
    }

    const xform = (res as Record<string, unknown>).facialTransformationMatrixes as
      | { data: Float32Array }[]
      | undefined;
    const mat = xform?.[0];
    if (!mat?.data) {
      this.status = "no face";
      return;
    }

    const m = mat.data;
    const tx = m[12],
      ty = m[13],
      tz = m[14];
    const u = Math.abs(tz) > 5 ? 0.01 : 1.0;

    if (!this.matrixLogged) {
      console.info("[r3f] face matrix", tx.toFixed(3), ty.toFixed(3), tz.toFixed(3));
      this.matrixLogged = true;
    }

    this.webcamWorldPos.y = screenHeightMeters / 2;

    const wx = this.webcamWorldPos.x + -tx * u;
    const wy = this.webcamWorldPos.y + ty * u;
    const wz = this.webcamWorldPos.z + Math.abs(tz) * u * this.userScale;

    this.eye.set(
      wx - this.calibrationOffset.x,
      wy - this.calibrationOffset.y,
      wz - this.calibrationOffset.z
    );

    this.eyeSmoothed.lerp(this.eye, 0.35);
    this.status = "tracking";
  }

  recenter(targetDepth: number) {
    const camZ = Math.max(
      0.05,
      (this.eye.z + this.calibrationOffset.z) / this.userScale
    );
    this.userScale = Math.max(0.2, Math.min(4, targetDepth / camZ));
    this.calibrationOffset.set(
      this.eye.x + this.calibrationOffset.x,
      this.eye.y - this.webcamWorldPos.y + this.calibrationOffset.y,
      0
    );
  }

  dispose() {
    this.tracking = false;
    if (this.video?.srcObject) {
      (this.video.srcObject as MediaStream)
        .getTracks()
        .forEach((t) => t.stop());
    }
    this.faceLandmarker?.close();
  }
}
