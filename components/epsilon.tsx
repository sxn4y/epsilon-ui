export function applyParallax(
  elementRef:
    | React.RefObject<HTMLButtonElement | null>
    | React.RefObject<HTMLInputElement | null>
    | React.RefObject<HTMLDivElement | null>,
  parallax: boolean,
  tiltFactor: number
) {
  const element = elementRef.current;
  let handleMouseMove = (e: Event) => {},
    handleMouseLeave = () => {};

  if (!element) return;

  if (parallax) {
    handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
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
    };

    handleMouseLeave = () => {
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    element.addEventListener("mousemove", handleMouseMove);

    element.addEventListener("mouseleave", handleMouseLeave);
  }

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}
