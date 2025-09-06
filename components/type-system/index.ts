/**
 * Epsilon UI Type System
 * Golden Ratio-based scaling system for consistent design
 */

// Export all types and constants
export * from './types';

// Export utility functions
export * from './utils';

// Export React hooks
export * from './useTypeSystem';

// Re-export commonly used items for convenience
export {
  GOLDEN_RATIO,
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  BASE_SPACING,
  TYPE_SCALE,
  SPACING_SCALE,
  RADIUS_SCALE,
  COMPONENT_SCALE,
  TYPOGRAPHY,
} from './types';

export {
  generateTypeSystemCSS,
  createResponsiveFontSize,
  createFluidTypography,
  createComponentStyles,
  createBaselineRhythm,
  generateComponentClasses,
  createModularScale,
  pxToRem,
  remToPx,
  createVerticalRhythm,
  generateTypographySystem,
  generateSpacingSystem,
} from './utils';

export {
  useTypeSystem,
  useResponsiveTypography,
  useFluidTypography,
  useComponentSize,
  useBaselineRhythm,
} from './useTypeSystem';
