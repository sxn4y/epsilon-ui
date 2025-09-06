import React, { ReactNode } from "react";
import "epsilon-ui/dist/epsilon.css";
interface LayoutProps {
    children?: ReactNode;
    className?: string;
    reveal?: boolean;
    duration?: number;
    delay?: number;
    once?: boolean;
    opacity?: number;
    scale?: number;
    angle?: number;
    threshold?: number;
    distance?: number;
    reverse?: boolean;
    ease?: string;
    direction?: "hor" | "ver";
    stagger?: number;
    staggerFrom?: "start" | "end" | "center";
}
interface SidebarProps {
    children?: ReactNode;
    className?: string;
    side?: "left" | "right";
}
declare const ESidebar: React.FC<SidebarProps>;
declare const EContentbar: React.FC<LayoutProps>;
declare const MemoizedELayout: React.NamedExoticComponent<LayoutProps>;
export { MemoizedELayout as ELayout, ESidebar, EContentbar };
//# sourceMappingURL=eLayout.d.ts.map