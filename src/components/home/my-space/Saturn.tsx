import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { TextureLoader, MeshStandardMaterial, Group } from "three";

import { useScroll, useTransform } from "framer-motion";
export default function Saturn() {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          console.warn("WebGL context lost, attempting to restore...");
        });
      }}
      gl={{
        antialias: true,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
      }}
      camera={{ position: [5, 0, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 0, 0.25]} intensity={1.5} />

        <Center>
          <SaturnModel />
        </Center>
      </Suspense>
    </Canvas>
  );
}

function SaturnModel() {
  const group = useRef<Group>(null!);
  const { scene } = useGLTF("/assets/saturn/saturn.glb");

  const { scrollYProgress } = useScroll();

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0.4]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-0.7, 1]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotateY.get() - group.current.rotation.y;
      group.current.rotation.x += rotateX.get() - group.current.rotation.x;
    }
  });

  return (
    <primitive ref={group} object={scene} position={[0, 0, 0]} scale={0.018} />
  );
}
