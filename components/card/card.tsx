"use client";

import React, { ReactNode, useEffect, useMemo } from "react";
import "epsilon-ui/dist/epsilon.css";
import { applyParallax } from "../../dist/epsilon";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "positive"
    | "danger"
    | "link"
    | "fancy";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "w-fit h-[100px]",
  parallax = false,
  tiltFactor = 20,

  variant = "secondary",
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  // Memoize touch device detection
  const isTouchDevice = useMemo(() => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  }, []);

  // Memoize effective tilt factor
  const effectiveTiltFactor = useMemo(() => {
    return isTouchDevice ? 0 : tiltFactor;
  }, [isTouchDevice, tiltFactor]);

  // Memoize variant classes to prevent recalculation
  const inBuiltClass = useMemo(() => {
    const baseClasses = "rounded-base text-body outline-0 delay-25 transition-[outline] transition-[background]";
    
    switch (variant) {
      case "secondary":
        return `${baseClasses} text-(--foreground) bg-(--foreground)/10 outline-(--foreground)/5 hover:bg-(--foreground)/9 focus:outline-3`;
      case "outline":
        return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 outline-(--foreground)/7 hover:bg-(--foreground)/9 focus:outline-3`;
      case "positive":
        return `${baseClasses} text-(--foreground) bg-blue-500 dark:bg-blue-800 outline-blue-500/50 dark:outline-blue-800/50 hover:bg-blue-500/90 dark:hover:bg-blue-800/90 focus:outline-3`;
      case "danger":
        return `${baseClasses} text-(--foreground) bg-red-500 dark:bg-red-800 outline-red-500/50 dark:outline-red-800/50 hover:bg-red-500/90 dark:hover:bg-red-800/90 focus:outline-3`;
      case "link":
        return `${baseClasses} text-(--foreground) transition-[text-decoration] underline-offset-4 hover:underline hover:shadow-lg/20`;
      case "fancy":
        return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 outline-(--foreground)/7 hover:bg-(--foreground)/2 focus:outline-3`;
      default:
        return `${baseClasses} text-(--background) bg-(--foreground) outline-(--foreground)/50 hover:bg-(--foreground)/90 focus:outline-3`;
    }
  }, [variant]);

  useEffect(() => {
    applyParallax(cardRef, parallax, effectiveTiltFactor);
  }, [parallax, effectiveTiltFactor]);

  return (
    <div
      className={`${
        parallax ? "glow-effect" : "no-glow-effect"
      } ${inBuiltClass} p-lg h-fit overflow-hidden ${className}`}
      ref={cardRef}
    >
      {children}
      <div className="glow-container" />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Card);
