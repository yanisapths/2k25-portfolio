export const chromeMaterialConfig = {
  backside: true,
  metalness: 0.5,
  backsideThickness: 0.5,
  thickness: 6.29,
  samples: 5,
  transmission: 1,
  clearcoat: 0.1,
  clearcoatRoughness: 0,
  chromaticAberration: 5,
  anisotropy: 1,
  roughness: 0,
  distortion: 4,
  distortionScale: 0.46,
  temporalDistortion: 0.69,
  ior: 1.57,
  color: "#ffffff",
} as const;

export type ChromeMaterialConfig = typeof chromeMaterialConfig;
