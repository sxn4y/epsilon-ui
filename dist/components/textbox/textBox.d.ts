import React from "react";
import "epsilon-ui/dist/epsilon.css";
export interface TextBoxProps {
    className?: string;
    parallax?: boolean;
    tiltFactor?: number;
    placeholder?: string;
    value?: string;
    id?: string;
    name?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: "default" | "email" | "password" | "search";
    variant?: "primary" | "secondary" | "outline" | "fancy";
}
declare const _default: React.NamedExoticComponent<TextBoxProps>;
export default _default;
//# sourceMappingURL=textBox.d.ts.map