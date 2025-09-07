"use client";

import React, { ReactNode, useEffect, useMemo, useCallback } from "react";
import "epsilon-ui/dist/epsilon.css";

export interface TextBoxProps {
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  placeholder?: string;
  value?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  type?: "default" | "email" | "password" | "search";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "fancy";
}

const TextBox: React.FC<TextBoxProps> = ({
  className = "",
  parallax = false,
  tiltFactor = 20,

  placeholder = "Type here...",
  value = "",
  id,
  name,
  autoComplete = "off",
  autoFocus = false,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  onFocus,

  type = "default",
  variant = "primary",
}) => {
  const textBoxRef = React.useRef<HTMLInputElement>(null);
  
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

  // Memoize variant classes
  const inBuiltClass = useMemo(() => {
    const baseClasses = "size-base text-body overflow-hidden outline-0 delay-25 transition-[outline] transition-[background]";
    
    switch (variant) {
      case "secondary":
        return `${baseClasses} text-(--foreground) bg-(--foreground)/10 outline-(--foreground)/5 hover:bg-(--foreground)/9 focus:outline-3`;
      case "outline":
        return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 outline-(--foreground)/7 hover:bg-(--foreground)/9 focus:outline-3`;
      case "fancy":
        return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 outline-(--foreground)/7 hover:bg-(--foreground)/2 focus:outline-3`;
      default:
        return `${baseClasses} text-(--background) bg-(--foreground) outline-(--foreground)/50 hover:bg-(--foreground)/90 focus:outline-3`;
    }
  }, [variant]);

  // Memoize event handlers
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  }, [onChange]);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
  }, [onFocus]);

  useEffect(() => {
    const textBox = textBoxRef.current;
    if (!textBox) return;

    let handleMouseMove = (e: MouseEvent) => {};
    let handleMouseLeave = () => {};

    if (parallax) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = textBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / (textBox.clientHeight / effectiveTiltFactor);
        const tiltY = (centerX - x) / (textBox.clientWidth / effectiveTiltFactor);

        textBox.style.setProperty("--x", `${x}%`);
        textBox.style.setProperty("--y", `${y}%`);
        textBox.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      handleMouseLeave = () => {
        textBox.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };

      textBox.addEventListener("mousemove", handleMouseMove);
      textBox.addEventListener("mouseleave", handleMouseLeave);
    }

    textBox.value = value;

    return () => {
      textBox.removeEventListener("mousemove", handleMouseMove);
      textBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [parallax, effectiveTiltFactor, value]);

  return (
    <input
      type="text"
      className={`${inBuiltClass} ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      onChange={handleChange}
      onFocus={handleFocus}
      ref={textBoxRef}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(TextBox);
