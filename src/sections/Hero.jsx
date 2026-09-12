function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-paper"
    >
      <div className="mx-auto flex w-full max-w-[1800px] flex-col px-6 pb-10 pt-32 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16">
        {/* Eyebrow */}
        <div className="mb-8 overflow-hidden">
          <p className="hero-eyebrow font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-muted sm:text-xs">
            Selected Work
          </p>
        </div>

        {/* Main title */}
        <div className="overflow-hidden">
          <h1 className="hero-title max-w-[1100px] font-display text-[17vw] leading-[0.78] tracking-[-0.045em] sm:text-[13vw] lg:text-[11vw]">
            Four Products.
            <br />
            <span className="italic">Four Worlds.</span>
          </h1>
        </div>

        {/* Bottom information */}
        <div className="mt-14 flex items-end justify-between border-t border-line pt-4 sm:mt-20">
          <p className="hero-meta max-w-[220px] font-sans text-[10px] uppercase leading-[1.5] tracking-[0.16em] text-muted sm:text-xs">
            Digital products built
            <br />
            from interface to infrastructure.
          </p>

          <div className="hero-meta hidden text-right font-sans text-[10px] uppercase tracking-[0.16em] text-muted sm:block sm:text-xs">
            <span>2024 — 2026</span>
          </div>

          <button
            type="button"
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hero-scroll group flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs"
          >
            <span>Scroll</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
