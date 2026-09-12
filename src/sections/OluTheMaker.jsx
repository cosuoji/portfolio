import { assets } from "../data/assets";

function OluTheMaker() {
  return (
    <section
      id="olu-the-maker"
      className="relative overflow-hidden bg-[#e9e2d5] text-[#171512]"
    >
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1800px] px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="flex items-start justify-between">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#716b61] sm:text-xs">
            01 / 04
          </p>

          <p className="hidden max-w-[180px] text-right font-sans text-[10px] uppercase leading-[1.5] tracking-[0.15em] text-[#716b61] sm:block sm:text-xs">
            Commerce
            <br />
            Editorial
          </p>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-28">
          <h2 className="font-display text-[22vw] leading-[0.72] tracking-[-0.05em] sm:text-[17vw] lg:text-[14vw]">
            OLU
            <br />
            <span className="italic">THE MAKER</span>
          </h2>
        </div>

        <div className="mt-16 flex justify-end sm:mt-24">
          <p className="max-w-[280px] font-sans text-xs uppercase leading-[1.6] tracking-[0.12em] text-[#514c45] sm:max-w-[360px] sm:text-sm">
            A digital home for a men's lifestyle luxury brand — bringing
            together culture, editorial content, and commerce.
          </p>
        </div>
      </div>

      {/* Main visual */}
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden bg-[#d8d0c2]">
          <img
            src={assets.oluTheMaker.imageOne}
            alt="Olu The Maker website"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Feature sequence */}
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#716b61] sm:text-xs">
              The experience
            </p>

            <h3 className="mt-8 max-w-[420px] font-display text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              From
              <br />
              story
              <br />
              to
              <br />
              <span className="italic">store.</span>
            </h3>
          </div>

          <div className="space-y-20 sm:space-y-28">
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-[#c9c1b5] pb-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em]">
                  01
                </span>

                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#716b61]">
                  Magazine
                </span>
              </div>

              <div className="overflow-hidden bg-[#d8d0c2]">
                <img
                  src={assets.oluTheMaker.imageTwo}
                  alt="Olu The Maker editorial experience"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="ml-auto max-w-[85%] sm:max-w-[75%]">
              <div className="mb-5 flex items-center justify-between border-b border-[#c9c1b5] pb-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em]">
                  02
                </span>

                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#716b61]">
                  Commerce
                </span>
              </div>

              <div className="overflow-hidden bg-[#d8d0c2]">
                <img
                  src={assets.oluTheMaker.imageThree}
                  alt="Olu The Maker commerce experience"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project information */}
      <div className="border-t border-[#c9c1b5]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#716b61]">
              Commerce / Editorial
            </p>

            <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em]">
              React · Tailwind · Node · Express · MongoDB
            </p>
          </div>

          <div className="flex items-end justify-between gap-10 lg:gap-20">
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#716b61]">
              2026
            </p>

            <a
              href="https://oluthemaker.com"
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

export default OluTheMaker;
