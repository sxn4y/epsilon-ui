import React, { ReactNode } from "react";
import "epsilon-ui/dist/epsilon.css";
export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    parallax?: boolean;
    tiltFactor?: number;
    autoFocus?: boolean;
    command?: string;
    commandFor?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: "button" | "submit" | "reset";
    value?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "secondary" | "outline" | "positive" | "danger" | "link" | "fancy";
}
declare const _default: React.NamedExoticComponent<ButtonProps>;
export default _default;
//# sourceMappingURL=button.d.ts.map