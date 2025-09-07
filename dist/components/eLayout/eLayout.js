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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EContentbar = exports.ESidebar = exports.ELayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = __importDefault(require("gsap/ScrollTrigger"));
require("epsilon-ui/dist/epsilon.css");
gsap_1.default.registerPlugin(ScrollTrigger_1.default);
const ELayout = ({ children, className = "", reveal = false, duration = 0.8, delay = 0, once = true, opacity = 0, scale = 1, angle = 0, threshold = 0.1, distance = 100, reverse = false, ease = "power3.out", direction = "ver", stagger = 0, staggerFrom = "start", }) => {
    // Memoize calculated values
    const animationConfig = (0, react_1.useMemo)(() => {
        const axis = direction === "hor" ? "x" : "y";
        const offset = reverse ? -distance : distance;
        const rotation = reverse ? -angle : angle;
        const percent = (1 - threshold) * 100;
        return { axis, offset, rotation, percent };
    }, [direction, reverse, distance, angle, threshold]);
    (0, react_1.useEffect)(() => {
        if (reveal) {
            const el = document.querySelectorAll(".epsilon-layout .epsilon-sublayout");
            if (!el.length)
                return;
            const { axis, offset, rotation, percent } = animationConfig;
            let tl = once
                ? gsap_1.default.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${percent}%`,
                        end: `bottom +=50px`,
                    },
                })
                : gsap_1.default.timeline({
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
                stagger: {
                    amount: stagger,
                    from: staggerFrom,
                },
            });
            // Cleanup function
            return () => {
                tl.kill();
            };
        }
    }, [reveal, once, duration, delay, opacity, scale, angle, threshold, distance, reverse, ease, direction, stagger, staggerFrom, animationConfig]);
    return ((0, jsx_runtime_1.jsx)("div", { className: `w-full h-full overflow-hidden epsilon-layout flex flex-col md:flex-row ${className}`, children: children }));
};
const ESidebar = react_1.default.memo(({ children, className = "", side = "left", }) => {
    // Memoize className calculation
    const sidebarClassName = (0, react_1.useMemo)(() => {
        const baseClasses = "w-full md:w-100 border-(--foreground)/30 bg-(--foreground)/4 p-lg epsilon-sublayout text-body";
        const sideClasses = side === "left"
            ? "border-b md:border-e"
            : "border-t md:border-s md:ml-auto";
        return `${sideClasses} ${baseClasses} ${className}`;
    }, [side, className]);
    return ((0, jsx_runtime_1.jsx)("div", { className: sidebarClassName, children: children }));
});
exports.ESidebar = ESidebar;
const EContentbar = react_1.default.memo(({ children, className }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: `w-full overflow-x-hidden overflow-y-scroll p-lg epsilon-sublayout text-body ${className}`, children: children }));
});
exports.EContentbar = EContentbar;
// Memoize the main ELayout component
const MemoizedELayout = react_1.default.memo(ELayout);
exports.ELayout = MemoizedELayout;
