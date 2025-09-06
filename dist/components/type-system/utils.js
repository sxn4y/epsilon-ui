"use strict";
/**
 * Type System Utility Functions
 * Helper functions for working with the golden ratio type system
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSpacingSystem = exports.generateTypographySystem = exports.createVerticalRhythm = exports.remToPx = exports.pxToRem = exports.createModularScale = exports.generateComponentClasses = exports.createBaselineRhythm = exports.createComponentStyles = exports.createFluidTypography = exports.createResponsiveFontSize = exports.generateTypeSystemCSS = void 0;
const types_1 = require("./types");
/**
 * Generate CSS custom properties for the type system
 */
const generateTypeSystemCSS = () => {
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
exports.generateTypeSystemCSS = generateTypeSystemCSS;
/**
 * Create a responsive font size based on viewport width
 */
const createResponsiveFontSize = (baseScale, breakpoints = {}) => {
    const baseSize = (0, types_1.getFontSize)(baseScale);
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
exports.createResponsiveFontSize = createResponsiveFontSize;
/**
 * Create a fluid typography scale that scales with viewport
 */
const createFluidTypography = (minScale, maxScale, minViewport = 320, maxViewport = 1200) => {
    const minSize = (0, types_1.getFontSize)(minScale);
    const maxSize = (0, types_1.getFontSize)(maxScale);
    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    const intersection = minSize - slope * minViewport;
    return `
    font-size: clamp(${minSize}px, ${intersection}px + ${slope * 100}vw, ${maxSize}px);
  `;
};
exports.createFluidTypography = createFluidTypography;
/**
 * Generate component styles based on size
 */
const createComponentStyles = (size, additionalStyles = {}) => {
    const componentSize = (0, types_1.getComponentSize)(size);
    return {
        padding: `${componentSize.padding}px`,
        fontSize: `${componentSize.fontSize}rem`,
        borderRadius: `${componentSize.borderRadius}px`,
        lineHeight: componentSize.lineHeight.toString(),
        ...additionalStyles,
    };
};
exports.createComponentStyles = createComponentStyles;
/**
 * Create a consistent spacing rhythm based on baseline grid
 */
const createBaselineRhythm = (fontSize, lineHeight = types_1.BASE_LINE_HEIGHT) => {
    const baseline = fontSize * lineHeight;
    return {
        lineHeight,
        marginTop: baseline * 0.5,
        marginBottom: baseline * 0.5,
    };
};
exports.createBaselineRhythm = createBaselineRhythm;
/**
 * Generate CSS classes for a component with type system integration
 */
const generateComponentClasses = (componentName, sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl']) => {
    const classes = sizes.map(size => {
        const componentSize = (0, types_1.getComponentSize)(size);
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
exports.generateComponentClasses = generateComponentClasses;
/**
 * Create a modular scale for consistent spacing
 */
const createModularScale = (base, ratio = 1.618, steps = 10) => {
    const scale = [];
    for (let i = 0; i < steps; i++) {
        scale.push(base * Math.pow(ratio, i - Math.floor(steps / 2)));
    }
    return scale;
};
exports.createModularScale = createModularScale;
/**
 * Convert pixel values to rem based on base font size
 */
const pxToRem = (px, baseFontSize = types_1.BASE_FONT_SIZE) => {
    return px / baseFontSize;
};
exports.pxToRem = pxToRem;
/**
 * Convert rem values to pixels based on base font size
 */
const remToPx = (rem, baseFontSize = types_1.BASE_FONT_SIZE) => {
    return rem * baseFontSize;
};
exports.remToPx = remToPx;
/**
 * Create a consistent vertical rhythm for text elements
 */
const createVerticalRhythm = (fontSize, lineHeight = types_1.BASE_LINE_HEIGHT) => {
    const baseline = fontSize * lineHeight;
    return {
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight.toString(),
        marginTop: `${baseline * 0.5}px`,
        marginBottom: `${baseline * 0.5}px`,
    };
};
exports.createVerticalRhythm = createVerticalRhythm;
/**
 * Generate a complete typography system CSS
 */
const generateTypographySystem = () => {
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
exports.generateTypographySystem = generateTypographySystem;
/**
 * Create a spacing system CSS
 */
const generateSpacingSystem = () => {
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
exports.generateSpacingSystem = generateSpacingSystem;
