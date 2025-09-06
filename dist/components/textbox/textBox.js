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
const TextBox = ({ className = "", parallax = false, tiltFactor = 20, placeholder = "Type here...", value = "", id, name, autoComplete = "off", autoFocus = false, disabled = false, readOnly = false, required = false, onChange, onFocus, type = "default", variant = "primary", }) => {
    const textBoxRef = react_1.default.useRef(null);
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
    // Memoize variant classes
    const inBuiltClass = (0, react_1.useMemo)(() => {
        const baseClasses = "px-3 py-1.5 rounded-(--s2) text-(length:--s3) font-medium overflow-hidden outline-0 delay-25 transition-[outline] transition-[background]";
        switch (variant) {
            case "secondary":
                return `${baseClasses} text-(--foreground) bg-(--foreground)/10 outline-(--foreground)/5 hover:bg-(--foreground)/9 focus:outline-3`;
            case "outline":
                return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 outline-(--foreground)/7 hover:bg-(--foreground)/9 focus:outline-3`;
            case "fancy":
                return `${baseClasses} text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 outline-(--foreground)/7 hover:bg-(--foreground)/2 focus:outline-3`;
            default:
                return `${baseClasses} text-(--background) bg-(--foreground) outline-(--foreground)/50 hover:bg-(--foreground)/90 focus:outline-3`;
        }
    }, [variant]);
    // Memoize event handlers
    const handleChange = (0, react_1.useCallback)((e) => {
        onChange?.(e);
    }, [onChange]);
    const handleFocus = (0, react_1.useCallback)((e) => {
        onFocus?.(e);
    }, [onFocus]);
    (0, react_1.useEffect)(() => {
        const textBox = textBoxRef.current;
        if (!textBox)
            return;
        let handleMouseMove = (e) => { };
        let handleMouseLeave = () => { };
        if (parallax) {
            handleMouseMove = (e) => {
                const rect = textBox.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = (y - centerY) / (textBox.clientHeight / effectiveTiltFactor);
                const tiltY = (centerX - x) / (textBox.clientWidth / effectiveTiltFactor);
                textBox.style.setProperty("--x", `${x}%`);
                textBox.style.setProperty("--y", `${y}%`);
                textBox.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            };
            handleMouseLeave = () => {
                textBox.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            };
            textBox.addEventListener("mousemove", handleMouseMove);
            textBox.addEventListener("mouseleave", handleMouseLeave);
        }
        textBox.value = value;
        return () => {
            textBox.removeEventListener("mousemove", handleMouseMove);
            textBox.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [parallax, effectiveTiltFactor, value]);
    return ((0, jsx_runtime_1.jsx)("input", { type: "text", className: `${inBuiltClass} ${className}`, id: id, name: name, placeholder: placeholder, autoComplete: autoComplete, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onChange: handleChange, onFocus: handleFocus, ref: textBoxRef }));
};
// Memoize the component to prevent unnecessary re-renders
exports.default = react_1.default.memo(TextBox);
