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
const gsap_1 = require("gsap");
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
const SReveal = ({ children, duration = 0.8, delay = 0, once = false, className = "", opacity = "0.2", scale = 1, angle = 0, threshold = 0.1, distance = 100, reverse = false, ease = "power3.out", direction = "ver", inline = false, }) => {
    const ref = (0, react_1.useRef)(null);
    // Memoize calculated values
    const animationConfig = (0, react_1.useMemo)(() => {
        const axis = direction === "hor" ? "x" : "y";
        const offset = reverse ? -distance : distance;
        const rotation = reverse ? -angle : angle;
        const percent = (1 - threshold) * 100;
        return { axis, offset, rotation, percent };
    }, [direction, reverse, distance, angle, threshold]);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        const { axis, offset, rotation, percent } = animationConfig;
        let tl = once
            ? gsap_1.gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: `top ${percent}%`,
                    end: `bottom +=50px`,
                },
            })
            : gsap_1.gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: `top ${percent}%`,
                    end: `bottom +=50px`,
                    onEnter: () => {
                        tl.restart();
                    },
                    onLeave: () => {
                        tl.pause(0);
                    },
                    onEnterBack: () => {
                        tl.restart();
                    },
                    onLeaveBack: () => {
                        tl.pause(0);
                    },
                },
            });
        tl.set(el, {
            [axis]: offset,
            scale,
            opacity: opacity,
            rotate: rotation,
        });
        tl.to(el, {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration,
            ease,
            delay,
        });
        // Cleanup function
        return () => {
            tl.kill();
        };
    }, [once, duration, delay, opacity, scale, angle, threshold, distance, reverse, ease, direction, animationConfig]);
    return (0, jsx_runtime_1.jsx)("div", { ref: ref, className: `${className} ${inline ? "inline" : "block"}`, children: children });
};
// Memoize the component to prevent unnecessary re-renders
exports.default = react_1.default.memo(SReveal);
