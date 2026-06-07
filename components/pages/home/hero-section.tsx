import HeroCanvas from "@/components/widgets/hero-canvas";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="relative items-center z-1 grid md:grid-cols-2 gap-20 px-4! sm:px-10 md:px-16! lg:px-20! pt-20! pb-15!">
        <div className="hero-left">
          <div className="hero-eyebrow text-sm sm:text-base">
            <div className="hero-eyebrow-dot size-4 sm:size-5 flex items-center justify-center after:size-1.5 sm:after:size-2"></div>
            <span>Premium Digital Consultancy</span>
          </div>

          <h1 className="hero-headline font-bold">
            <span
              className="hero-headline-word"
              style={{ animationDelay: "0.4s" }}
            >
              Design
            </span>{" "}
            <span
              className="hero-headline-word"
              style={{ animationDelay: "0.55s" }}
            >
              Systems
            </span>
            <br />
            <span
              className="hero-headline-word"
              style={{ animationDelay: "0.7s" }}
            >
              That
            </span>{" "}
            <span
              className="hero-headline-word"
              style={{ animationDelay: "0.85s" }}
            >
              <em> Scale</em>
            </span>
            <br />
            <span
              className="hero-headline-word"
              style={{ animationDelay: "1.0s" }}
            >
              With
            </span>{" "}
            <span
              className="hero-headline-word"
              style={{ animationDelay: "1.1s" }}
            >
              Ambition
            </span>
          </h1>

          <p className="hero-sub">
            We help companies create cohesive digital experiences through
            strategy, design systems, and modern web engineering.
          </p>

          <div className="hero-actions flex flex-col sm:flex-row items-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
              <span className="btn-icon">↗</span>
            </Link>

            <Link href="/case-study" className="btn-ghost">
              View Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-canvas-wrap">
            <HeroCanvas />

            <div className="hero-visual-badge hero-visual-badge-1">
              <span className="badge-dot badge-dot-green"></span>

              <div>
                <div className="badge-label">Design System Live</div>
                <div className="badge-sub">47 components deployed</div>
              </div>
            </div>

            <div className="hero-visual-badge hero-visual-badge-2">
              <span className="badge-dot badge-dot-blue"></span>

              <div>
                <div className="badge-label">Brand Token Update</div>
                <div className="badge-sub">v3.2.1 published</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ticker flex items-center">
        <div className="ticker-label py-5 px-3 sm:px-5 relative z-10">
          Trusted By
        </div>

        <div
          className="whitespace-nowrap animate-[ticker_12s_linear_infinite] md:animate-[ticker_24s_linear_infinite] py-5 flex gap-8 sm:gap-12 md:gap-15"
          id="tickerTrack"
        >
          <span className="ticker-item">Meridian Health</span>
          {[
            "Axiom Capital",
            "NovusLabs",
            "Crestline Group",
            "Prism Network",
            "Solara Energy",
            "Vantage AI",
            "Foundry Studio",
            "Meridian Health",
            "Axiom Capital",
            "Novus Labs",
            "Crestline Group",
            "Prism Network",
            "Solara Energy",
            "Vantage AI",
            "Foundry Studio",
          ].map((val, ind) => (
            <span
              key={ind}
              className="ticker-item flex items-center gap-2 sm:gap-2.5"
            >
              {val}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
