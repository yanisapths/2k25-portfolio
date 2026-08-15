"use client";

import { useEffect, useState } from "react";

export const breakpoint = {
  sm: 481,
  md: 769,
  lg: 1280,
  xl: 1536,
} as const;

interface UseBreakpointsOptions {
  exact?: boolean;
}

function useMatchMedia(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const onChange = () => setMatches(mediaQueryList.matches);

    onChange();
    mediaQueryList.addEventListener("change", onChange);
    return () => mediaQueryList.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export const useBreakpoints = (options?: UseBreakpointsOptions) => {
  const xs = useMatchMedia(mediaQuery.xs);

  const sm = useMatchMedia(
    options?.exact ? mediaQueryExact.sm : mediaQuery.sm
  );

  const md = useMatchMedia(
    options?.exact ? mediaQueryExact.md : mediaQuery.md
  );

  const lg = useMatchMedia(
    options?.exact ? mediaQueryExact.lg : mediaQuery.lg
  );

  const xl = useMatchMedia(mediaQuery.xl);

  return {
    breakpoint,
    xs,
    sm,
    md,
    lg,
    xl,
  };
};

const mediaQuery = {
  xs: `(max-width: ${breakpoint.sm}px)`,
  sm: `(min-width: ${breakpoint.sm}px)`,
  md: `(min-width: ${breakpoint.md}px)`,
  lg: `(min-width: ${breakpoint.lg}px)`,
  xl: `(min-width: ${breakpoint.xl}px)`,
} as const;

const mediaQueryExact = {
  xs: `(max-width: ${breakpoint.sm}px)`,
  sm: `(min-width: ${breakpoint.sm}px) and (max-width: ${breakpoint.md}px)`,
  md: `(min-width: ${breakpoint.md}px) and (max-width: ${breakpoint.lg}px)`,
  lg: `(min-width: ${breakpoint.lg}px) and (max-width: ${breakpoint.xl}px)`,
  xl: `(min-width: ${breakpoint.xl}px)`,
} as const;
