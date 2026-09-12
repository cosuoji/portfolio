function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        {/* Top */}
        <div className="flex items-center justify-between">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] opacity-60 sm:text-xs">
            Contact
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.18em] opacity-40 sm:text-xs">
            2026
          </p>
        </div>

        {/* Main */}
        <div className="py-24 sm:py-32 lg:py-20">
          <p className="mb-10 font-sans text-[10px] font-medium uppercase tracking-[0.22em] opacity-50 sm:mb-14 sm:text-xs">
            Have something worth building?
          </p>

          <h2 className="max-w-[1400px] font-display text-[17vw] leading-[0.72] tracking-[-0.055em] sm:text-[13vw] lg:text-[11vw]">
            Let's
            <br />
            <span className="italic">talk.</span>
          </h2>
        </div>

        {/* Contact links */}
        <div data-reveal className="border-t border-white/20">
          <div className="grid sm:grid-cols-2">
            <a
              href="https://wa.me/2348162317196"
              target="_blank"
              rel="noreferrer"
              className="group border-b border-white/20 py-8 sm:border-b-0 sm:border-r sm:pr-10 lg:py-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] opacity-50 sm:text-xs">
                  WhatsApp
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <p className="mt-8 font-display text-3xl tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                08162317196
              </p>
            </a>

            <a
              href="mailto:qelvinz@gmail.com"
              className="group py-8 sm:pl-10 lg:py-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] opacity-50 sm:text-xs">
                  Email
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <p className="mt-8 break-all font-display text-3xl tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                qelvinz@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] opacity-40 sm:text-xs">
            Chibueze Osuoji
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.18em] opacity-40 sm:text-xs">
            Digital products / Full-stack development
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 self-start font-sans text-[10px] font-medium uppercase tracking-[0.18em] sm:self-auto sm:text-xs"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
