"use client";

import React, { ReactNode, useState, useEffect, useMemo, useCallback } from "react";
import "epsilon-ui/dist/epsilon.css";
import Button from "../button/button";

interface NavBarProps {
  children?: ReactNode;
  className?: string;
  brand?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "fancy";
}

interface NavItemProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "positive"
    | "danger"
    | "link"
    | "fancy";
}

const NavBar: React.FC<NavBarProps> = ({
  children,
  className = "",
  brand,
  variant = "primary",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize mobile check function
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  // Memoize variant classes
  const inBuiltClass = useMemo(() => {
    const baseClasses = "text-body";
    
    switch (variant) {
      case "secondary":
        return `${baseClasses} bg-(--foreground)/10 text-(--foreground)`;
      case "outline":
        return `${baseClasses} bg-(--foreground)/10 text-(--foreground) border-b border-(--foreground)/20`;
      case "fancy":
        return `${baseClasses} bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 text-(--foreground) border-b border-(--foreground)/20`;
      default:
        return `${baseClasses} bg-(--foreground) text-(--background)`;
    }
  }, [variant]);

  // Memoize toggle handler
  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className={`w-full ${inBuiltClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 p-base">
          <div className="flex-shrink-0">
            {brand}
          </div>
          <div className={`hidden md:flex items-center space-x-4`}>
            {children}
          </div>
          <div className="md:hidden">
            <Button
              onClick={handleToggle}
              className="inline-flex items-center justify-center"
              variant="outline"
              parallax
              tiltFactor={0}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-base`}>
          <div className="flex flex-col space-y-sm">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = React.memo(({
  children,
  className,
  href = "#",
  disabled = false,
  variant = "link",
}) => {
  return (
    <a href={href}>
      <Button variant={variant} disabled={disabled} className={className}>{children}</Button>
    </a>
  );
});

// Memoize the main NavBar component
const MemoizedNavBar = React.memo(NavBar);

export { MemoizedNavBar as NavBar, NavItem };