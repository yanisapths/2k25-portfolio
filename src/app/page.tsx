"use client";
import Home from "@/components/home/Home";
import { LoadingSplash } from "@/components/home/splash-screen/SplashScreen";
import { Header } from "@/components/navigation/header";
import { useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <LoadingSplash
          onLoadComplete={handleLoadComplete}
          setIsZooming={setIsZooming}
        />
      )}
      {!isLoading && (
        <div>
          <Header />
          <div
            className={`fixed pointer-events-none inset-0 flex items-center justify-center ${
              isZooming ? "animate-zoom-in" : ""
            }`}
          >
            <Home />
          </div>
        </div>
      )}
    </div>
  );
}
