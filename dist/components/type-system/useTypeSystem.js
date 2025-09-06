"use strict";
/**
 * React Hook for Type System
 * Provides easy access to type system values and utilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBaselineRhythm = exports.useComponentSize = exports.useFluidTypography = exports.useResponsiveTypography = exports.useTypeSystem = void 0;
const react_1 = require("react");
const types_1 = require("./types");
const useTypeSystem = () => {
    return (0, react_1.useMemo)(() => ({
        // Scale getters
        getFontSize: types_1.getFontSize,
        getSpacing: types_1.getSpacing,
        getRadius: types_1.getRadius,
        getComponentSize: types_1.getComponentSize,
        getTypography: types_1.getTypography,
        // Utility functions
        pxToRem: (px) => px / types_1.BASE_FONT_SIZE,
        remToPx: (rem) => rem * types_1.BASE_FONT_SIZE,
        createResponsiveFontSize: (baseScale, breakpoints = {}) => {
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
        },
        createFluidTypography: (minScale, maxScale) => {
            const minSize = (0, types_1.getFontSize)(minScale);
            const maxSize = (0, types_1.getFontSize)(maxScale);
            const minViewport = 320;
            const maxViewport = 1200;
            const slope = (maxSize - minSize) / (maxViewport - minViewport);
            const intersection = minSize - slope * minViewport;
            return `
        font-size: clamp(${minSize}px, ${intersection}px + ${slope * 100}vw, ${maxSize}px);
      `;
        },
        createComponentStyles: (size, additionalStyles = {}) => {
            const componentSize = (0, types_1.getComponentSize)(size);
            return {
                padding: `${componentSize.padding}px`,
                fontSize: `${componentSize.fontSize}rem`,
                borderRadius: `${componentSize.borderRadius}px`,
                lineHeight: componentSize.lineHeight.toString(),
                ...additionalStyles,
            };
        },
        createBaselineRhythm: (fontSize, lineHeight = types_1.BASE_LINE_HEIGHT) => {
            const baseline = fontSize * lineHeight;
            return {
                lineHeight,
                marginTop: baseline * 0.5,
                marginBottom: baseline * 0.5,
            };
        },
        // Constants
        BASE_FONT_SIZE: types_1.BASE_FONT_SIZE,
        BASE_LINE_HEIGHT: types_1.BASE_LINE_HEIGHT,
    }), []);
};
exports.useTypeSystem = useTypeSystem;
/**
 * Hook for creating responsive typography
 */
const useResponsiveTypography = (baseScale, breakpoints = {}) => {
    const typeSystem = (0, exports.useTypeSystem)();
    return (0, react_1.useMemo)(() => {
        return typeSystem.createResponsiveFontSize(baseScale, breakpoints);
    }, [baseScale, breakpoints, typeSystem]);
};
exports.useResponsiveTypography = useResponsiveTypography;
/**
 * Hook for creating fluid typography
 */
const useFluidTypography = (minScale, maxScale, minViewport = 320, maxViewport = 1200) => {
    const typeSystem = (0, exports.useTypeSystem)();
    return (0, react_1.useMemo)(() => {
        return typeSystem.createFluidTypography(minScale, maxScale);
    }, [minScale, maxScale, typeSystem]);
};
exports.useFluidTypography = useFluidTypography;
/**
 * Hook for component sizing
 */
const useComponentSize = (size, additionalStyles = {}) => {
    const typeSystem = (0, exports.useTypeSystem)();
    return (0, react_1.useMemo)(() => {
        return typeSystem.createComponentStyles(size, additionalStyles);
    }, [size, additionalStyles, typeSystem]);
};
exports.useComponentSize = useComponentSize;
/**
 * Hook for baseline rhythm
 */
const useBaselineRhythm = (fontSize, lineHeight = types_1.BASE_LINE_HEIGHT) => {
    const typeSystem = (0, exports.useTypeSystem)();
    return (0, react_1.useMemo)(() => {
        return typeSystem.createBaselineRhythm(fontSize, lineHeight);
    }, [fontSize, lineHeight, typeSystem]);
};
exports.useBaselineRhythm = useBaselineRhythm;
