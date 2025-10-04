import { Noise } from "@/components/effect/Noise";
import React from "react";
import { StarField } from "../background/StarField";
import { Background } from "../background/Background";

import dynamic from "next/dynamic";

const Saturn = dynamic(() => import("./Saturn"), {
  ssr: false,
  loading: () => <img src="/assets/saturn/placeholder.webp"></img>,
});

export const Overview = () => {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <StarField />
      <Background />
      <Noise />

      <div className="absolute inset-0 m-auto flex flex-col justify-center">
        <div className="relative flex justify-between h-full items-center">
          <p className="text-9xl font-black">MY SPACE</p>
          <div className="absolute inset-0 z-50">
            <Saturn />
          </div>
          <p className="text-9xl font-black">MY SPACE</p>
        </div>
      </div>
    </div>
  );
};
