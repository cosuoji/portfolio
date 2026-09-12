import gsap from "gsap";

export function initHeroAnimation() {
  const eyebrow = document.querySelector(".hero-eyebrow");
  const title = document.querySelector(".hero-title");
  const meta = document.querySelectorAll(".hero-meta");
  const scroll = document.querySelector(".hero-scroll");

  if (!eyebrow || !title) return;

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .from(eyebrow, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        title,
        {
          yPercent: 110,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.45"
      )
      .from(
        meta,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        "-=0.5"
      )
      .from(
        scroll,
        {
          y: 15,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
  });

  return () => ctx.revert();
}
