/**
 * React Hook for Type System
 * Provides easy access to type system values and utilities
 */
import { TypeScale, SpacingScale, RadiusScale, ComponentScale, TypographyScale } from './types';
export interface UseTypeSystemReturn {
    getFontSize: (scale: TypeScale) => number;
    getSpacing: (scale: SpacingScale) => number;
    getRadius: (scale: RadiusScale) => number;
    getComponentSize: (scale: ComponentScale) => any;
    getTypography: (scale: TypographyScale) => any;
    pxToRem: (px: number) => number;
    remToPx: (rem: number) => number;
    createResponsiveFontSize: (baseScale: TypeScale, breakpoints?: any) => string;
    createFluidTypography: (minScale: TypeScale, maxScale: TypeScale) => string;
    createComponentStyles: (size: ComponentScale, additionalStyles?: any) => any;
    createBaselineRhythm: (fontSize: number, lineHeight?: number) => any;
    BASE_FONT_SIZE: number;
    BASE_LINE_HEIGHT: number;
}
export declare const useTypeSystem: () => UseTypeSystemReturn;
/**
 * Hook for creating responsive typography
 */
export declare const useResponsiveTypography: (baseScale: TypeScale, breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}) => string;
/**
 * Hook for creating fluid typography
 */
export declare const useFluidTypography: (minScale: TypeScale, maxScale: TypeScale, minViewport?: number, maxViewport?: number) => string;
/**
 * Hook for component sizing
 */
export declare const useComponentSize: (size: ComponentScale, additionalStyles?: Record<string, string>) => any;
/**
 * Hook for baseline rhythm
 */
export declare const useBaselineRhythm: (fontSize: number, lineHeight?: number) => any;
//# sourceMappingURL=useTypeSystem.d.ts.map