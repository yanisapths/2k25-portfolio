"use client";

import { isDev } from "@/lib/constants";
import { useEffect } from "react";

export const AppHooks = () => {
  useOverflowDebuggerInDev();

  return null;
};

const useOverflowDebuggerInDev = () => {
  useEffect(() => {
    if (!isDev) return;
    let mousetrapRef: Mousetrap.MousetrapInstance | undefined = undefined;
    import("mousetrap").then(({ default: mousetrap }) => {
      mousetrapRef = mousetrap.bind(["command+i", "ctrl+i", "alt+i"], () => {
        document.body.classList.toggle("inspect");
      });
    });

    return () => {
      mousetrapRef?.unbind(["command+i", "ctrl+i", "alt+i"]);
    };
  }, []);
};
