/**
 * Epsilon UI Type System
 * Based on the Golden Ratio (φ ≈ 1.618) and text baseline grid
 */

// Golden ratio constant
export const GOLDEN_RATIO = 1.618;

// Base font size (16px = 1rem)
export const BASE_FONT_SIZE = 16;

// Base line height for optimal readability
export const BASE_LINE_HEIGHT = 1.5;

// Base spacing unit (8px = 0.5rem)
export const BASE_SPACING = 8;

// Type scale based on golden ratio
export const TYPE_SCALE = {
  xs: Math.pow(GOLDEN_RATIO, -2),    // ~0.382 (6.1px)
  sm: Math.pow(GOLDEN_RATIO, -1),    // ~0.618 (9.9px)
  base: 1,                           // 1.000 (16px)
  lg: GOLDEN_RATIO,                  // ~1.618 (25.9px)
  xl: Math.pow(GOLDEN_RATIO, 2),     // ~2.618 (41.9px)
  '2xl': Math.pow(GOLDEN_RATIO, 3),  // ~4.236 (67.8px)
  '3xl': Math.pow(GOLDEN_RATIO, 4),  // ~6.854 (109.7px)
  '4xl': Math.pow(GOLDEN_RATIO, 5),  // ~11.090 (177.4px)
} as const;

// Spacing scale based on golden ratio
export const SPACING_SCALE = {
  0: 0,
  1: BASE_SPACING * Math.pow(GOLDEN_RATIO, -2),     // ~3.1px
  2: BASE_SPACING * Math.pow(GOLDEN_RATIO, -1),     // ~4.9px
  3: BASE_SPACING,                                  // 8px
  4: BASE_SPACING * GOLDEN_RATIO,                   // ~12.9px
  5: BASE_SPACING * Math.pow(GOLDEN_RATIO, 2),      // ~20.9px
  6: BASE_SPACING * Math.pow(GOLDEN_RATIO, 3),      // ~33.8px
  7: BASE_SPACING * Math.pow(GOLDEN_RATIO, 4),      // ~54.8px
  8: BASE_SPACING * Math.pow(GOLDEN_RATIO, 5),      // ~88.7px
  9: BASE_SPACING * Math.pow(GOLDEN_RATIO, 6),      // ~143.5px
  10: BASE_SPACING * Math.pow(GOLDEN_RATIO, 7),     // ~232.2px
} as const;

// Border radius scale
export const RADIUS_SCALE = {
  none: 0,
  sm: BASE_SPACING * 0.125,                         // 1px
  base: BASE_SPACING * 0.25,                        // 2px
  md: BASE_SPACING * 0.5,                           // 4px
  lg: BASE_SPACING * 0.75,                          // 6px
  xl: BASE_SPACING,                                 // 8px
  '2xl': BASE_SPACING * GOLDEN_RATIO,               // ~12.9px
  '3xl': BASE_SPACING * Math.pow(GOLDEN_RATIO, 2),  // ~20.9px
  full: 9999,
} as const;

// Component size scale
export const COMPONENT_SCALE = {
  xs: {
    padding: SPACING_SCALE[1],
    fontSize: TYPE_SCALE.xs,
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE.sm,
  },
  sm: {
    padding: SPACING_SCALE[2],
    fontSize: TYPE_SCALE.sm,
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE.base,
  },
  base: {
    padding: SPACING_SCALE[3],
    fontSize: TYPE_SCALE.base,
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE.md,
  },
  lg: {
    padding: SPACING_SCALE[4],
    fontSize: TYPE_SCALE.lg,
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE.lg,
  },
  xl: {
    padding: SPACING_SCALE[5],
    fontSize: TYPE_SCALE.xl,
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE.xl,
  },
  '2xl': {
    padding: SPACING_SCALE[6],
    fontSize: TYPE_SCALE['2xl'],
    lineHeight: BASE_LINE_HEIGHT,
    borderRadius: RADIUS_SCALE['2xl'],
  },
} as const;

// Typography scale with semantic names
export const TYPOGRAPHY = {
  display: {
    fontSize: TYPE_SCALE['4xl'],
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: -0.02,
  },
  h1: {
    fontSize: TYPE_SCALE['3xl'],
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: -0.01,
  },
  h2: {
    fontSize: TYPE_SCALE['2xl'],
    lineHeight: 1.25,
    fontWeight: 600,
    letterSpacing: -0.01,
  },
  h3: {
    fontSize: TYPE_SCALE.xl,
    lineHeight: 1.3,
    fontWeight: 600,
    letterSpacing: 0,
  },
  h4: {
    fontSize: TYPE_SCALE.lg,
    lineHeight: 1.35,
    fontWeight: 600,
    letterSpacing: 0,
  },
  h5: {
    fontSize: TYPE_SCALE.base,
    lineHeight: 1.4,
    fontWeight: 600,
    letterSpacing: 0,
  },
  h6: {
    fontSize: TYPE_SCALE.sm,
    lineHeight: 1.45,
    fontWeight: 600,
    letterSpacing: 0,
  },
  body: {
    fontSize: TYPE_SCALE.base,
    lineHeight: BASE_LINE_HEIGHT,
    fontWeight: 400,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontSize: TYPE_SCALE.lg,
    lineHeight: BASE_LINE_HEIGHT,
    fontWeight: 400,
    letterSpacing: 0,
  },
  bodySmall: {
    fontSize: TYPE_SCALE.sm,
    lineHeight: BASE_LINE_HEIGHT,
    fontWeight: 400,
    letterSpacing: 0,
  },
  caption: {
    fontSize: TYPE_SCALE.xs,
    lineHeight: BASE_LINE_HEIGHT,
    fontWeight: 400,
    letterSpacing: 0.01,
  },
  button: {
    fontSize: TYPE_SCALE.base,
    lineHeight: 1,
    fontWeight: 500,
    letterSpacing: 0.01,
  },
  buttonSmall: {
    fontSize: TYPE_SCALE.sm,
    lineHeight: 1,
    fontWeight: 500,
    letterSpacing: 0.01,
  },
  buttonLarge: {
    fontSize: TYPE_SCALE.lg,
    lineHeight: 1,
    fontWeight: 500,
    letterSpacing: 0.01,
  },
} as const;

// Type definitions
export type TypeScale = keyof typeof TYPE_SCALE;
export type SpacingScale = keyof typeof SPACING_SCALE;
export type RadiusScale = keyof typeof RADIUS_SCALE;
export type ComponentScale = keyof typeof COMPONENT_SCALE;
export type TypographyScale = keyof typeof TYPOGRAPHY;

// Utility types for component props
export interface TypeSystemProps {
  size?: ComponentScale;
  spacing?: SpacingScale;
  radius?: RadiusScale;
  typography?: TypographyScale;
}

// Helper functions
export const getFontSize = (scale: TypeScale): number => {
  return TYPE_SCALE[scale] * BASE_FONT_SIZE;
};

export const getSpacing = (scale: SpacingScale): number => {
  return SPACING_SCALE[scale];
};

export const getRadius = (scale: RadiusScale): number => {
  return RADIUS_SCALE[scale];
};

export const getComponentSize = (scale: ComponentScale) => {
  return COMPONENT_SCALE[scale];
};

export const getTypography = (scale: TypographyScale) => {
  return TYPOGRAPHY[scale];
};

// CSS custom property generators
export const generateCSSVariables = () => {
  const variables: Record<string, string> = {};
  
  // Type scale variables
  Object.entries(TYPE_SCALE).forEach(([key, value]) => {
    variables[`--type-${key}`] = `${value}rem`;
  });
  
  // Spacing scale variables
  Object.entries(SPACING_SCALE).forEach(([key, value]) => {
    variables[`--space-${key}`] = `${value}px`;
  });
  
  // Radius scale variables
  Object.entries(RADIUS_SCALE).forEach(([key, value]) => {
    variables[`--radius-${key}`] = `${value}px`;
  });
  
  return variables;
};

// Baseline grid helper
export const getBaselineGrid = (fontSize: number, lineHeight: number = BASE_LINE_HEIGHT): number => {
  return fontSize * lineHeight;
};

// Responsive scaling helper
export const getResponsiveScale = (baseScale: number, breakpoint: 'sm' | 'md' | 'lg' | 'xl'): number => {
  const scaleFactors = {
    sm: 0.875,  // 14px base
    md: 1,      // 16px base
    lg: 1.125,  // 18px base
    xl: 1.25,   // 20px base
  };
  
  return baseScale * scaleFactors[breakpoint];
};
