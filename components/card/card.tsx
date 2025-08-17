"use client";

import React, { ReactNode, useEffect } from "react";
import "./epsilon.css";
import { applyParallax } from "./epsilon";

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
  const isTouchDevice = () => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  };

  if (isTouchDevice()) {
    tiltFactor = 0;
  }

  let inBuiltClass =
    "rounded-(--s2) text-(--background) bg-(--foreground) outline-(--foreground)/50 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/90 focus:outline-3";

  switch (variant) {
    case "secondary":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) bg-(--foreground)/10 outline-(--foreground)/5 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";
      break;
    case "outline":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 outline-(--foreground)/7 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";
      break;
    case "positive":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) bg-blue-500 dark:bg-blue-800 outline-blue-500/50 dark:outline-blue-800/50 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-blue-500/90 dark:hover:bg-blue-800/90 focus:outline-3";
      break;
    case "danger":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) bg-red-500 dark:bg-red-800 outline-red-500/50 dark:outline-red-800/50 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-red-500/90 dark:hover:bg-red-800/90 focus:outline-3";
      break;
    case "link":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) outline-0 delay-25 transition-[background] transition-[text-decoration] underline-offset-4 hover:underline hover:shadow-lg/20";
      break;
    case "fancy":
      inBuiltClass =
        "rounded-(--s2) text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 outline-(--foreground)/7 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/2 focus:outline-3";
      break;
  }

  useEffect(() => {
    applyParallax(cardRef, parallax, tiltFactor);
  });

  return (
    <div
      className={`${
        parallax ? "glow-effect" : "no-glow-effect"
      } ${inBuiltClass} p-6 h-fit font-medium text-(length:--s3) overflow-hidden ${className}`}
      ref={cardRef}
    >
      {children}
      <div className="glow-container" />
    </div>
  );
};

export default Card;
