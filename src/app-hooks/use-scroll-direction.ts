"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook to detect scroll direction and visibility.
 * - Returns `true` when user scrolls up or near top
 * - Returns `false` when scrolling down
 */
export function useScrollDirection(offset: number = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY < offset || currentScrollY < lastScrollY) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, offset]);

  return isVisible;
}
