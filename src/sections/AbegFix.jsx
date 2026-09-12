import { assets } from "../data/assets";

function AbegFix() {
  return (
    <section
      data-project-section
      id="abeg-fix"
      className="relative overflow-hidden bg-[#edf1f3] text-[#101416]"
    >
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1800px] px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="flex items-start justify-between">
          <p data-project-number className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#687176] sm:text-xs">
            02 / 04
          </p>

          <p className="hidden text-right font-sans text-[10px] uppercase leading-[1.5] tracking-[0.15em] text-[#687176] sm:block sm:text-xs">
            Marketplace
            <br />
            Trust
          </p>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-28">
          <h2 data-project-heading className="font-display text-[23vw] leading-[0.7] tracking-[-0.05em] sm:text-[18vw] lg:text-[15vw]">
            ABEG
            <br />
            <span className="italic">FIX</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-8 sm:mt-24 sm:flex-row sm:items-end">
          <div className="flex gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs">
            <span>Find.</span>
            <span className="text-[#8b9498]">Verify.</span>
            <span className="text-[#8b9498]">Connect.</span>
          </div>

          <p className="max-w-[340px] font-sans text-xs uppercase leading-[1.6] tracking-[0.12em] text-[#4f595e] sm:text-sm">
            A marketplace designed to help people discover skilled artisans
            across Lagos and connect with verified professionals.
          </p>
        </div>
      </div>

      {/* Directory visual */}
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden border border-[#cbd2d5] bg-white">
          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-[#101416] px-3 py-2 font-sans text-[9px] uppercase tracking-[0.15em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Artisan directory
          </div>

          <img
            data-image-reveal
            src={assets.abegFix.directory}
            alt="AbegFix artisan directory"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product logic */}
      <div data-reveal className="mx-auto max-w-[1800px] px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Sticky narrative */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#687176] sm:text-xs">
              The system
            </p>

            <h3 className="mt-8 max-w-[420px] font-display text-5xl leading-[0.88] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Finding the
              <br />
              right person
              <br />
              should feel
              <br />
              <span className="italic">simple.</span>
            </h3>
          </div>

          {/* Steps */}
          <div>
            <div className="grid border-t border-[#cbd2d5]">
              <div className="grid grid-cols-[50px_1fr] gap-6 border-b border-[#cbd2d5] py-6 sm:grid-cols-[80px_1fr] sm:py-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
                  01
                </span>

                <div>
                  <h4 className="font-display text-3xl sm:text-4xl">
                    Find
                  </h4>

                  <p className="mt-3 max-w-[500px] font-sans text-xs leading-[1.6] text-[#687176] sm:text-sm">
                    Discover artisans through location and service-based
                    browsing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-6 border-b border-[#cbd2d5] py-6 sm:grid-cols-[80px_1fr] sm:py-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
                  02
                </span>

                <div>
                  <h4 className="font-display text-3xl sm:text-4xl">
                    Profile
                  </h4>

                  <p className="mt-3 max-w-[500px] font-sans text-xs leading-[1.6] text-[#687176] sm:text-sm">
                    See an artisan's work, services, location, and contact
                    information before reaching out.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-6 border-b border-[#cbd2d5] py-6 sm:grid-cols-[80px_1fr] sm:py-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
                  03
                </span>

                <div>
                  <h4 className="font-display text-3xl sm:text-4xl">
                    Verify
                  </h4>

                  <p className="mt-3 max-w-[500px] font-sans text-xs leading-[1.6] text-[#687176] sm:text-sm">
                    Verification adds another layer of confidence to the
                    marketplace.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-6 border-b border-[#cbd2d5] py-6 sm:grid-cols-[80px_1fr] sm:py-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
                  04
                </span>

                <div>
                  <h4 className="font-display text-3xl sm:text-4xl">
                    Connect
                  </h4>

                  <p className="mt-3 max-w-[500px] font-sans text-xs leading-[1.6] text-[#687176] sm:text-sm">
                    Move from discovery to direct contact without unnecessary
                    friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile visual */}
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="ml-auto max-w-[1200px] overflow-hidden border border-[#cbd2d5] bg-white">
          <img
            data-project-image
            src={assets.abegFix.profile}
            alt="AbegFix artisan profile"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Project footer */}
      <div className="mt-24 border-t border-[#cbd2d5] sm:mt-32">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
              Marketplace / Trust
            </p>

            <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em]">
              React · Tailwind · Node · Express · MongoDB
            </p>
          </div>

          <div className="flex items-end justify-between gap-10 lg:gap-20">
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#687176]">
              2026
            </p>

            <a
              href="https://abegfix.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.16em]"
            >
              Visit project

              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AbegFix;
