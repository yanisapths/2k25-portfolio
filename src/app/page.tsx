"use client";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { Noise } from "@/components/effect/Noise";
import { Background } from "@/components/home/background/Background";
import { FeaturedWorks } from "@/components/home/featured-works/FeaturedWorks";
import Home from "@/components/home/Home";
import { Material } from "@/components/home/materials/Material";
import { Overview } from "@/components/home/my-space/Overview";
import { LoadingSplash } from "@/components/home/splash-screen/SplashScreen";
import { Footer, CopyrightFooter } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { cn } from "@/lib/utils";

import { Leva } from "leva";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StarField = dynamic(
  () => import("@/components/home/background/StarField"),
  {
    ssr: false,
  },
);

export default function HomePage() {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const enableHeavyFx = isMobile === false;
  const showSplash = isMobile !== true && isLoading;

  useEffect(() => {
    if (isMobile === true) {
      setIsLoading(false);
      setIsZooming(false);
    }
  }, [isMobile]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="scroll-smooth">
      <Leva collapsed hidden={true} />
      {showSplash && (
        <LoadingSplash
          onLoadComplete={handleLoadComplete}
          setIsZooming={setIsZooming}
        />
      )}

      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        {enableHeavyFx && <StarField />}
        <Background />
        {enableHeavyFx && <Noise />}
      </div>

      <Header />

      <div
        className={cn(
          "relative z-10",
          isZooming && enableHeavyFx && "animate-zoom-in",
          "lg:flex lg:flex-col lg:h-auto lg:w-screen lg:items-center lg:justify-center",
        )}
      >
        <Home />
        <Overview />
        <FeaturedWorks />
        <Material />
        <CopyrightFooter />
      </div>
    </div>
  );
}
