"use client";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { Points } from "three";
import { ZoomedParticles } from "./ZoomedParticles";

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
      count={800}
      factor={4}
      saturation={0}
      fade
      speed={2}
    />
  );
}

export default function StarField() {
  const isMobile = useIsMobile();

  if (isMobile !== false) {
    return null;
  }

  return (
    <div className="h-screen w-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.1} />
        <FloatingParticles />
        <ZoomedParticles />
      </Canvas>
    </div>
  );
}
