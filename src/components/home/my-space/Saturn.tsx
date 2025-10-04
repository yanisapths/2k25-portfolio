import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { TextureLoader, MeshStandardMaterial, Group } from "three";

import { useScroll, useTransform } from "framer-motion";
export default function Saturn() {
  return (
    <Canvas
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
  const saturnTexture = useLoader(
    TextureLoader,
    "/assets/saturn/saturnmap.webp"
  );
  const ringTexture = useLoader(
    TextureLoader,
    "/assets/saturn/saturnringcolor.webp"
  );

  scene.traverse((child: any) => {
    if (child.isMesh) {
      if (child.name.toLowerCase().includes("ring")) {
        child.material = new MeshStandardMaterial({
          map: ringTexture,
          transparent: true,
          side: 2,
        });
      } else {
        child.material = new MeshStandardMaterial({
          map: saturnTexture,
        });
      }
    }
  });

  const { scrollYProgress } = useScroll();

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0.4]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0.1, -0.2]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y +=
        (rotateY.get() - group.current.rotation.y) * 0.5;
      group.current.rotation.x +=
        (rotateX.get() - group.current.rotation.x) * 0.2;
    }
  });

  return (
    <primitive ref={group} object={scene} position={[0, 0, 0]} scale={0.02} />
  );
}
