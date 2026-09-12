function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-logo font-medium tracking-[0.18em]"
        >
         <span className="font-logo text-5xl">COsuoji</span>
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-8 sm:flex">
          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="group relative font-sans text-[11px] font-medium uppercase tracking-[0.18em]"
          >
            Work

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="group relative font-sans text-[11px] font-medium uppercase tracking-[0.18em]"
          >
            About

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="group relative font-sans text-[11px] font-medium uppercase tracking-[0.18em]"
          >
            Contact

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* Mobile contact */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] sm:hidden"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
