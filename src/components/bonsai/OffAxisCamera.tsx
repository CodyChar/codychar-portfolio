"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { PerspectiveCamera as PerspectiveCameraImpl, Vector3 } from "three";
import type { FaceTracker } from "./FaceTracker";

interface OffAxisCameraProps {
  tracker: React.RefObject<FaceTracker | null>;
  screenWidthMeters: number;
  camHeight?: number;
}

const _target = new Vector3();
const _eye = new Vector3();
const _up = new Vector3(0, 1, 0);

export default function OffAxisCamera({
  tracker,
  screenWidthMeters,
  camHeight = -0.05,
}: OffAxisCameraProps) {
  const { size } = useThree();
  const camRef = useRef<PerspectiveCameraImpl>(null);

  useFrame(() => {
    const cam = camRef.current;
    const t = tracker.current;
    if (!cam || !t) return;

    // Only override projection when tracking is active
    if (!t.tracking) return;

    const aspect = size.height / size.width;
    const w = screenWidthMeters;
    const h = w * aspect;

    t.tick(h);

    _eye.copy(t.eyeSmoothed);
    _eye.y += camHeight;

    const d = _eye.z;
    if (!(d > 0.02) || !isFinite(d)) return;

    const near = Math.max(0.02, d * 0.1);
    const far = 20;
    const s = near / d;

    const l = (-w / 2 - _eye.x) * s;
    const r = (w / 2 - _eye.x) * s;
    const b = (-h / 2 - _eye.y) * s;
    const t2 = (h / 2 - _eye.y) * s;

    cam.projectionMatrix.makePerspective(l, r, b, t2, near, far);
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();

    cam.position.copy(_eye);
    cam.up.copy(_up);
    _target.set(_eye.x, _eye.y, _eye.z - 1);
    cam.lookAt(_target);
  });

  const isTracking = tracker.current?.tracking ?? false;

  return (
    <>
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[0, 0, 0.61]}
        near={0.01}
        far={20}
        up={[0, 1, 0]}
      />
      {!isTracking && (
        <OrbitControls
          target={[0, -0.02, -0.09]}
          enablePan={false}
          minDistance={0.2}
          maxDistance={2}
        />
      )}
    </>
  );
}
