"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyParallax = applyParallax;
function applyParallax(elementRef, parallax, tiltFactor) {
    const element = elementRef.current;
    if (!element || !parallax || tiltFactor === 0)
        return;
    // Throttle mouse move events for better performance
    let rafId = null;
    const handleMouseMove = (e) => {
        if (rafId)
            return; // Skip if animation frame is already scheduled
        rafId = requestAnimationFrame(() => {
            const mouseEvent = e;
            const rect = element.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (y - centerY) / (element.clientHeight / tiltFactor);
            const tiltY = (centerX - x) / (element.clientWidth / tiltFactor);
            element.style.setProperty("--x", `${(x / element.clientWidth) * 100}%`);
            element.style.setProperty("--y", `${(y / element.clientHeight) * 100}%`);
            element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            rafId = null;
        });
    };
    const handleMouseLeave = () => {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };
    element.addEventListener("mousemove", handleMouseMove, { passive: true });
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
    };
}
