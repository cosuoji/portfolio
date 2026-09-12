import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProjectSectionAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const sections = document.querySelectorAll("[data-project-section]");

    sections.forEach((section) => {
      const heading = section.querySelector("[data-project-heading]");
      const number = section.querySelector("[data-project-number]");

      if (heading) {
        gsap.fromTo(
          heading,
          {
            yPercent: 12,
          },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 25%",
              scrub: true,
            },
          }
        );
      }

      if (number) {
        gsap.fromTo(
          number,
          {
            opacity: 0.3,
          },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }
    });
  });

  return () => ctx.revert();
}
