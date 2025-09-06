"use client";

import React, { ReactNode, useEffect, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "epsilon-ui/dist/epsilon.css";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children?: ReactNode;
  className?: string;
  reveal?: boolean;

  duration?: number;
  delay?: number;
  once?: boolean;
  opacity?: number;
  scale?: number;
  angle?: number;
  threshold?: number;
  distance?: number;
  reverse?: boolean;
  ease?: string;
  direction?: "hor" | "ver";
  stagger?: number;
  staggerFrom?: "start" | "end" | "center";
}

interface SidebarProps {
  children?: ReactNode;
  className?: string;
  side?: "left" | "right";
}

const ELayout: React.FC<LayoutProps> = ({
  children,
  className = "",
  reveal = false,

  duration = 0.8,
  delay = 0,
  once = true,
  opacity = 0,
  scale = 1,
  angle = 0,
  threshold = 0.1,
  distance = 100,
  reverse = false,
  ease = "power3.out",
  direction = "ver",
  stagger = 0,
  staggerFrom = "start",
}) => {
  // Memoize calculated values
  const animationConfig = useMemo(() => {
    const axis = direction === "hor" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const rotation = reverse ? -angle : angle;
    const percent = (1 - threshold) * 100;
    
    return { axis, offset, rotation, percent };
  }, [direction, reverse, distance, angle, threshold]);

  useEffect(() => {
    if (reveal) {
      const el = document.querySelectorAll(".epsilon-layout .epsilon-sublayout");
      if (!el.length) return;
      
      const { axis, offset, rotation, percent } = animationConfig;
      
      let tl = once
        ? gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: `top ${percent}%`,
              end: `bottom +=50px`,
            },
          })
        : gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: `top ${percent}%`,
              end: `bottom +=50px`,
              onEnter: () => {
                tl.restart();
              },
              onLeave: () => {
                tl.pause(0);
              },
              onEnterBack: () => {
                tl.restart();
              },
              onLeaveBack: () => {
                tl.pause(0);
              },
            },
          });

      tl.set(el, {
        [axis]: offset,
        scale,
        opacity: opacity,
        rotate: rotation,
      });

      tl.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration,
        ease,
        delay,
        stagger: {
          amount: stagger,
          from: staggerFrom,
        },
      });

      // Cleanup function
      return () => {
        tl.kill();
      };
    }
  }, [reveal, once, duration, delay, opacity, scale, angle, threshold, distance, reverse, ease, direction, stagger, staggerFrom, animationConfig]);
  return (
    <div className={`w-full h-full overflow-hidden epsilon-layout flex flex-col md:flex-row ${className}`}>
      {children}
    </div>
  );
};

const ESidebar: React.FC<SidebarProps> = React.memo(({
  children,
  className = "",
  side = "left",
}) => {
  // Memoize className calculation
  const sidebarClassName = useMemo(() => {
    const baseClasses = "w-full md:w-100 border-(--foreground)/30 bg-(--foreground)/4 p-4 epsilon-sublayout";
    const sideClasses = side === "left" 
      ? "border-b md:border-e" 
      : "border-t md:border-s md:ml-auto";
    
    return `${sideClasses} ${baseClasses} ${className}`;
  }, [side, className]);

  return (
    <div className={sidebarClassName}>
      {children}
    </div>
  );
});

const EContentbar: React.FC<LayoutProps> = React.memo(({children, className}) => {
  return (
    <div className={`w-full overflow-x-hidden overflow-y-scroll p-4 epsilon-sublayout ${className}`}>
      {children}
    </div>
  );
});

// Memoize the main ELayout component
const MemoizedELayout = React.memo(ELayout);

export { MemoizedELayout as ELayout, ESidebar, EContentbar };
