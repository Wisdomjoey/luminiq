import Link from "next/link";

function CtaSection() {
  return (
    <section className="cta-section px-4.5 sm:px-15 md:px-20 py-20 md:py-35">
      <h2 className="cta-section-title">Let&apos;s build something together</h2>

      <p className="cta-section-sub">
        We&apos;re selectively accepting new clients for Q4 2025.
      </p>

      <div className="cta-actions">
        <Link href="/contact" className="btn-white">
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}

export default CtaSection;
