"use client";
import { Noise } from "@/components/effect/Noise";
import { Background } from "@/components/home/background/Background";
import { FeaturedWorks } from "@/components/home/featured-works/FeaturedWorks";
import Home from "@/components/home/Home";
import { Material } from "@/components/home/materials/Material";
import { Overview } from "@/components/home/my-space/Overview";
import { LoadingSplash } from "@/components/home/splash-screen/SplashScreen";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";

import { Leva } from "leva";
import dynamic from "next/dynamic";
import { Fragment, useState } from "react";

const StarField = dynamic(
  () => import("@/components/home/background/StarField"),
  {
    ssr: false,
    loading: () => <img src="/images/font-placeholder.webp"></img>,
  }
);

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="scroll-smooth">
      <Leva collapsed hidden={true} />
      {isLoading && (
        <LoadingSplash
          onLoadComplete={handleLoadComplete}
          setIsZooming={setIsZooming}
        />
      )}

      {!isLoading && (
        <div
          className={`${
            isZooming ? "animate-zoom-in" : ""
          } lg:flex lg:flex-col lg:h-auto lg:w-screen lg:items-center lg:justify-center`}
        >
          <div className="fixed inset-0">
            <StarField />
            <Background />
            <Noise />
          </div>
          <Header />
          <Home />
          <Overview />
          <FeaturedWorks />
          <Material />
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
