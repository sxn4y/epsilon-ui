/**
 * React Hook for Type System
 * Provides easy access to type system values and utilities
 */

import { useMemo } from 'react';
import {
  TypeScale,
  SpacingScale,
  RadiusScale,
  ComponentScale,
  TypographyScale,
  getFontSize,
  getSpacing,
  getRadius,
  getComponentSize,
  getTypography,
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
} from './types';

export interface UseTypeSystemReturn {
  // Scale getters
  getFontSize: (scale: TypeScale) => number;
  getSpacing: (scale: SpacingScale) => number;
  getRadius: (scale: RadiusScale) => number;
  getComponentSize: (scale: ComponentScale) => any;
  getTypography: (scale: TypographyScale) => any;
  
  // Utility functions
  pxToRem: (px: number) => number;
  remToPx: (rem: number) => number;
  createResponsiveFontSize: (baseScale: TypeScale, breakpoints?: any) => string;
  createFluidTypography: (minScale: TypeScale, maxScale: TypeScale) => string;
  createComponentStyles: (size: ComponentScale, additionalStyles?: any) => any;
  createBaselineRhythm: (fontSize: number, lineHeight?: number) => any;
  
  // Constants
  BASE_FONT_SIZE: number;
  BASE_LINE_HEIGHT: number;
}

export const useTypeSystem = (): UseTypeSystemReturn => {
  return useMemo(() => ({
    // Scale getters
    getFontSize,
    getSpacing,
    getRadius,
    getComponentSize,
    getTypography,
    
    // Utility functions
    pxToRem: (px: number) => px / BASE_FONT_SIZE,
    remToPx: (rem: number) => rem * BASE_FONT_SIZE,
    
    createResponsiveFontSize: (baseScale: TypeScale, breakpoints: any = {}) => {
      const baseSize = getFontSize(baseScale);
      const { sm = 0.875, md = 1, lg = 1.125, xl = 1.25 } = breakpoints;

      return `
        font-size: ${baseSize * sm}px;
        
        @media (min-width: 640px) {
          font-size: ${baseSize * md}px;
        }
        
        @media (min-width: 768px) {
          font-size: ${baseSize * lg}px;
        }
        
        @media (min-width: 1024px) {
          font-size: ${baseSize * xl}px;
        }
      `;
    },
    
    createFluidTypography: (minScale: TypeScale, maxScale: TypeScale) => {
      const minSize = getFontSize(minScale);
      const maxSize = getFontSize(maxScale);
      const minViewport = 320;
      const maxViewport = 1200;

      const slope = (maxSize - minSize) / (maxViewport - minViewport);
      const intersection = minSize - slope * minViewport;

      return `
        font-size: clamp(${minSize}px, ${intersection}px + ${slope * 100}vw, ${maxSize}px);
      `;
    },
    
    createComponentStyles: (size: ComponentScale, additionalStyles: any = {}) => {
      const componentSize = getComponentSize(size);
      
      return {
        padding: `${componentSize.padding}px`,
        fontSize: `${componentSize.fontSize}rem`,
        borderRadius: `${componentSize.borderRadius}px`,
        lineHeight: componentSize.lineHeight.toString(),
        ...additionalStyles,
      };
    },
    
    createBaselineRhythm: (fontSize: number, lineHeight: number = BASE_LINE_HEIGHT) => {
      const baseline = fontSize * lineHeight;
      
      return {
        lineHeight,
        marginTop: baseline * 0.5,
        marginBottom: baseline * 0.5,
      };
    },
    
    // Constants
    BASE_FONT_SIZE,
    BASE_LINE_HEIGHT,
  }), []);
};

/**
 * Hook for creating responsive typography
 */
export const useResponsiveTypography = (
  baseScale: TypeScale,
  breakpoints: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  } = {}
) => {
  const typeSystem = useTypeSystem();
  
  return useMemo(() => {
    return typeSystem.createResponsiveFontSize(baseScale, breakpoints);
  }, [baseScale, breakpoints, typeSystem]);
};

/**
 * Hook for creating fluid typography
 */
export const useFluidTypography = (
  minScale: TypeScale,
  maxScale: TypeScale,
  minViewport: number = 320,
  maxViewport: number = 1200
) => {
  const typeSystem = useTypeSystem();
  
  return useMemo(() => {
    return typeSystem.createFluidTypography(minScale, maxScale);
  }, [minScale, maxScale, typeSystem]);
};

/**
 * Hook for component sizing
 */
export const useComponentSize = (
  size: ComponentScale,
  additionalStyles: Record<string, string> = {}
) => {
  const typeSystem = useTypeSystem();
  
  return useMemo(() => {
    return typeSystem.createComponentStyles(size, additionalStyles);
  }, [size, additionalStyles, typeSystem]);
};

/**
 * Hook for baseline rhythm
 */
export const useBaselineRhythm = (
  fontSize: number,
  lineHeight: number = BASE_LINE_HEIGHT
) => {
  const typeSystem = useTypeSystem();
  
  return useMemo(() => {
    return typeSystem.createBaselineRhythm(fontSize, lineHeight);
  }, [fontSize, lineHeight, typeSystem]);
};
