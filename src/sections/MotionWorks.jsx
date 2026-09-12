import { assets } from "../data/assets";

function MotionWorks() {
  return (
    <section
      data-project-section
      id="motion-works"
      className="relative overflow-hidden bg-[#0b0b0b] text-[#f1f0eb]"
    >
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1800px] px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="flex items-start justify-between">
          <p data-project-number className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#777772] sm:text-xs">
            03 / 04
          </p>

          <p className="hidden text-right font-sans text-[10px] uppercase leading-[1.5] tracking-[0.15em] text-[#777772] sm:block sm:text-xs">
            Music
            <br />
            Distribution
          </p>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-28">
          <h2 data-project-heading className="font-display text-[22vw] leading-[0.7] tracking-[-0.05em] sm:text-[17vw] lg:text-[14vw]">
            MOTION
            <br />
            <span className="italic">WORKS</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-10 sm:mt-24 sm:flex-row sm:items-end">
          <p className="max-w-[320px] font-display text-3xl leading-[0.95] text-[#d7d5cf] sm:text-4xl lg:text-5xl">
            Music
            <br />
            <span className="italic">in motion.</span>
          </p>

          <p className="max-w-[360px] font-sans text-xs uppercase leading-[1.6] tracking-[0.12em] text-[#777772] sm:text-sm">
            An independent music distribution platform connecting artist
            uploads, catalogues, distribution, and royalty payouts.
          </p>
        </div>
      </div>

      {/* Hero visual */}
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden border border-[#292929] bg-[#111111]">
          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-[#3a3a3a] bg-[#111111]/80 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.15em] text-[#b9b8b3] backdrop-blur-sm">
            Motion Works
          </div>

          <img
            data-project-image
            src={assets.motionWorks.imageTwo}
            alt="Motion Works music distribution platform"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* System flow */}
      <div data-reveal className="mx-auto max-w-[1800px] px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
        <div className="mb-14 flex items-end justify-between border-b border-[#292929] pb-5 sm:mb-20">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#777772] sm:text-xs">
            The system
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#777772]">
            01 — 04
          </p>
        </div>

        <div className="grid gap-0 border-t border-[#292929] md:grid-cols-4">
          {[
            {
              number: "01",
              title: "Upload",
              description: "Artists bring their music into the platform.",
            },
            {
              number: "02",
              title: "Catalogue",
              description: "Releases and assets stay organised in one place.",
            },
            {
              number: "03",
              title: "Distribute",
              description: "Music moves from the platform into distribution.",
            },
            {
              number: "04",
              title: "Royalties",
              description: "Revenue and payouts remain visible to the artist.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group border-b border-[#292929] py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:py-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] tracking-[0.18em] text-[#777772]">
                  {item.number}
                </span>

                <span className="text-[#555550] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-16 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[220px] font-sans text-xs leading-[1.6] text-[#777772]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary visuals */}
      <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="overflow-hidden border border-[#292929] bg-[#111111]">
            <img
              data-image-reveal
              src={assets.motionWorks.imageThree}
              alt="Motion Works catalogue interface"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="overflow-hidden border border-[#292929] bg-[#111111]">
            <img
              data-image-reveal
              src={assets.motionWorks.imageOne}
              alt="Motion Works platform interface"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Statement */}
      <div className="mx-auto max-w-[1800px] px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-48">
        <div className="max-w-[1000px]">
          <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.2em] text-[#777772] sm:text-xs">
            Built around the artist
          </p>

          <h3 className="font-display text-5xl leading-[0.85] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            From the first
            <br />
            upload to the
            <br />
            <span className="italic">final payout.</span>
          </h3>
        </div>
      </div>

      {/* Project footer */}
      <div data-reveal className="border-t border-[#292929]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#777772]">
              Music / Distribution
            </p>

            <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em] text-[#b7b5af]">
              React · Tailwind · Node · Express · MongoDB
            </p>
          </div>

          <div className="flex items-end justify-between gap-10 lg:gap-20">
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#777772]">
              2026
            </p>

            <a
              href="https://usemotionworks.com"
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

export default MotionWorks;
