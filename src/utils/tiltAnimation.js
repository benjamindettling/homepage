import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  if (elements.length > 0) {
    VanillaTilt.init(elements, {
      max: 7,
      speed: 6000,
      glare: true,
      "max-glare": 0.3,
    });
  }
}
