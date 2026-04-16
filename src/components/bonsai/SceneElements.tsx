"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { mulberry32, WALL_THICKNESS } from "./constants";

interface SceneElementsProps {
  sceneX: number;
  sceneY: number;
  sceneZ: number;
  sceneScale: number;
  treeScale: number;
  boxDepthCm: number;
  letterbox: number;
  screenWidthMeters: number;
  screenHeightMeters: number;
  sunDirection: [number, number, number];
  children?: React.ReactNode;
}

export default function SceneElements({
  sceneX,
  sceneY,
  sceneZ,
  sceneScale,
  treeScale,
  boxDepthCm,
  letterbox,
  screenWidthMeters: w,
  screenHeightMeters: h,
  sunDirection,
  children,
}: SceneElementsProps) {
  const boxDepth = boxDepthCm / 100;
  const innerH = h * (1 - 2 * letterbox);

  const rocks = useMemo(() => {
    const rng = mulberry32(0x42beef);
    const items = [];
    for (let i = 0; i < 9; i++) {
      const tint = 0.55 + rng() * 0.25;
      const r = 0.22 + rng() * 0.35;
      const a = rng() * Math.PI * 2;
      items.push({
        position: [Math.cos(a) * r, -0.18, Math.sin(a) * r] as [number, number, number],
        scale: [
          0.05 + rng() * 0.08,
          0.035 + rng() * 0.05,
          0.05 + rng() * 0.08,
        ] as [number, number, number],
        rotation: [rng() * Math.PI, rng() * Math.PI, rng() * Math.PI] as [number, number, number],
        color: new THREE.Color(tint, tint * 0.95, tint * 0.88),
      });
    }
    return items;
  }, []);

  return (
    <>
      {/* ===== LIGHTS — outside the scaled diorama group ===== */}
      <directionalLight
        position={sunDirection}
        intensity={2.4}
        color={new THREE.Color(1.0, 0.88, 0.66)}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.01}
        shadow-camera-far={2}
        shadow-camera-left={-0.3}
        shadow-camera-right={0.3}
        shadow-camera-top={0.3}
        shadow-camera-bottom={-0.3}
        shadow-bias={-0.001}
      />

      <hemisphereLight
        color={new THREE.Color(0.85, 0.82, 0.72)}
        groundColor={new THREE.Color(0.18, 0.16, 0.13)}
        intensity={0.6}
      />

      <directionalLight
        position={[-0.2, 0.8, -1.0]}
        intensity={0.8}
        color={new THREE.Color(1.0, 0.84, 0.6)}
      />

      <ambientLight intensity={0.3} />

      {/* ===== DIORAMA GROUP — everything scaled together ===== */}
      <group position={[sceneX, sceneY, sceneZ]} scale={sceneScale}>

        {/* Shoebox walls */}
        <mesh position={[0, 0, -boxDepth + WALL_THICKNESS / 2]} receiveShadow>
          <boxGeometry args={[w, innerH, WALL_THICKNESS]} />
          <meshStandardMaterial color="#6e5d40" roughness={0.92} metalness={0} />
        </mesh>
        <mesh position={[0, innerH / 2 - WALL_THICKNESS / 2, -boxDepth / 2]} receiveShadow>
          <boxGeometry args={[w, WALL_THICKNESS, boxDepth]} />
          <meshStandardMaterial color="#6e5d40" roughness={0.92} metalness={0} />
        </mesh>
        <mesh position={[0, -innerH / 2 + WALL_THICKNESS / 2, -boxDepth / 2]} receiveShadow>
          <boxGeometry args={[w, WALL_THICKNESS, boxDepth]} />
          <meshStandardMaterial color="#6e5d40" roughness={0.92} metalness={0} />
        </mesh>
        <mesh position={[-w / 2 + WALL_THICKNESS / 2, 0, -boxDepth / 2]} receiveShadow>
          <boxGeometry args={[WALL_THICKNESS, innerH, boxDepth]} />
          <meshStandardMaterial color="#6e5d40" roughness={0.92} metalness={0} />
        </mesh>

        {/* Letterbox bars */}
        {letterbox > 0 && (
          <>
            <mesh position={[0, h / 2 - (h * letterbox) / 2, -0.001]}>
              <planeGeometry args={[w, h * letterbox]} />
              <meshBasicMaterial color="black" side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, -h / 2 + (h * letterbox) / 2, -0.001]}>
              <planeGeometry args={[w, h * letterbox]} />
              <meshBasicMaterial color="black" side={THREE.DoubleSide} />
            </mesh>
          </>
        )}

        {/* Emissive window pane */}
        <mesh position={[w / 2 + 0.015, 0, -boxDepth * 0.5]} name="windowPane">
          <boxGeometry args={[0.003, innerH * 0.7, boxDepth * 0.6]} />
          <meshBasicMaterial color={new THREE.Color(1.6, 1.45, 1.12)} toneMapped={false} />
        </mesh>

        {/* Window spot light (inside diorama so it illuminates the interior) */}
        <spotLight
          position={[w / 2 + 0.04, 0, -boxDepth * 0.5]}
          angle={Math.PI * 0.48}
          penumbra={0.5}
          intensity={40}
          color={new THREE.Color(1.0, 0.92, 0.72)}
          distance={1}
          decay={1}
        />

        {/* Tree group */}
        <group scale={treeScale}>
          {/* Pedestal */}
          <mesh position={[0, -0.18, 0]} receiveShadow castShadow>
            <cylinderGeometry args={[0.18, 0.20, 0.04, 48]} />
            <meshStandardMaterial color="#6b4a2b" roughness={0.7} metalness={0.03} />
          </mesh>

          {/* Moss */}
          <mesh position={[0, -0.155, 0]} scale={[1, 0.18, 1]} receiveShadow>
            <sphereGeometry args={[0.16, 32, 16]} />
            <meshPhysicalMaterial
              color="#4f6b2e"
              roughness={1.0}
              metalness={0}
              sheen={0.8}
              sheenRoughness={0.55}
              sheenColor={new THREE.Color(0.65, 0.77, 0.48)}
            />
          </mesh>

          {/* Dish */}
          <mesh position={[0, -0.158, 0]} receiveShadow castShadow>
            <torusGeometry args={[0.17, 0.012, 16, 48]} />
            <meshPhysicalMaterial
              color="#ede3cf"
              roughness={0.55}
              metalness={0}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
            />
          </mesh>

          {/* Rocks */}
          {rocks.map((rock, i) => (
            <mesh
              key={i}
              position={rock.position}
              scale={rock.scale}
              rotation={rock.rotation}
              receiveShadow
              castShadow
            >
              <dodecahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color={rock.color} roughness={0.9} metalness={0.02} />
            </mesh>
          ))}
        </group>

        {/* Children: BonsaiModel, Particles */}
        {children}
      </group>
    </>
  );
}
