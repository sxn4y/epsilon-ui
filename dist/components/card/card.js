"use strict";
"use client";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
require("epsilon-ui/dist/epsilon.css");
const epsilon_1 = require("../epsilon");
const Card = ({ children, className = "w-fit h-[100px]", parallax = false, tiltFactor = 20, variant = "secondary", }) => {
    const cardRef = react_1.default.useRef(null);
    // Memoize touch device detection
    const isTouchDevice = (0, react_1.useMemo)(() => {
        if (typeof window !== "undefined") {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0;
        }
        return false;
    }, []);
    // Memoize effective tilt factor
    const effectiveTiltFactor = (0, react_1.useMemo)(() => {
        return isTouchDevice ? 0 : tiltFactor;
    }, [isTouchDevice, tiltFactor]);
    // Memoize variant classes to prevent recalculation
    const inBuiltClass = (0, react_1.useMemo)(() => {
        const baseClasses = "rounded-base text-body outline-0 delay-25 transition-[outline] transition-[background]";
        switch (variant) {
            case "secondary":
                return `${baseClasses} text-(--foreground) bg-(--foreground)/10 outline-(--foreground)/5 hover:bg-(--foreground)/9 focus:outline-3`;
            case "outline":
                return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 outline-(--foreground)/7 hover:bg-(--foreground)/9 focus:outline-3`;
            case "positive":
                return `${baseClasses} text-(--foreground) bg-blue-500 dark:bg-blue-800 outline-blue-500/50 dark:outline-blue-800/50 hover:bg-blue-500/90 dark:hover:bg-blue-800/90 focus:outline-3`;
            case "danger":
                return `${baseClasses} text-(--foreground) bg-red-500 dark:bg-red-800 outline-red-500/50 dark:outline-red-800/50 hover:bg-red-500/90 dark:hover:bg-red-800/90 focus:outline-3`;
            case "link":
                return `${baseClasses} text-(--foreground) transition-[text-decoration] underline-offset-4 hover:underline hover:shadow-lg/20`;
            case "fancy":
                return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 outline-(--foreground)/7 hover:bg-(--foreground)/2 focus:outline-3`;
            default:
                return `${baseClasses} text-(--background) bg-(--foreground) outline-(--foreground)/50 hover:bg-(--foreground)/90 focus:outline-3`;
        }
    }, [variant]);
    (0, react_1.useEffect)(() => {
        (0, epsilon_1.applyParallax)(cardRef, parallax, effectiveTiltFactor);
    }, [parallax, effectiveTiltFactor]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${parallax ? "glow-effect" : "no-glow-effect"} ${inBuiltClass} p-lg h-fit overflow-hidden ${className}`, ref: cardRef, children: [children, (0, jsx_runtime_1.jsx)("div", { className: "glow-container" })] }));
};
// Memoize the component to prevent unnecessary re-renders
exports.default = react_1.default.memo(Card);
