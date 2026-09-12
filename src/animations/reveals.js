import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initRevealAnimations() {

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const reveals = document.querySelectorAll("[data-reveal]");

    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    const images = document.querySelectorAll("[data-image-reveal]");

    images.forEach((image) => {
      gsap.fromTo(
        image,
        {
          scale: 1.08,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
  });

  return () => ctx.revert();
}
