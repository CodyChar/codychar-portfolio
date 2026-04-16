export const DEFAULTS = {
  screenWidthCm: 35.5,
  sitBackCm: 61,
  userScale: 1.68,
  letterbox: 0.10,

  sceneX: 0,
  sceneY: -0.02,
  sceneZ: -0.09,
  sceneScale: 0.29,
  treeScale: 1.40,
  boxDepthCm: 21.5,

  sunAltitude: 0.5,
  sunAzimuth: 0.75,
  sunLuminance: 1.0,

  bloom: 0.7,
  dofStrength: 0.7,
  focusDist: 0.55,
  grain: 2,
  chromatic: 10,
  vignette: 0.35,
  volumetric: 1.0,
  ssao: 1.0,
};

export type SceneParams = typeof DEFAULTS;

export const WALL_THICKNESS = 0.006;

export function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
