"use client";
import { ReactNode, Suspense } from "react";
import { Center, MeshTransmissionMaterial, Text3D } from "@react-three/drei";
import type { ChromeMaterialConfig } from "./chrome-config";

interface FontProps {
  height?: number;
  fontUrl?: string;
  children: ReactNode;
  lights?: boolean;
  config: ChromeMaterialConfig;
}

export const Font = ({
  height = 0.3,
  fontUrl = "/fonts/climate-crisis.typeface.json",
  lights = true,
  config,
  children,
  ...props
}: FontProps) => {
  return (
    <group>
      <Suspense fallback={null}>
        <Center scale={1} front top {...props}>
          <Text3D
            font={fontUrl}
            height={height}
            castShadow
            bevelEnabled
            bevelOffset={0}
            letterSpacing={-0.03}
            bevelSize={0.01}
            bevelSegments={3}
            curveSegments={32}
            bevelThickness={0.1}
          >
            {children}
            {lights ? (
              <MeshTransmissionMaterial
                backside={config.backside}
                backsideThickness={config.backsideThickness}
                metalness={config.metalness}
                thickness={config.thickness}
                samples={config.samples}
                transmission={config.transmission}
                clearcoat={config.clearcoat}
                clearcoatRoughness={config.clearcoatRoughness}
                chromaticAberration={config.chromaticAberration}
                anisotropy={config.anisotropy}
                roughness={config.roughness}
                distortion={config.distortion}
                distortionScale={config.distortionScale}
                temporalDistortion={config.temporalDistortion}
                ior={config.ior}
                color={config.color}
              />
            ) : (
              <meshPhysicalMaterial transmission={0} color="#999" />
            )}
          </Text3D>
        </Center>
      </Suspense>
    </group>
  );
};
