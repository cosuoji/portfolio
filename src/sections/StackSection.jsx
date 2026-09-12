function StackSection() {
  const principles = [
    {
      number: "01",
      title: "Craft",
      project: "Olu The Maker",
    },
    {
      number: "02",
      title: "Trust",
      project: "AbegFix",
    },
    {
      number: "03",
      title: "Motion",
      project: "Motion Works",
    },
    {
      number: "04",
      title: "Control",
      project: "BizFlow",
    },
  ];

  const stack = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section
      id="common-thread"
      className="relative overflow-hidden bg-paper text-ink"
    >
      {/* Main statement */}
      <div className="mx-auto max-w-[1800px] px-6 pb-28 pt-32 sm:px-8 sm:pb-36 sm:pt-40 lg:px-12 lg:pb-48 lg:pt-52">
        <div className="max-w-[1400px]">
          <p className="mb-10 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:mb-14 sm:text-xs">
            The common thread
          </p>

          <h2 className="font-display text-[15vw] leading-[0.72] tracking-[-0.05em] sm:text-[12vw] lg:text-[10vw]">
            Four products.
            <br />
            Different
            <br />
            <span className="italic">problems.</span>
          </h2>

          <div className="mt-16 border-t border-line pt-8 sm:mt-24 sm:pt-10">
            <p className="font-display text-[13vw] leading-[0.75] tracking-[-0.045em] sm:text-[10vw] lg:text-[8vw]">
              Same
              <br />
              <span className="italic">approach.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="border-y border-line">
        <div className="mx-auto grid max-w-[1800px] md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`group px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 ${
                index !== principles.length - 1
                  ? "border-b border-line lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
                  {item.number}
                </span>

                <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted">
                  {item.project}
                </span>
              </div>

              <h3 className="mt-20 font-display text-5xl leading-none tracking-[-0.03em] transition-transform duration-500 group-hover:-translate-y-2 sm:text-6xl">
                {item.title}
              </h3>

              <div className="mt-8 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Builder statement */}
      <div className="mx-auto max-w-[1800px] px-6 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-52">
        <div className="grid gap-14 lg:grid-cols-[0.4fr_1.6fr]">
          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:text-xs">
              What I build
            </p>
          </div>

          <div>
            <h2 className="max-w-[1100px] font-display text-6xl leading-[0.78] tracking-[-0.045em] sm:text-8xl lg:text-[9vw]">
              I build digital
              <br />
              products from
              <br />
              <span className="italic">interface to</span>
              <br />
              infrastructure.
            </h2>

            <p className="mt-12 max-w-[620px] font-sans text-sm leading-[1.75] text-muted sm:mt-16 sm:text-base">
              Product interfaces, business systems, marketplaces, and
              platforms — designed and developed as complete digital
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Stack */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1800px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-muted sm:text-xs">
              Tools & technologies
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] sm:text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
