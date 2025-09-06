import React, { ReactNode } from "react";
import "epsilon-ui/dist/epsilon.css";
export interface CardProps {
    children?: ReactNode;
    className?: string;
    parallax?: boolean;
    tiltFactor?: number;
    variant?: "primary" | "secondary" | "outline" | "positive" | "danger" | "link" | "fancy";
}
declare const _default: React.NamedExoticComponent<CardProps>;
export default _default;
//# sourceMappingURL=card.d.ts.map