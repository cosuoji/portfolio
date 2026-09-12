import { assets } from "../data/assets";

const workflow = [
  {
    number: "01",
    label: "Customers",
    description: "Keep customer information and history in one place.",
  },
  {
    number: "02",
    label: "Orders",
    description: "Track what was ordered, when, and what is still owed.",
  },
  {
    number: "03",
    label: "Invoices",
    description: "Create professional invoices without leaving the system.",
  },
  {
    number: "04",
    label: "Payments",
    description: "Record payments and automatically track outstanding balances.",
  },
  {
    number: "05",
    label: "WhatsApp",
    description: "Turn business events into messages your customers can receive.",
  },
];

function BizFlow() {
  return (
    <section
      id="bizflow"
      className="relative overflow-hidden bg-[#07100c] text-[#eef4ef]"
    >
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1800px] px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="flex items-start justify-between">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#708078] sm:text-xs">
            04 / 04
          </p>

          <p className="hidden text-right font-sans text-[10px] uppercase leading-[1.5] tracking-[0.15em] text-[#708078] sm:block sm:text-xs">
            SaaS
            <br />
            Business Management
          </p>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-28">
          <h2 className="font-display text-[24vw] leading-[0.68] tracking-[-0.055em] sm:text-[18vw] lg:text-[15vw]">
            BIZ
            <br />
            <span className="italic">FLOW</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-10 sm:mt-24 sm:flex-row sm:items-end">
          <p className="max-w-[420px] font-display text-4xl leading-[0.9] text-[#d8e4dc] sm:text-5xl lg:text-6xl">
            Run
            <br />
            the
            <br />
            <span className="italic">business.</span>
          </p>

          <p className="max-w-[380px] font-sans text-xs uppercase leading-[1.6] tracking-[0.12em] text-[#708078] sm:text-sm">
            A business management platform bringing customers, orders,
            invoices, payments, and WhatsApp communication into one system.
          </p>
        </div>
      </div>

      {/* Dashboard hero */}
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-sm border border-[#203229] bg-[#0d1712] shadow-2xl">
          {/* Top label */}
          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-[#294136] bg-[#0d1712]/90 px-3 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#82c99a]" />

            <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#aebdb3]">
              Business command center
            </span>
          </div>

          <img
            src={assets.bizFlow.dashboard}
            alt="BizFlow business management dashboard"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Workflow */}
      <div className="mx-auto max-w-[1800px] px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Statement */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#708078] sm:text-xs">
              One system
            </p>

            <h3 className="mt-8 max-w-[430px] font-display text-5xl leading-[0.85] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Less
              <br />
              chasing.
              <br />
              More
              <br />
              <span className="italic">control.</span>
            </h3>
          </div>

          {/* Workflow list */}
          <div className="border-t border-[#203229]">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[45px_1fr] gap-5 border-b border-[#203229] py-7 sm:grid-cols-[70px_1fr] sm:py-9"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#708078]">
                  {item.number}
                </span>

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="font-display text-3xl tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                      {item.label}
                    </h4>

                    <p className="mt-2 max-w-[430px] font-sans text-xs leading-[1.6] text-[#708078] sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <span className="hidden font-sans text-lg text-[#496153] transition-transform duration-300 group-hover:translate-x-2 sm:block">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting visuals */}
      <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div className="order-2 overflow-hidden border border-[#203229] bg-[#0d1712] lg:order-1">
            <img
              src={assets.bizFlow.marketing}
              alt="BizFlow product interface"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 overflow-hidden border border-[#203229] bg-[#0d1712] lg:order-2">
            <img
              src={assets.bizFlow.landing}
              alt="BizFlow website"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Technical statement */}
      <div className="mx-auto max-w-[1800px] px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-48">
        <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#708078] sm:text-xs">
            Built end to end
          </p>

          <div>
            <h3 className="max-w-[1000px] font-display text-5xl leading-[0.86] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              Interface on the
              <br />
              surface.
              <br />
              <span className="italic">System underneath.</span>
            </h3>

            <p className="mt-10 max-w-[620px] font-sans text-sm leading-[1.7] text-[#8a9890]">
              From customer records and orders to payments, invoices, debt
              tracking, and WhatsApp-ready communication, the product is
              designed as one connected business system.
            </p>
          </div>
        </div>
      </div>

      {/* Project footer */}
      <div className="border-t border-[#203229]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#708078]">
              SaaS / Business Management
            </p>

            <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em] text-[#aebdb3]">
              React · Tailwind · Node · Express · MongoDB
            </p>
          </div>

          <div className="flex items-end justify-between gap-10 lg:gap-20">
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#708078]">
              2026
            </p>

            <a
              href="https://bizmanagerr.netlify.app"
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

export default BizFlow;
