import React, { ReactNode } from "react";
import "epsilon-ui/dist/epsilon.css";
interface NavBarProps {
    children?: ReactNode;
    className?: string;
    brand?: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "fancy";
}
interface NavItemProps {
    children?: ReactNode;
    className?: string;
    href?: string;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "outline" | "positive" | "danger" | "link" | "fancy";
}
declare const NavItem: React.FC<NavItemProps>;
declare const MemoizedNavBar: React.NamedExoticComponent<NavBarProps>;
export { MemoizedNavBar as NavBar, NavItem };
//# sourceMappingURL=navbar.d.ts.map