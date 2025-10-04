import React from "react";
import { Font } from "./Font";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  HueSaturation,
  TiltShift2,
} from "@react-three/postprocessing";

interface ChromeProps {
  text: string;
}

const configVaraints = {
  environment: true,
  backside: true,
  metalness: { value: 0.5, min: 0, max: 1, step: 0.01 },
  saturation: { value: -1, min: -1, max: 0 },
  backsideThickness: { value: 0.5, min: 0, max: 1, step: 0.01 },
  thickness: { value: 6.29, min: 0, max: 30, step: 0.01 },
  samples: { value: 5, min: 1, max: 32, step: 1 },
  transmission: { value: 1, min: 0, max: 1 },
  clearcoat: { value: 0.1, min: 0.1, max: 1 },
  clearcoatRoughness: { value: 0, min: 0, max: 1 },
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
};
const Chrome = ({ text }: ChromeProps) => {
  const isDev = process.env.NODE_ENV === "development";
  const config = isDev ? useControls(configVaraints) : (configVaraints as any);

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-1, 0, 5], zoom: 75 }}
      gl={{
        antialias: true,
        preserveDrawingBuffer: false,
      }}
      style={{
        width: "100vw",
        margin: "auto",
      }}
    >
      {/* <Perf position="top-left" /> */}
      <ambientLight intensity={10} />

      <group position={[0, -0.5, 0]}>
        <Font lights environment={true} config={config}>
          {text}
        </Font>
      </group>

      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 1]}>
          <Lightformer
            intensity={8}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={5}
            rotation-y={Math.PI / 2}
            position={[-10, 0, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={3}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 10, 1]}
          />
        </group>
      </Environment>

      <EffectComposer multisampling={1}>
        <HueSaturation hue={0} saturation={config?.saturation as any} />
        <TiltShift2 blur={0} />
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

export default Chrome;
