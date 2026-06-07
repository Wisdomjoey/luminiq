import ContactForm from "@/components/pages/contact/contact-form";

function ContactPage() {
  return (
    <div className="page active" id="page-contact">
      <div className="pt-35 px-4.5 sm:px-15 md:px-20 pb-15 bg-(--surface)">
        <div className="section-eyebrow">Let&apos;s Talk</div>

        <h1 className="[font-family:var(--serif)] text-[clamp(48px,5.5vw,80px)] leading-[1.05] tracking-[-0.03em] text-(--ink) max-w-175 mb-4!">
          Start a <em className="text-(--accent)">conversation</em>
          <br />
          about your next build
        </h1>

        <p className="text-[17px] text-(--muted) max-w-120 leading-[1.65]">
          We&apos;re selectively accepting new engagements. Tell us about your
          project and we&apos;ll respond within 48 hours.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

export default ContactPage;
