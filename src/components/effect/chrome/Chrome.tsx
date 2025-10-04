import React from "react";
import { Font } from "../Font";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import {
  ChromaticAberration,
  EffectComposer,
  HueSaturation,
  TiltShift2,
} from "@react-three/postprocessing";

interface ChromeProps {
  text: string;
}

export const Chrome = ({ text }: ChromeProps) => {
  const {
    transmission,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    ior,
    thickness,
    chromaticAberration,
    anisotropy,
    saturation,
    environment,
    shadow,
    stripes,
    samples,
    distortion,
    distortionScale,
    backside,
    backsideThickness,
    color,
  } = useControls({
    environment: true,
    backside: true,
    metalness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    saturation: { value: -1, min: -1, max: 0 },
    backsideThickness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    thickness: { value: 6.29, min: 0, max: 30, step: 0.01 },
    samples: { value: 5, min: 1, max: 32, step: 1 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0.32, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 1, min: 0, max: 1 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 1, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 4, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.46, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.69, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.57, min: 0, max: 2, step: 0.01 },
    color: "#ffffff",
    stripes: "#444",
    shadow: "black",
  });

  const config = {
    transmission,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    ior,
    thickness,
    chromaticAberration,
    anisotropy,
    shadow,
    stripes,
    samples,
    distortion,
    distortionScale,
    backside,
    backsideThickness,
    color,
  };

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-1, 0, 5], zoom: 75 }}
      gl={{ antialias: false }}
      style={{
        width: "100vw",
      }}
    >
      <ambientLight intensity={10} />

      <group position={[0, -0.5, 0]}>
        <Font lights environment={environment} config={config}>
          {text}
        </Font>
      </group>

      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 1]}>
          <Lightformer
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-10, 0, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={10}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 10, 1]}
          />
        </group>
      </Environment>

      <EffectComposer multisampling={4}>
        <HueSaturation hue={0} saturation={saturation} />
        <TiltShift2 blur={0} />
        <ChromaticAberration offset={[0.0009, 0.0009]} />
      </EffectComposer>
      <OrbitControls
        enableRotate={true}
        enableZoom={false}
        minDistance={4.5}
        maxDistance={5.5}
        minPolarAngle={Math.PI / 2 - 0.1}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minAzimuthAngle={-0.1}
        maxAzimuthAngle={0.1}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  );
};
