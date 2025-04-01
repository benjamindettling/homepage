import ScrollReveal from "scrollreveal";

export const initScrollReveal = (targetElements, defaultProps) => {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...defaultProps, ...animation });
  });
};
