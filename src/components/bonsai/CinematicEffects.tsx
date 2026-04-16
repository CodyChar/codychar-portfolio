"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import {
  ACESFilmicToneMapping,
} from "three";

interface CinematicEffectsProps {
  bloom: number;
  dofStrength: number;
  focusDist: number;
  grain: number;
  chromatic: number;
  vignette: number;
  ssao: number;
  mobile?: boolean;
}

export default function CinematicEffects({
}: CinematicEffectsProps) {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.0;
  }, [gl]);

  return null;
}
