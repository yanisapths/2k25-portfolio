"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Points } from "three";

function FloatingParticles() {
  const particlesRef = useRef<Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.z = state.clock.getElapsedTime() * 0.01;
    }
  });
  return (
    <Stars
      ref={particlesRef}
      radius={100}
      depth={1}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={2}
    />
  );
}

export const StarField = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.1} />
        <FloatingParticles />
        <OrbitControls
          enablePan={true}
          enableRotate={true}
          panSpeed={0.5}
          rotateSpeed={0.4}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
};
