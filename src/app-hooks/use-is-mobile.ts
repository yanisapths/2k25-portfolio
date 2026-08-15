"use client";

import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 768;

export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_MAX_WIDTH}px)`
    );
    const onChange = () => setIsMobile(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
