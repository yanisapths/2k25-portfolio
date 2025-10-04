"use client";
import { useEffect, useState } from "react";

interface LoadingSplashProps {
  onLoadComplete: () => void;
  setIsZooming: any;
}

export const LoadingSplash = ({
  onLoadComplete,
  setIsZooming,
}: LoadingSplashProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setProgress(100);

          setTimeout(() => setIsZooming(true), 100);

          setTimeout(onLoadComplete, 100);
        }
        return next >= 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadComplete, setIsZooming]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-500`}
    >
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="w-full max-w-md mx-auto space-y-2 animate-fade-in">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-pulse-glow transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 20px hsl(var(--primary))",
              }}
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>LOADING</span>
            <span className="px-2">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
