import { Noise } from "@/components/effect/Noise";
import React from "react";
import { StarField } from "../background/StarField";
import { Background } from "../background/Background";

export const FeaturedWorks = () => {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <StarField />
      <Background />
      <Noise />

      <div className="fixed m-auto w-screen h-screen justify-center">
        <div className="relative flex justify-center h-full items-center">
          <p className="text-8xl font-black">FEATURED WORKS</p>
        </div>
      </div>
    </div>
  );
};
