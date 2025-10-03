"use client";

import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppHooks } from "@/app-hooks";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <AppHooks />
        {children}
      </QueryClientProvider>
    </HeroUIProvider>
  );
};
