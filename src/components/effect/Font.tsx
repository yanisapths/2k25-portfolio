import React, { ReactNode, Suspense, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei";
import { RGBELoader } from "three-stdlib";

interface FontProps {
  height?: number;
  fontUrl?: string;
  children: ReactNode;
  lights?: boolean;
  environment: boolean;
  config: any;
}

export const Font = ({
  height = 0.3,
  fontUrl = "/fonts/climate-crisis.typeface.json",
  lights,
  environment,
  config,
  children,
  ...props
}: FontProps) => {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/fireplace_1k.hdr"
  );

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
            curveSegments={64}
            bevelThickness={0.1}
          >
            {children}
            {lights ? (
              <MeshTransmissionMaterial
                {...config}
                backside={lights && config.backside}
                background={lights && environment && texture}
              />
            ) : (
              <meshPhysicalMaterial {...config} transmission={0} color="#999" />
            )}
          </Text3D>
        </Center>
      </Suspense>
    </group>
  );
};
