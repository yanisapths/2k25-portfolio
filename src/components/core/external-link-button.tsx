"use client";
import { ArrowUpRight } from "lucide-react";
import { Button, ButtonProps } from "@heroui/react";
import React from "react";
import { cn } from "@/lib/utils";

interface ExternalLinkButtonProps extends ButtonProps {
  className?: string;
}

export const ExternalLinkButton = ({ className }: ExternalLinkButtonProps) => {
  return (
    <Button
      className={cn(
        className,
        "w-9 h-9 flex-col rounded-full group-hover:bg-white/40 bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30 transition"
      )}
    >
      <ArrowUpRight size={18} className="text-white" />
    </Button>
  );
};
