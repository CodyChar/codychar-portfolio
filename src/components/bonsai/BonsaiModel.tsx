"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function BonsaiModel() {
  const { scene } = useGLTF("/models/bonsai-meshy.glb");

  const cloned = useMemo(() => {
    const root = scene.clone(true);

    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const longest = Math.max(size.x, size.y, size.z);

    const wrapper = new THREE.Group();
    if (longest > 1e-6) {
      const s = 0.3 / longest;
      wrapper.scale.setScalar(s);
      root.position.copy(center.negate());
    }
    wrapper.add(root);

    wrapper.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat?.color) {
          const c = mat.color;
          if (c.g > c.r * 1.05 && c.g > c.b * 1.05) {
            const phys = new THREE.MeshPhysicalMaterial();
            phys.copy(mat);
            phys.sheen = 0.8;
            phys.sheenRoughness = 0.55;
            phys.sheenColor = new THREE.Color(0.65, 0.77, 0.48);
            child.material = phys;
          }
        }
      }
    });

    return wrapper;
  }, [scene]);

  return <primitive object={cloned} />;
}
