/**
 * Epsilon UI Type System
 * Based on the Golden Ratio (φ ≈ 1.618) and text baseline grid
 */
export declare const GOLDEN_RATIO = 1.618;
export declare const BASE_FONT_SIZE = 16;
export declare const BASE_LINE_HEIGHT = 1.5;
export declare const BASE_SPACING = 8;
export declare const TYPE_SCALE: {
    readonly xs: number;
    readonly sm: number;
    readonly base: 1;
    readonly lg: 1.618;
    readonly xl: number;
    readonly '2xl': number;
    readonly '3xl': number;
    readonly '4xl': number;
};
export declare const SPACING_SCALE: {
    readonly 0: 0;
    readonly 1: number;
    readonly 2: number;
    readonly 3: 8;
    readonly 4: number;
    readonly 5: number;
    readonly 6: number;
    readonly 7: number;
    readonly 8: number;
    readonly 9: number;
    readonly 10: number;
};
export declare const RADIUS_SCALE: {
    readonly none: 0;
    readonly sm: number;
    readonly base: number;
    readonly md: number;
    readonly lg: number;
    readonly xl: 8;
    readonly '2xl': number;
    readonly '3xl': number;
    readonly full: 9999;
};
export declare const COMPONENT_SCALE: {
    readonly xs: {
        readonly padding: number;
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly borderRadius: number;
    };
    readonly sm: {
        readonly padding: number;
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly borderRadius: number;
    };
    readonly base: {
        readonly padding: 8;
        readonly fontSize: 1;
        readonly lineHeight: 1.5;
        readonly borderRadius: number;
    };
    readonly lg: {
        readonly padding: number;
        readonly fontSize: 1.618;
        readonly lineHeight: 1.5;
        readonly borderRadius: number;
    };
    readonly xl: {
        readonly padding: number;
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly borderRadius: 8;
    };
    readonly '2xl': {
        readonly padding: number;
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly borderRadius: number;
    };
};
export declare const TYPOGRAPHY: {
    readonly display: {
        readonly fontSize: number;
        readonly lineHeight: 1.1;
        readonly fontWeight: 700;
        readonly letterSpacing: -0.02;
    };
    readonly h1: {
        readonly fontSize: number;
        readonly lineHeight: 1.2;
        readonly fontWeight: 700;
        readonly letterSpacing: -0.01;
    };
    readonly h2: {
        readonly fontSize: number;
        readonly lineHeight: 1.25;
        readonly fontWeight: 600;
        readonly letterSpacing: -0.01;
    };
    readonly h3: {
        readonly fontSize: number;
        readonly lineHeight: 1.3;
        readonly fontWeight: 600;
        readonly letterSpacing: 0;
    };
    readonly h4: {
        readonly fontSize: 1.618;
        readonly lineHeight: 1.35;
        readonly fontWeight: 600;
        readonly letterSpacing: 0;
    };
    readonly h5: {
        readonly fontSize: 1;
        readonly lineHeight: 1.4;
        readonly fontWeight: 600;
        readonly letterSpacing: 0;
    };
    readonly h6: {
        readonly fontSize: number;
        readonly lineHeight: 1.45;
        readonly fontWeight: 600;
        readonly letterSpacing: 0;
    };
    readonly body: {
        readonly fontSize: 1;
        readonly lineHeight: 1.5;
        readonly fontWeight: 400;
        readonly letterSpacing: 0;
    };
    readonly bodyLarge: {
        readonly fontSize: 1.618;
        readonly lineHeight: 1.5;
        readonly fontWeight: 400;
        readonly letterSpacing: 0;
    };
    readonly bodySmall: {
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly fontWeight: 400;
        readonly letterSpacing: 0;
    };
    readonly caption: {
        readonly fontSize: number;
        readonly lineHeight: 1.5;
        readonly fontWeight: 400;
        readonly letterSpacing: 0.01;
    };
    readonly button: {
        readonly fontSize: 1;
        readonly lineHeight: 1;
        readonly fontWeight: 500;
        readonly letterSpacing: 0.01;
    };
    readonly buttonSmall: {
        readonly fontSize: number;
        readonly lineHeight: 1;
        readonly fontWeight: 500;
        readonly letterSpacing: 0.01;
    };
    readonly buttonLarge: {
        readonly fontSize: 1.618;
        readonly lineHeight: 1;
        readonly fontWeight: 500;
        readonly letterSpacing: 0.01;
    };
};
export type TypeScale = keyof typeof TYPE_SCALE;
export type SpacingScale = keyof typeof SPACING_SCALE;
export type RadiusScale = keyof typeof RADIUS_SCALE;
export type ComponentScale = keyof typeof COMPONENT_SCALE;
export type TypographyScale = keyof typeof TYPOGRAPHY;
export interface TypeSystemProps {
    size?: ComponentScale;
    spacing?: SpacingScale;
    radius?: RadiusScale;
    typography?: TypographyScale;
}
export declare const getFontSize: (scale: TypeScale) => number;
export declare const getSpacing: (scale: SpacingScale) => number;
export declare const getRadius: (scale: RadiusScale) => number;
export declare const getComponentSize: (scale: ComponentScale) => {
    readonly padding: number;
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly borderRadius: number;
} | {
    readonly padding: number;
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly borderRadius: number;
} | {
    readonly padding: 8;
    readonly fontSize: 1;
    readonly lineHeight: 1.5;
    readonly borderRadius: number;
} | {
    readonly padding: number;
    readonly fontSize: 1.618;
    readonly lineHeight: 1.5;
    readonly borderRadius: number;
} | {
    readonly padding: number;
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly borderRadius: 8;
} | {
    readonly padding: number;
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly borderRadius: number;
};
export declare const getTypography: (scale: TypographyScale) => {
    readonly fontSize: number;
    readonly lineHeight: 1.1;
    readonly fontWeight: 700;
    readonly letterSpacing: -0.02;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.2;
    readonly fontWeight: 700;
    readonly letterSpacing: -0.01;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.25;
    readonly fontWeight: 600;
    readonly letterSpacing: -0.01;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.3;
    readonly fontWeight: 600;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: 1.618;
    readonly lineHeight: 1.35;
    readonly fontWeight: 600;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: 1;
    readonly lineHeight: 1.4;
    readonly fontWeight: 600;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.45;
    readonly fontWeight: 600;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: 1;
    readonly lineHeight: 1.5;
    readonly fontWeight: 400;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: 1.618;
    readonly lineHeight: 1.5;
    readonly fontWeight: 400;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly fontWeight: 400;
    readonly letterSpacing: 0;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1.5;
    readonly fontWeight: 400;
    readonly letterSpacing: 0.01;
} | {
    readonly fontSize: 1;
    readonly lineHeight: 1;
    readonly fontWeight: 500;
    readonly letterSpacing: 0.01;
} | {
    readonly fontSize: number;
    readonly lineHeight: 1;
    readonly fontWeight: 500;
    readonly letterSpacing: 0.01;
} | {
    readonly fontSize: 1.618;
    readonly lineHeight: 1;
    readonly fontWeight: 500;
    readonly letterSpacing: 0.01;
};
export declare const generateCSSVariables: () => Record<string, string>;
export declare const getBaselineGrid: (fontSize: number, lineHeight?: number) => number;
export declare const getResponsiveScale: (baseScale: number, breakpoint: "sm" | "md" | "lg" | "xl") => number;
//# sourceMappingURL=types.d.ts.map