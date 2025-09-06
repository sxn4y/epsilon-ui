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
exports.NavItem = exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
require("epsilon-ui/dist/epsilon.css");
const button_1 = __importDefault(require("../button/button"));
const NavBar = ({ children, className = "", brand, variant = "primary", }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isMobile, setIsMobile] = (0, react_1.useState)(false);
    // Memoize mobile check function
    const checkMobile = (0, react_1.useCallback)(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    (0, react_1.useEffect)(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [checkMobile]);
    // Memoize variant classes
    const inBuiltClass = (0, react_1.useMemo)(() => {
        switch (variant) {
            case "secondary":
                return "bg-(--foreground)/10 text-(--foreground)";
            case "outline":
                return "bg-(--foreground)/10 text-(--foreground) border-b border-(--foreground)/20";
            case "fancy":
                return "bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 text-(--foreground) border-b border-(--foreground)/20";
            default:
                return "bg-(--foreground) text-(--background)";
        }
    }, [variant]);
    // Memoize toggle handler
    const handleToggle = (0, react_1.useCallback)(() => {
        setIsOpen(prev => !prev);
    }, []);
    return ((0, jsx_runtime_1.jsx)("nav", { className: `w-full ${inBuiltClass} ${className}`, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between h-16", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0", children: brand }), (0, jsx_runtime_1.jsx)("div", { className: `hidden md:flex items-center space-x-4`, children: children }), (0, jsx_runtime_1.jsx)("div", { className: "md:hidden", children: (0, jsx_runtime_1.jsx)(button_1.default, { onClick: handleToggle, className: "inline-flex items-center justify-center", variant: "outline", parallax: true, tiltFactor: 0, children: (0, jsx_runtime_1.jsx)("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: isOpen ? ((0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : ((0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: `${isOpen ? 'block' : 'hidden'} md:hidden pb-4`, children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col space-y-2", children: children }) })] }) }));
};
const NavItem = react_1.default.memo(({ children, className, href = "#", disabled = false, variant = "link", }) => {
    return ((0, jsx_runtime_1.jsx)("a", { href: href, children: (0, jsx_runtime_1.jsx)(button_1.default, { variant: variant, disabled: disabled, className: className, children: children }) }));
});
exports.NavItem = NavItem;
// Memoize the main NavBar component
const MemoizedNavBar = react_1.default.memo(NavBar);
exports.NavBar = MemoizedNavBar;
