import { cn } from "@/lib/utils";
import React from "react";

interface GlowProps {
  className?: string;
}

export const GlowDp1 = ({ className }: GlowProps) => {
  return (
    <div
      className={cn(className)}
      style={{
        background:
          "linear-gradient(179.89deg, rgba(255, 255, 255, 0) -206.11%, rgba(255, 255, 255, 0.5) 138.73%)",
        filter: "blur(150px)",
      }}
    />
  );
};
