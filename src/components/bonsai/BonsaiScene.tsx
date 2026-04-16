"use client";

import { Suspense, useState, useCallback, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Environment } from "@react-three/drei";
import SceneElements from "./SceneElements";
import BonsaiModel from "./BonsaiModel";
import { Petals, Dust } from "./Particles";
import CinematicEffects from "./CinematicEffects";
import OffAxisCamera from "./OffAxisCamera";
import HUD from "./HUD";
import { useTracking } from "./useTracking";
import { DEFAULTS, type SceneParams } from "./constants";

interface BonsaiSceneProps {
  className?: string;
}

export default function BonsaiScene({ className }: BonsaiSceneProps) {
  const [params, setParams] = useState<SceneParams>({ ...DEFAULTS });
  const [hudVisible, setHudVisible] = useState(true);
  const { tracker, videoRef, status, started, start, recenter } = useTracking();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const handleChange = useCallback((key: keyof SceneParams, value: number) => {
    setParams((p) => ({ ...p, [key]: value }));
    if (key === "userScale" && tracker.current) {
      tracker.current.userScale = value;
    }
  }, [tracker]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "h" && !(e.target instanceof HTMLInputElement)) {
        setHudVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const sunDirection = useMemo((): [number, number, number] => {
    const altitude = params.sunAltitude * Math.PI / 2;
    const azimuth = (params.sunAzimuth - 0.5) * Math.PI * 2;
    return [
      Math.cos(altitude) * Math.sin(azimuth),
      Math.sin(altitude),
      Math.cos(altitude) * Math.cos(azimuth),
    ];
  }, [params.sunAltitude, params.sunAzimuth]);

  const screenWidthMeters = params.screenWidthCm / 100;
  const aspect = typeof window !== "undefined" ? window.innerHeight / window.innerWidth : 9 / 16;
  const screenHeightMeters = screenWidthMeters * aspect;

  return (
    <div className={`relative w-full h-full bg-black ${className || ""}`}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          stencil: true,
          alpha: false,
          powerPreference: isMobile ? "low-power" : "high-performance",
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        style={{ background: "#0a0a0a" }}
      >
        <color attach="background" args={["#0a0a0a"]} />

        <OffAxisCamera
          tracker={tracker}
          screenWidthMeters={screenWidthMeters}
        />

        <Sky
          distance={1000}
          sunPosition={sunDirection}
          turbidity={5}
          rayleigh={2.5}
          mieCoefficient={0.005}
          mieDirectionalG={0.85}
        />

        <Environment preset="sunset" background={false} environmentIntensity={0.4} />

        <Suspense fallback={null}>
          <SceneElements
            sceneX={params.sceneX}
            sceneY={params.sceneY}
            sceneZ={params.sceneZ}
            sceneScale={params.sceneScale}
            treeScale={params.treeScale}
            boxDepthCm={params.boxDepthCm}
            letterbox={params.letterbox}
            screenWidthMeters={screenWidthMeters}
            screenHeightMeters={screenHeightMeters}
            sunDirection={sunDirection}
          >
            <group scale={params.treeScale}>
              <BonsaiModel />
            </group>
            <Petals />
            <Dust />
          </SceneElements>
        </Suspense>

        <CinematicEffects
          bloom={params.bloom}
          dofStrength={params.dofStrength}
          focusDist={params.focusDist}
          grain={params.grain}
          chromatic={params.chromatic}
          vignette={params.vignette}
          ssao={params.ssao}
          mobile={isMobile}
        />
      </Canvas>

      <HUD
        params={params}
        onChange={handleChange}
        status={status}
        started={started}
        onStart={start}
        onRecenter={() => recenter(params.sitBackCm / 100)}
        visible={hudVisible}
        onToggle={() => setHudVisible((v) => !v)}
      />

      {/* Hidden video for MediaPipe */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="fixed bottom-3 right-3 w-[180px] h-[135px] rounded-lg object-cover z-10 border border-white/10"
        style={{
          transform: "scaleX(-1)",
          display: started ? "block" : "none",
        }}
      />
    </div>
  );
}
