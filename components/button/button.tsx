"use client";

import React, { ReactNode, useEffect, useMemo, useCallback } from "react";
import "epsilon-ui/dist/epsilon.css";
import { applyParallax } from "../epsilon";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  autoFocus?: boolean;
  command?: string;
  commandFor?: string;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "positive"
    | "danger"
    | "link"
    | "fancy";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "w-fit h-[100px]",
  parallax = false,
  tiltFactor = 20,

  autoFocus = false,
  disabled = false,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate = false,
  formTarget,
  name,
  type = "button",
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,

  variant = "primary",
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
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
    const baseClasses = "size-base text-button outline-0 delay-25 transition-[outline] transition-[background]";
    
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

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  }, [onClick]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseEnter?.(e);
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(e);
  }, [onMouseLeave]);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLButtonElement>) => {
    onFocus?.(e);
  }, [onFocus]);

  useEffect(() => {
    applyParallax(buttonRef, parallax, effectiveTiltFactor);
  }, [parallax, effectiveTiltFactor]);

  return (
    <button
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      name={name}
      type={type}
      value={value}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      className={`${
        parallax ? "glow-effect" : "no-glow-effect"
      } ${inBuiltClass} h-fit overflow-hidden ${className}`}
      ref={buttonRef}
    >
      {children}
      <div className="glow-container" />
    </button>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Button);
