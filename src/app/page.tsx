"use client";
import { FeaturedWorks } from "@/components/home/featured-works/page";
import Home from "@/components/home/Home";
import { Overview } from "@/components/home/my-space/Overview";
import { LoadingSplash } from "@/components/home/splash-screen/SplashScreen";
import { Header } from "@/components/navigation/header";
import { Leva } from "leva";
import { useState } from "react";

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
        <div>
          <Header />
          <div className="pointer-events-none flex flex-col h-auto w-screen items-center justify-center">
            <Home />

            <Overview />

            <FeaturedWorks />
          </div>
        </div>
      )}
    </div>
  );
}
