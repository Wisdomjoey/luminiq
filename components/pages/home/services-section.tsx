function ServicesSection() {
  const services = [
    {
      icon: "◈",
      title: "Brand Identity",
      description:
        "Complete brand ecosystems including logo systems, color theory, typography hierarchies, and comprehensive usage guidelines.",
      tags: ["Logo Design", "Color Systems", "Typography", "Brand Guidelines"],
    },
    {
      icon: "⊞",
      title: "Design Systems",
      description:
        "Scalable component libraries with design tokens, accessibility-first architecture, and complete developer handoff documentation.",
      tags: ["Tokens", "Components", "Figma Libraries", "Storybook"],
    },
    {
      icon: "◉",
      title: "Digital Experience",
      description:
        "Marketing websites, product interfaces, and interactive experiences that convert visitors into lifelong customers.",
      tags: ["Web Design", "Motion", "Interaction", "Development"],
    },
    {
      icon: "⬡",
      title: "Strategy & Research",
      description:
        "Deep user research, competitive analysis, and brand strategy that grounds every design decision in evidence and insight.",
      tags: ["User Research", "Audits", "Strategy", "Analytics"],
    },
    {
      icon: "⊕",
      title: "Motion Design",
      description:
        "Purposeful animation systems that reinforce hierarchy, communicate state, and express brand personality at every interaction.",
      tags: ["Micro-interactions", "Transitions", "Lottie", "GSAP"],
    },
    {
      icon: "⊗",
      title: "Accessibility",
      description:
        "WCAG 2.1 AA+ compliance, inclusive design patterns, and accessibility audits that ensure your product works for everyone.",
      tags: ["WCAG 2.1", "ARIA", "Auditing", "Testing"],
    },
  ];

  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30 services-bg">
      <div className="section-eyebrow reveal">What We Do</div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-end mb-16!">
        <h2 className="section-title reveal reveal-delay-1 m-0 max-w-125">
          End-to-end design <em>capability</em>
        </h2>

        <p className="reveal reveal-delay-2 text-sm text-white/40 max-w-xs m-0">
          From brand strategy to production-ready code — we build the full stack
          of your design system.
        </p>
      </div>

      <div className="services-grid grid gap-px sm:grid-cols-2 md:grid-cols-3 reveal">
        {services.map((service, ind1) => (
          <div
            key={ind1}
            className="service-card py-8 sm:py-12 px-6 sm:px-8 md:px-10"
          >
            <span className="service-num">
              {(ind1 + 1).toString().padStart(2, "0")}
            </span>

            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <p className="service-desc">{service.description}</p>

            <div className="service-tags">
              {service.tags.map((tag, ind2) => (
                <span key={ind2} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
