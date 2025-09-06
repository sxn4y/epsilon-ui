"use strict";
/**
 * Epsilon UI Type System
 * Golden Ratio-based scaling system for consistent design
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBaselineRhythm = exports.useComponentSize = exports.useFluidTypography = exports.useResponsiveTypography = exports.useTypeSystem = exports.generateSpacingSystem = exports.generateTypographySystem = exports.createVerticalRhythm = exports.remToPx = exports.pxToRem = exports.createModularScale = exports.generateComponentClasses = exports.createBaselineRhythm = exports.createComponentStyles = exports.createFluidTypography = exports.createResponsiveFontSize = exports.generateTypeSystemCSS = exports.TYPOGRAPHY = exports.COMPONENT_SCALE = exports.RADIUS_SCALE = exports.SPACING_SCALE = exports.TYPE_SCALE = exports.BASE_SPACING = exports.BASE_LINE_HEIGHT = exports.BASE_FONT_SIZE = exports.GOLDEN_RATIO = void 0;
// Export all types and constants
__exportStar(require("./types"), exports);
// Export utility functions
__exportStar(require("./utils"), exports);
// Export React hooks
__exportStar(require("./useTypeSystem"), exports);
// Re-export commonly used items for convenience
var types_1 = require("./types");
Object.defineProperty(exports, "GOLDEN_RATIO", { enumerable: true, get: function () { return types_1.GOLDEN_RATIO; } });
Object.defineProperty(exports, "BASE_FONT_SIZE", { enumerable: true, get: function () { return types_1.BASE_FONT_SIZE; } });
Object.defineProperty(exports, "BASE_LINE_HEIGHT", { enumerable: true, get: function () { return types_1.BASE_LINE_HEIGHT; } });
Object.defineProperty(exports, "BASE_SPACING", { enumerable: true, get: function () { return types_1.BASE_SPACING; } });
Object.defineProperty(exports, "TYPE_SCALE", { enumerable: true, get: function () { return types_1.TYPE_SCALE; } });
Object.defineProperty(exports, "SPACING_SCALE", { enumerable: true, get: function () { return types_1.SPACING_SCALE; } });
Object.defineProperty(exports, "RADIUS_SCALE", { enumerable: true, get: function () { return types_1.RADIUS_SCALE; } });
Object.defineProperty(exports, "COMPONENT_SCALE", { enumerable: true, get: function () { return types_1.COMPONENT_SCALE; } });
Object.defineProperty(exports, "TYPOGRAPHY", { enumerable: true, get: function () { return types_1.TYPOGRAPHY; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "generateTypeSystemCSS", { enumerable: true, get: function () { return utils_1.generateTypeSystemCSS; } });
Object.defineProperty(exports, "createResponsiveFontSize", { enumerable: true, get: function () { return utils_1.createResponsiveFontSize; } });
Object.defineProperty(exports, "createFluidTypography", { enumerable: true, get: function () { return utils_1.createFluidTypography; } });
Object.defineProperty(exports, "createComponentStyles", { enumerable: true, get: function () { return utils_1.createComponentStyles; } });
Object.defineProperty(exports, "createBaselineRhythm", { enumerable: true, get: function () { return utils_1.createBaselineRhythm; } });
Object.defineProperty(exports, "generateComponentClasses", { enumerable: true, get: function () { return utils_1.generateComponentClasses; } });
Object.defineProperty(exports, "createModularScale", { enumerable: true, get: function () { return utils_1.createModularScale; } });
Object.defineProperty(exports, "pxToRem", { enumerable: true, get: function () { return utils_1.pxToRem; } });
Object.defineProperty(exports, "remToPx", { enumerable: true, get: function () { return utils_1.remToPx; } });
Object.defineProperty(exports, "createVerticalRhythm", { enumerable: true, get: function () { return utils_1.createVerticalRhythm; } });
Object.defineProperty(exports, "generateTypographySystem", { enumerable: true, get: function () { return utils_1.generateTypographySystem; } });
Object.defineProperty(exports, "generateSpacingSystem", { enumerable: true, get: function () { return utils_1.generateSpacingSystem; } });
var useTypeSystem_1 = require("./useTypeSystem");
Object.defineProperty(exports, "useTypeSystem", { enumerable: true, get: function () { return useTypeSystem_1.useTypeSystem; } });
Object.defineProperty(exports, "useResponsiveTypography", { enumerable: true, get: function () { return useTypeSystem_1.useResponsiveTypography; } });
Object.defineProperty(exports, "useFluidTypography", { enumerable: true, get: function () { return useTypeSystem_1.useFluidTypography; } });
Object.defineProperty(exports, "useComponentSize", { enumerable: true, get: function () { return useTypeSystem_1.useComponentSize; } });
Object.defineProperty(exports, "useBaselineRhythm", { enumerable: true, get: function () { return useTypeSystem_1.useBaselineRhythm; } });
