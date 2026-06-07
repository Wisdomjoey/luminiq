import Link from "next/link";

function CTASection() {
  return (
    <section className="cta-section px-4.5 sm:px-15 md:px-20 py-20 md:py-35">
      <div className="cta-bg-ring size-15 sm:size-45 md:size-75 top-1/2 left-1/2"></div>

      <div
        className="cta-bg-ring size-65 sm:size-95 md:size-125 top-1/2 left-1/2"
        style={{ animationDelay: "-2s" }}
      ></div>

      <div
        className="cta-bg-ring size-140 sm:size-170 md:size-200 top-1/2 left-1/2"
        style={{ animationDelay: "-4s" }}
      ></div>

      <h2 className="cta-section-title reveal">
        Ready to build something{" "}
        <em className="text-(--accent-2)">remarkable?</em>
      </h2>

      <p className="cta-section-sub reveal">
        We take on a limited number of engagements each quarter to ensure every
        client receives our full focus.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 relative z-1 reveal">
        <Link href="/contact" className="btn-white">
          Start a Project
          <span>→</span>
        </Link>

        <Link href="/case-study" className="btn-outline-white">
          View Our Work
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
