function ProcessSection() {
  const processes = [
    {
      icon: "◎",
      title: "Discovery",
      description:
        "Deep immersion in your brand, competitive landscape, and user needs. We find the gaps and opportunities before touching a pixel.",
    },
    {
      icon: "◐",
      title: "Strategy",
      description:
        "Brand positioning, visual direction, and systems architecture defined with precision. Every decision documented and justified.",
    },
    {
      icon: "◑",
      title: "Design",
      description:
        "Iterative design in the open. Concepts, explorations, and refinements with continuous client collaboration.",
    },
    {
      icon: "●",
      title: "Deliver",
      description:
        "Production-ready systems with complete handoff packages, documentation, and onboarding for your team.",
    },
  ];

  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30 testimonials-bg">
      <div className="section-eyebrow reveal">Our Process</div>

      <h2 className="section-title reveal reveal-delay-1">
        Systematic. <em>Deliberate.</em> Repeatable.
      </h2>

      <div className="process-steps grid sm:grid-cols-2 md:grid-cols-4 gap-px reveal reveal-delay-2">
        {processes.map((process, ind) => (
          <div key={ind} className="process-step py-10 px-6 sm:px-8">
            <span className="process-num">
              {(ind + 1).toString().padStart(2, "0")} —
            </span>

            <div className="process-icon">{process.icon}</div>

            <h3 className="process-title">{process.title}</h3>

            <p className="process-desc">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
