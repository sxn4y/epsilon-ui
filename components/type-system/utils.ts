/**
 * Type System Utility Functions
 * Helper functions for working with the golden ratio type system
 */

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

/**
 * Generate CSS custom properties for the type system
 */
export const generateTypeSystemCSS = (): string => {
  const cssVariables = [
    '/* Type Scale */',
    '--type-xs: 0.382rem;',
    '--type-sm: 0.618rem;',
    '--type-base: 1rem;',
    '--type-lg: 1.618rem;',
    '--type-xl: 2.618rem;',
    '--type-2xl: 4.236rem;',
    '--type-3xl: 6.854rem;',
    '--type-4xl: 11.090rem;',
    '',
    '/* Spacing Scale */',
    '--space-0: 0px;',
    '--space-1: 3.1px;',
    '--space-2: 4.9px;',
    '--space-3: 8px;',
    '--space-4: 12.9px;',
    '--space-5: 20.9px;',
    '--space-6: 33.8px;',
    '--space-7: 54.8px;',
    '--space-8: 88.7px;',
    '--space-9: 143.5px;',
    '--space-10: 232.2px;',
    '',
    '/* Border Radius Scale */',
    '--radius-none: 0px;',
    '--radius-sm: 1px;',
    '--radius-base: 2px;',
    '--radius-md: 4px;',
    '--radius-lg: 6px;',
    '--radius-xl: 8px;',
    '--radius-2xl: 12.9px;',
    '--radius-3xl: 20.9px;',
    '--radius-full: 9999px;',
  ].join('\n');

  return `:root {\n  ${cssVariables.replace(/\n/g, '\n  ')}\n}`;
};

/**
 * Create a responsive font size based on viewport width
 */
export const createResponsiveFontSize = (
  baseScale: TypeScale,
  breakpoints: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  } = {}
): string => {
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
};

/**
 * Create a fluid typography scale that scales with viewport
 */
export const createFluidTypography = (
  minScale: TypeScale,
  maxScale: TypeScale,
  minViewport: number = 320,
  maxViewport: number = 1200
): string => {
  const minSize = getFontSize(minScale);
  const maxSize = getFontSize(maxScale);

  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const intersection = minSize - slope * minViewport;

  return `
    font-size: clamp(${minSize}px, ${intersection}px + ${slope * 100}vw, ${maxSize}px);
  `;
};

/**
 * Generate component styles based on size
 */
export const createComponentStyles = (
  size: ComponentScale,
  additionalStyles: Record<string, string> = {}
): Record<string, string> => {
  const componentSize = getComponentSize(size);
  
  return {
    padding: `${componentSize.padding}px`,
    fontSize: `${componentSize.fontSize}rem`,
    borderRadius: `${componentSize.borderRadius}px`,
    lineHeight: componentSize.lineHeight.toString(),
    ...additionalStyles,
  };
};

/**
 * Create a consistent spacing rhythm based on baseline grid
 */
export const createBaselineRhythm = (
  fontSize: number,
  lineHeight: number = BASE_LINE_HEIGHT
): {
  lineHeight: number;
  marginTop: number;
  marginBottom: number;
} => {
  const baseline = fontSize * lineHeight;
  
  return {
    lineHeight,
    marginTop: baseline * 0.5,
    marginBottom: baseline * 0.5,
  };
};

/**
 * Generate CSS classes for a component with type system integration
 */
export const generateComponentClasses = (
  componentName: string,
  sizes: ComponentScale[] = ['xs', 'sm', 'base', 'lg', 'xl', '2xl']
): string => {
  const classes = sizes.map(size => {
    const componentSize = getComponentSize(size);
    return `
.${componentName}-${size} {
  padding: ${componentSize.padding}px;
  font-size: ${componentSize.fontSize}rem;
  border-radius: ${componentSize.borderRadius}px;
  line-height: ${componentSize.lineHeight};
}`;
  }).join('\n');

  return classes;
};

/**
 * Create a modular scale for consistent spacing
 */
export const createModularScale = (
  base: number,
  ratio: number = 1.618,
  steps: number = 10
): number[] => {
  const scale: number[] = [];
  
  for (let i = 0; i < steps; i++) {
    scale.push(base * Math.pow(ratio, i - Math.floor(steps / 2)));
  }
  
  return scale;
};

/**
 * Convert pixel values to rem based on base font size
 */
export const pxToRem = (px: number, baseFontSize: number = BASE_FONT_SIZE): number => {
  return px / baseFontSize;
};

/**
 * Convert rem values to pixels based on base font size
 */
export const remToPx = (rem: number, baseFontSize: number = BASE_FONT_SIZE): number => {
  return rem * baseFontSize;
};

/**
 * Create a consistent vertical rhythm for text elements
 */
export const createVerticalRhythm = (
  fontSize: number,
  lineHeight: number = BASE_LINE_HEIGHT
): {
  fontSize: string;
  lineHeight: string;
  marginTop: string;
  marginBottom: string;
} => {
  const baseline = fontSize * lineHeight;
  
  return {
    fontSize: `${fontSize}px`,
    lineHeight: lineHeight.toString(),
    marginTop: `${baseline * 0.5}px`,
    marginBottom: `${baseline * 0.5}px`,
  };
};

/**
 * Generate a complete typography system CSS
 */
export const generateTypographySystem = (): string => {
  const typographyClasses = [
    '.text-display { font-size: var(--type-4xl); line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }',
    '.text-h1 { font-size: var(--type-3xl); line-height: 1.2; font-weight: 700; letter-spacing: -0.01em; }',
    '.text-h2 { font-size: var(--type-2xl); line-height: 1.25; font-weight: 600; letter-spacing: -0.01em; }',
    '.text-h3 { font-size: var(--type-xl); line-height: 1.3; font-weight: 600; letter-spacing: 0; }',
    '.text-h4 { font-size: var(--type-lg); line-height: 1.35; font-weight: 600; letter-spacing: 0; }',
    '.text-h5 { font-size: var(--type-base); line-height: 1.4; font-weight: 600; letter-spacing: 0; }',
    '.text-h6 { font-size: var(--type-sm); line-height: 1.45; font-weight: 600; letter-spacing: 0; }',
    '.text-body { font-size: var(--type-base); line-height: 1.5; font-weight: 400; letter-spacing: 0; }',
    '.text-body-large { font-size: var(--type-lg); line-height: 1.5; font-weight: 400; letter-spacing: 0; }',
    '.text-body-small { font-size: var(--type-sm); line-height: 1.5; font-weight: 400; letter-spacing: 0; }',
    '.text-caption { font-size: var(--type-xs); line-height: 1.5; font-weight: 400; letter-spacing: 0.01em; }',
    '.text-button { font-size: var(--type-base); line-height: 1; font-weight: 500; letter-spacing: 0.01em; }',
    '.text-button-small { font-size: var(--type-sm); line-height: 1; font-weight: 500; letter-spacing: 0.01em; }',
    '.text-button-large { font-size: var(--type-lg); line-height: 1; font-weight: 500; letter-spacing: 0.01em; }',
  ];

  return typographyClasses.join('\n');
};

/**
 * Create a spacing system CSS
 */
export const generateSpacingSystem = (): string => {
  const spacingClasses = [
    // Padding
    '.p-xs { padding: var(--space-1); }',
    '.p-sm { padding: var(--space-2); }',
    '.p-base { padding: var(--space-3); }',
    '.p-lg { padding: var(--space-4); }',
    '.p-xl { padding: var(--space-5); }',
    '.p-2xl { padding: var(--space-6); }',
    
    // Margin
    '.m-xs { margin: var(--space-1); }',
    '.m-sm { margin: var(--space-2); }',
    '.m-base { margin: var(--space-3); }',
    '.m-lg { margin: var(--space-4); }',
    '.m-xl { margin: var(--space-5); }',
    '.m-2xl { margin: var(--space-6); }',
    
    // Horizontal padding
    '.px-xs { padding-left: var(--space-1); padding-right: var(--space-1); }',
    '.px-sm { padding-left: var(--space-2); padding-right: var(--space-2); }',
    '.px-base { padding-left: var(--space-3); padding-right: var(--space-3); }',
    '.px-lg { padding-left: var(--space-4); padding-right: var(--space-4); }',
    '.px-xl { padding-left: var(--space-5); padding-right: var(--space-5); }',
    '.px-2xl { padding-left: var(--space-6); padding-right: var(--space-6); }',
    
    // Vertical padding
    '.py-xs { padding-top: var(--space-1); padding-bottom: var(--space-1); }',
    '.py-sm { padding-top: var(--space-2); padding-bottom: var(--space-2); }',
    '.py-base { padding-top: var(--space-3); padding-bottom: var(--space-3); }',
    '.py-lg { padding-top: var(--space-4); padding-bottom: var(--space-4); }',
    '.py-xl { padding-top: var(--space-5); padding-bottom: var(--space-5); }',
    '.py-2xl { padding-top: var(--space-6); padding-bottom: var(--space-6); }',
  ];

  return spacingClasses.join('\n');
};
