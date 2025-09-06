/**
 * Type System Utility Functions
 * Helper functions for working with the golden ratio type system
 */
import { TypeScale, ComponentScale } from './types';
/**
 * Generate CSS custom properties for the type system
 */
export declare const generateTypeSystemCSS: () => string;
/**
 * Create a responsive font size based on viewport width
 */
export declare const createResponsiveFontSize: (baseScale: TypeScale, breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}) => string;
/**
 * Create a fluid typography scale that scales with viewport
 */
export declare const createFluidTypography: (minScale: TypeScale, maxScale: TypeScale, minViewport?: number, maxViewport?: number) => string;
/**
 * Generate component styles based on size
 */
export declare const createComponentStyles: (size: ComponentScale, additionalStyles?: Record<string, string>) => Record<string, string>;
/**
 * Create a consistent spacing rhythm based on baseline grid
 */
export declare const createBaselineRhythm: (fontSize: number, lineHeight?: number) => {
    lineHeight: number;
    marginTop: number;
    marginBottom: number;
};
/**
 * Generate CSS classes for a component with type system integration
 */
export declare const generateComponentClasses: (componentName: string, sizes?: ComponentScale[]) => string;
/**
 * Create a modular scale for consistent spacing
 */
export declare const createModularScale: (base: number, ratio?: number, steps?: number) => number[];
/**
 * Convert pixel values to rem based on base font size
 */
export declare const pxToRem: (px: number, baseFontSize?: number) => number;
/**
 * Convert rem values to pixels based on base font size
 */
export declare const remToPx: (rem: number, baseFontSize?: number) => number;
/**
 * Create a consistent vertical rhythm for text elements
 */
export declare const createVerticalRhythm: (fontSize: number, lineHeight?: number) => {
    fontSize: string;
    lineHeight: string;
    marginTop: string;
    marginBottom: string;
};
/**
 * Generate a complete typography system CSS
 */
export declare const generateTypographySystem: () => string;
/**
 * Create a spacing system CSS
 */
export declare const generateSpacingSystem: () => string;
//# sourceMappingURL=utils.d.ts.map