"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function makeParticleTexture(r: number, g: number, b: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, `rgba(${r},${g},${b},1.0)`);
  grad.addColorStop(0.55, `rgba(${r},${g},${b},0.45)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

interface ParticleSystemProps {
  count: number;
  color: [number, number, number];
  minSize: number;
  maxSize: number;
  spread: [number, number, number];
  center: [number, number, number];
  gravity: number;
  speed: number;
  additive?: boolean;
}

export function ParticleSystem({
  count,
  color,
  minSize,
  maxSize,
  spread,
  center,
  gravity,
  speed,
  additive = false,
}: ParticleSystemProps) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, velocities, sizes, lifetimes, ages, texture } = useMemo(() => {
    const tex = makeParticleTexture(color[0], color[1], color[2]);
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const lt = new Float32Array(count);
    const ag = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = center[0] + (Math.random() - 0.5) * spread[0] * 2;
      pos[i * 3 + 1] = center[1] + (Math.random() - 0.5) * spread[1] * 2;
      pos[i * 3 + 2] = center[2] + (Math.random() - 0.5) * spread[2] * 2;
      vel[i * 3] = (Math.random() - 0.5) * speed;
      vel[i * 3 + 1] = (Math.random() - 0.5) * speed - gravity * 0.5;
      vel[i * 3 + 2] = (Math.random() - 0.5) * speed;
      sz[i] = minSize + Math.random() * (maxSize - minSize);
      lt[i] = 2.5 + Math.random() * 5;
      ag[i] = Math.random() * lt[i];
    }
    return { positions: pos, velocities: vel, sizes: sz, lifetimes: lt, ages: ag, texture: tex };
  }, [count, color, minSize, maxSize, spread, center, gravity, speed]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      ages[i] += delta;
      if (ages[i] > lifetimes[i]) {
        ages[i] = 0;
        positions[i * 3] = center[0] + (Math.random() - 0.5) * spread[0] * 2;
        positions[i * 3 + 1] = center[1] + (Math.random() - 0.5) * spread[1] * 2;
        positions[i * 3 + 2] = center[2] + (Math.random() - 0.5) * spread[2] * 2;
        velocities[i * 3] = (Math.random() - 0.5) * speed;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * speed;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * speed;
      }
      positions[i * 3] += velocities[i * 3] * delta;
      positions[i * 3 + 1] += (velocities[i * 3 + 1] - gravity) * delta;
      positions[i * 3 + 2] += velocities[i * 3 + 2] * delta;
    }

    posAttr.array.set(positions);
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={maxSize}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={additive ? THREE.AdditiveBlending : THREE.NormalBlending}
        vertexColors={false}
        color={new THREE.Color(color[0] / 255, color[1] / 255, color[2] / 255)}
      />
    </points>
  );
}

export function Petals() {
  return (
    <ParticleSystem
      count={220}
      color={[255, 200, 220]}
      minSize={0.004}
      maxSize={0.014}
      spread={[0.30, 0.17, 0.30]}
      center={[0, 0.18, -0.05]}
      gravity={0.04}
      speed={0.03}
    />
  );
}

export function Dust() {
  return (
    <ParticleSystem
      count={300}
      color={[255, 240, 210]}
      minSize={0.0015}
      maxSize={0.004}
      spread={[0.20, 0.20, 0.20]}
      center={[0, 0, -0.05]}
      gravity={0.005}
      speed={0.01}
      additive
    />
  );
}
