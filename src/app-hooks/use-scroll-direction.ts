"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect scroll direction and visibility.
 * - Returns `true` when user scrolls up or near top
 * - Returns `false` when scrolling down
 */
export function useScrollDirection(
  offset: number = 50,
  enabled: boolean = true
) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY < offset || currentScrollY < lastScrollY.current) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, offset]);

  return isVisible;
}
