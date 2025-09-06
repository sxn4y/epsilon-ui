"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSystemDemo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Type System Demo Component
 * Demonstrates the golden ratio type system in action
 */
const react_1 = __importStar(require("react"));
const useTypeSystem_1 = require("./useTypeSystem");
exports.TypeSystemDemo = react_1.default.memo(() => {
    const typeSystem = (0, useTypeSystem_1.useTypeSystem)();
    const buttonStyles = (0, useTypeSystem_1.useComponentSize)('lg');
    const responsiveStyles = (0, useTypeSystem_1.useResponsiveTypography)('xl');
    // Memoize dynamic font size calculation
    const dynamicFontSize = (0, react_1.useMemo)(() => {
        return typeSystem.getFontSize('xl');
    }, [typeSystem]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-lg max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-display mb-lg", children: "Type System Demo" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body-large mb-xl", children: "This demonstrates the golden ratio-based type system with consistent scaling and baseline grid." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-lg", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-h1", children: "Heading 1 - Main Page Title" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-h2", children: "Heading 2 - Section Title" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-h3", children: "Heading 3 - Subsection Title" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-h4", children: "Heading 4 - Component Title" }), (0, jsx_runtime_1.jsx)("h5", { className: "text-h5", children: "Heading 5 - Small Title" }), (0, jsx_runtime_1.jsx)("h6", { className: "text-h6", children: "Heading 6 - Tiny Title" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body", children: "This is regular body text with optimal line height and spacing. The golden ratio ensures harmonious proportions throughout the design." }), (0, jsx_runtime_1.jsx)("p", { className: "text-body-large", children: "This is large body text for emphasis or introductory content." }), (0, jsx_runtime_1.jsx)("p", { className: "text-body-small", children: "This is small body text for secondary information." }), (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Caption text for fine print and metadata" })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Component Sizes" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body mb-xl", children: "Pre-configured component sizes with harmonized padding, font size, and border radius." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-base", children: [(0, jsx_runtime_1.jsx)("button", { className: "size-xs text-button-small", children: "Extra Small Button" }), (0, jsx_runtime_1.jsx)("button", { className: "size-sm text-button-small", children: "Small Button" }), (0, jsx_runtime_1.jsx)("button", { className: "size-base text-button", children: "Base Button" }), (0, jsx_runtime_1.jsx)("button", { className: "size-lg text-button", children: "Large Button" }), (0, jsx_runtime_1.jsx)("button", { className: "size-xl text-button-large", children: "Extra Large Button" }), (0, jsx_runtime_1.jsx)("button", { className: "size-2xl text-button-large", children: "Huge Button" })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Spacing Scale" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body mb-xl", children: "Consistent spacing using the golden ratio scale." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-base", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-xs bg-gray-100 rounded-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Extra Small Padding (3.1px)" }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-sm bg-gray-100 rounded-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Small Padding (4.9px)" }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-base bg-gray-100 rounded-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Base Padding (8px)" }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-lg bg-gray-100 rounded-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Large Padding (12.9px)" }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-xl bg-gray-100 rounded-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-caption", children: "Extra Large Padding (20.9px)" }) })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Border Radius Scale" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body mb-xl", children: "Harmonized border radius values." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap gap-base", children: [(0, jsx_runtime_1.jsx)("div", { className: "rounded-sm p-base bg-blue-100 text-caption", children: "Small (1px)" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-base p-base bg-blue-100 text-caption", children: "Base (2px)" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-lg p-base bg-blue-100 text-caption", children: "Large (6px)" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-xl p-base bg-blue-100 text-caption", children: "XL (8px)" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-2xl p-base bg-blue-100 text-caption", children: "2XL (12.9px)" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-3xl p-base bg-blue-100 text-caption", children: "3XL (20.9px)" })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Mathematical Foundation" }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-50 p-lg rounded-lg", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-h4 mb-base", children: "Golden Ratio (\u03C6 \u2248 1.618)" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body mb-base", children: "All scales are based on the golden ratio, creating natural, pleasing proportions:" }), (0, jsx_runtime_1.jsxs)("ul", { className: "text-body-small space-y-sm", children: [(0, jsx_runtime_1.jsx)("li", { children: "\u2022 Type scale: base \u00D7 \u03C6^n" }), (0, jsx_runtime_1.jsx)("li", { children: "\u2022 Spacing scale: base \u00D7 \u03C6^n" }), (0, jsx_runtime_1.jsx)("li", { children: "\u2022 Component scale: Harmonized combinations" }), (0, jsx_runtime_1.jsx)("li", { children: "\u2022 Baseline grid: Consistent vertical rhythm" })] })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Usage Examples" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-lg", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-lg border rounded-lg", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-h4 mb-base", children: "CSS Classes" }), (0, jsx_runtime_1.jsx)("pre", { className: "text-caption bg-gray-100 p-sm rounded-sm overflow-x-auto", children: `<h1 class="text-h1">Heading</h1>
<p class="text-body">Body text</p>
<button class="size-lg">Button</button>` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-lg border rounded-lg", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-h4 mb-base", children: "CSS Variables" }), (0, jsx_runtime_1.jsx)("pre", { className: "text-caption bg-gray-100 p-sm rounded-sm overflow-x-auto", children: `.component {
  font-size: var(--type-lg);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
}` })] })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-h2 mb-lg", children: "Interactive Demo" }), (0, jsx_runtime_1.jsxs)("div", { className: "p-lg bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-h3 mb-base", children: "Responsive Typography" }), (0, jsx_runtime_1.jsx)("p", { className: "text-body mb-lg", children: "This heading uses responsive typography that scales with viewport size." }), (0, jsx_runtime_1.jsxs)("div", { className: "text-h2 mb-base", style: {
                                    fontSize: dynamicFontSize,
                                    lineHeight: 1.2,
                                    fontWeight: 600
                                }, children: ["Dynamic Font Size: ", dynamicFontSize, "px"] }), (0, jsx_runtime_1.jsx)("button", { style: buttonStyles, className: "bg-blue-500 text-white hover:bg-blue-600 transition-colors", children: "Styled with useComponentSize Hook" })] })] })] }));
});
exports.default = exports.TypeSystemDemo;
