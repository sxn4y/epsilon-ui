"use strict";
/**
 * Epsilon UI Type System
 * Based on the Golden Ratio (φ ≈ 1.618) and text baseline grid
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponsiveScale = exports.getBaselineGrid = exports.generateCSSVariables = exports.getTypography = exports.getComponentSize = exports.getRadius = exports.getSpacing = exports.getFontSize = exports.TYPOGRAPHY = exports.COMPONENT_SCALE = exports.RADIUS_SCALE = exports.SPACING_SCALE = exports.TYPE_SCALE = exports.BASE_SPACING = exports.BASE_LINE_HEIGHT = exports.BASE_FONT_SIZE = exports.GOLDEN_RATIO = void 0;
// Golden ratio constant
exports.GOLDEN_RATIO = 1.618;
// Base font size (16px = 1rem)
exports.BASE_FONT_SIZE = 16;
// Base line height for optimal readability
exports.BASE_LINE_HEIGHT = 1.5;
// Base spacing unit (8px = 0.5rem)
exports.BASE_SPACING = 8;
// Type scale based on golden ratio
exports.TYPE_SCALE = {
    xs: Math.pow(exports.GOLDEN_RATIO, -2), // ~0.382 (6.1px)
    sm: Math.pow(exports.GOLDEN_RATIO, -1), // ~0.618 (9.9px)
    base: 1, // 1.000 (16px)
    lg: exports.GOLDEN_RATIO, // ~1.618 (25.9px)
    xl: Math.pow(exports.GOLDEN_RATIO, 2), // ~2.618 (41.9px)
    '2xl': Math.pow(exports.GOLDEN_RATIO, 3), // ~4.236 (67.8px)
    '3xl': Math.pow(exports.GOLDEN_RATIO, 4), // ~6.854 (109.7px)
    '4xl': Math.pow(exports.GOLDEN_RATIO, 5), // ~11.090 (177.4px)
};
// Spacing scale based on golden ratio
exports.SPACING_SCALE = {
    0: 0,
    1: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, -2), // ~3.1px
    2: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, -1), // ~4.9px
    3: exports.BASE_SPACING, // 8px
    4: exports.BASE_SPACING * exports.GOLDEN_RATIO, // ~12.9px
    5: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 2), // ~20.9px
    6: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 3), // ~33.8px
    7: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 4), // ~54.8px
    8: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 5), // ~88.7px
    9: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 6), // ~143.5px
    10: exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 7), // ~232.2px
};
// Border radius scale
exports.RADIUS_SCALE = {
    none: 0,
    sm: exports.BASE_SPACING * 0.125, // 1px
    base: exports.BASE_SPACING * 0.25, // 2px
    md: exports.BASE_SPACING * 0.5, // 4px
    lg: exports.BASE_SPACING * 0.75, // 6px
    xl: exports.BASE_SPACING, // 8px
    '2xl': exports.BASE_SPACING * exports.GOLDEN_RATIO, // ~12.9px
    '3xl': exports.BASE_SPACING * Math.pow(exports.GOLDEN_RATIO, 2), // ~20.9px
    full: 9999,
};
// Component size scale
exports.COMPONENT_SCALE = {
    xs: {
        padding: exports.SPACING_SCALE[1],
        fontSize: exports.TYPE_SCALE.xs,
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE.sm,
    },
    sm: {
        padding: exports.SPACING_SCALE[2],
        fontSize: exports.TYPE_SCALE.sm,
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE.base,
    },
    base: {
        padding: exports.SPACING_SCALE[3],
        fontSize: exports.TYPE_SCALE.base,
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE.md,
    },
    lg: {
        padding: exports.SPACING_SCALE[4],
        fontSize: exports.TYPE_SCALE.lg,
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE.lg,
    },
    xl: {
        padding: exports.SPACING_SCALE[5],
        fontSize: exports.TYPE_SCALE.xl,
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE.xl,
    },
    '2xl': {
        padding: exports.SPACING_SCALE[6],
        fontSize: exports.TYPE_SCALE['2xl'],
        lineHeight: exports.BASE_LINE_HEIGHT,
        borderRadius: exports.RADIUS_SCALE['2xl'],
    },
};
// Typography scale with semantic names
exports.TYPOGRAPHY = {
    display: {
        fontSize: exports.TYPE_SCALE['4xl'],
        lineHeight: 1.1,
        fontWeight: 700,
        letterSpacing: -0.02,
    },
    h1: {
        fontSize: exports.TYPE_SCALE['3xl'],
        lineHeight: 1.2,
        fontWeight: 700,
        letterSpacing: -0.01,
    },
    h2: {
        fontSize: exports.TYPE_SCALE['2xl'],
        lineHeight: 1.25,
        fontWeight: 600,
        letterSpacing: -0.01,
    },
    h3: {
        fontSize: exports.TYPE_SCALE.xl,
        lineHeight: 1.3,
        fontWeight: 600,
        letterSpacing: 0,
    },
    h4: {
        fontSize: exports.TYPE_SCALE.lg,
        lineHeight: 1.35,
        fontWeight: 600,
        letterSpacing: 0,
    },
    h5: {
        fontSize: exports.TYPE_SCALE.base,
        lineHeight: 1.4,
        fontWeight: 600,
        letterSpacing: 0,
    },
    h6: {
        fontSize: exports.TYPE_SCALE.sm,
        lineHeight: 1.45,
        fontWeight: 600,
        letterSpacing: 0,
    },
    body: {
        fontSize: exports.TYPE_SCALE.base,
        lineHeight: exports.BASE_LINE_HEIGHT,
        fontWeight: 400,
        letterSpacing: 0,
    },
    bodyLarge: {
        fontSize: exports.TYPE_SCALE.lg,
        lineHeight: exports.BASE_LINE_HEIGHT,
        fontWeight: 400,
        letterSpacing: 0,
    },
    bodySmall: {
        fontSize: exports.TYPE_SCALE.sm,
        lineHeight: exports.BASE_LINE_HEIGHT,
        fontWeight: 400,
        letterSpacing: 0,
    },
    caption: {
        fontSize: exports.TYPE_SCALE.xs,
        lineHeight: exports.BASE_LINE_HEIGHT,
        fontWeight: 400,
        letterSpacing: 0.01,
    },
    button: {
        fontSize: exports.TYPE_SCALE.base,
        lineHeight: 1,
        fontWeight: 500,
        letterSpacing: 0.01,
    },
    buttonSmall: {
        fontSize: exports.TYPE_SCALE.sm,
        lineHeight: 1,
        fontWeight: 500,
        letterSpacing: 0.01,
    },
    buttonLarge: {
        fontSize: exports.TYPE_SCALE.lg,
        lineHeight: 1,
        fontWeight: 500,
        letterSpacing: 0.01,
    },
};
// Helper functions
const getFontSize = (scale) => {
    return exports.TYPE_SCALE[scale] * exports.BASE_FONT_SIZE;
};
exports.getFontSize = getFontSize;
const getSpacing = (scale) => {
    return exports.SPACING_SCALE[scale];
};
exports.getSpacing = getSpacing;
const getRadius = (scale) => {
    return exports.RADIUS_SCALE[scale];
};
exports.getRadius = getRadius;
const getComponentSize = (scale) => {
    return exports.COMPONENT_SCALE[scale];
};
exports.getComponentSize = getComponentSize;
const getTypography = (scale) => {
    return exports.TYPOGRAPHY[scale];
};
exports.getTypography = getTypography;
// CSS custom property generators
const generateCSSVariables = () => {
    const variables = {};
    // Type scale variables
    Object.entries(exports.TYPE_SCALE).forEach(([key, value]) => {
        variables[`--type-${key}`] = `${value}rem`;
    });
    // Spacing scale variables
    Object.entries(exports.SPACING_SCALE).forEach(([key, value]) => {
        variables[`--space-${key}`] = `${value}px`;
    });
    // Radius scale variables
    Object.entries(exports.RADIUS_SCALE).forEach(([key, value]) => {
        variables[`--radius-${key}`] = `${value}px`;
    });
    return variables;
};
exports.generateCSSVariables = generateCSSVariables;
// Baseline grid helper
const getBaselineGrid = (fontSize, lineHeight = exports.BASE_LINE_HEIGHT) => {
    return fontSize * lineHeight;
};
exports.getBaselineGrid = getBaselineGrid;
// Responsive scaling helper
const getResponsiveScale = (baseScale, breakpoint) => {
    const scaleFactors = {
        sm: 0.875, // 14px base
        md: 1, // 16px base
        lg: 1.125, // 18px base
        xl: 1.25, // 20px base
    };
    return baseScale * scaleFactors[breakpoint];
};
exports.getResponsiveScale = getResponsiveScale;
