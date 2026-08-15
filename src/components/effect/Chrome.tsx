"use client";
import { Component, ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Font } from "./Font";
import { chromeMaterialConfig } from "./chrome-config";

interface ChromeProps {
  lines: string[];
}

class ChromeErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ChromeFallback({ lines }: { lines: string[] }) {
  return (
    <div className="px-6">
      {lines.map((line) => (
        <h1
          key={line}
          className="font-climate-crisis text-5xl leading-tight uppercase md:text-7xl"
        >
          {line}
        </h1>
      ))}
    </div>
  );
}

function ChromeScene({ lines }: { lines: string[] }) {
  const lineOffset = 1.15;

  return (
    <>
      <ambientLight intensity={10} />
      <group position={[0, ((lines.length - 1) * lineOffset) / 2 - 0.5, 0]}>
        {lines.map((line, index) => (
          <group key={line} position={[0, -index * lineOffset, 0]}>
            <Font lights config={chromeMaterialConfig}>
              {line}
            </Font>
          </group>
        ))}
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
    </>
  );
}

const Chrome = ({ lines }: ChromeProps) => {
  return (
    <ChromeErrorBoundary fallback={<ChromeFallback lines={lines} />}>
      <Canvas
        shadows
        orthographic
        camera={{ position: [-1, 0, 5], zoom: 75 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          stencil: false,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{
          width: "100vw",
          height: lines.length > 1 ? "46vh" : "28vh",
          margin: "auto",
          pointerEvents: "none",
        }}
      >
        <Suspense fallback={null}>
          <ChromeScene lines={lines} />
        </Suspense>
      </Canvas>
    </ChromeErrorBoundary>
  );
};

export default Chrome;
