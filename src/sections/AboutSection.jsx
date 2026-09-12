function AboutSection() {
  const capabilities = [
    {
      number: "01",
      title: "Product Interfaces",
      description:
        "Clear, purposeful interfaces designed around how people actually use a product.",
    },
    {
      number: "02",
      title: "Full-Stack Systems",
      description:
        "The frontend and backend working together as one complete product.",
    },
    {
      number: "03",
      title: "Interactive Experiences",
      description:
        "Motion, transitions, and interactions that give digital products a sense of character.",
    },
    {
      number: "04",
      title: "Business Tools",
      description:
        "Practical software that turns complicated workflows into simpler systems.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper text-ink"
    >
      {/* Intro statement */}
      <div className="mx-auto max-w-[1800px] px-6 pb-32 pt-32 sm:px-8 sm:pb-40 sm:pt-40 lg:px-12 lg:pb-52 lg:pt-52">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_1.65fr]">
          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:text-xs">
              About
            </p>
          </div>

          <div>
            <p className="mb-10 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:mb-14 sm:text-xs">
              Chibueze Osuoji
            </p>

            <h2 className="max-w-[1300px] font-display text-[15vw] leading-[0.74] tracking-[-0.05em] sm:text-[11vw] lg:text-[9vw]">
              I'm a
              <br />
              <span className="italic">builder.</span>
            </h2>

            <div className="mt-16 border-t border-line pt-8 sm:mt-24 sm:pt-10">
              <p className="max-w-[1200px] font-display text-[10vw] leading-[0.78] tracking-[-0.045em] sm:text-[8vw] lg:text-[6.5vw]">
                I like turning
                <br />
                complicated ideas
                <br />
                into products
                <br />
                <span className="italic">people can use.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid lg:grid-cols-[0.35fr_1.65fr]">
            <div className="border-b border-line px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-12">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:text-xs">
                Capabilities
              </p>
            </div>

            <div>
              {capabilities.map((item, index) => (
                <div
                  key={item.number}
                  className={`group px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 ${
                    index !== capabilities.length - 1
                      ? "border-b border-line"
                      : ""
                  }`}
                >
                  <div className="grid gap-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start">
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                      {item.number}
                    </span>

                    <h3 className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                      {item.title}
                    </h3>

                    <p className="max-w-[440px] font-sans text-sm leading-[1.7] text-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Short profile */}
      <div className="mx-auto max-w-[1800px] px-6 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-52">
        <div className="grid gap-14 lg:grid-cols-[0.4fr_1.6fr]">
          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:text-xs">
              How I work
            </p>
          </div>

          <div>
            <p className="max-w-[1050px] font-display text-5xl leading-[0.9] tracking-[-0.035em] sm:text-7xl lg:text-[6vw]">
              I care about the details people see — and the systems they
              <span className="italic"> don't.</span>
            </p>

            <p className="mt-12 max-w-[620px] font-sans text-sm leading-[1.8] text-muted sm:mt-16 sm:text-base">
              From the interface to the infrastructure behind it, I build
              digital products with attention to both the experience and the
              system that makes it work.
            </p>
          </div>
        </div>
      </div>

      {/* Stack strip */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1800px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-muted sm:text-xs">
              Working with
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
              ].map((technology) => (
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

export default AboutSection;
