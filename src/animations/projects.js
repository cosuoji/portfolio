import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProjectAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const projectImages = document.querySelectorAll("[data-project-image]");

    projectImages.forEach((image) => {
      gsap.fromTo(
        image,
        {
          yPercent: -4,
        },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  });

  return () => ctx.revert();
}
