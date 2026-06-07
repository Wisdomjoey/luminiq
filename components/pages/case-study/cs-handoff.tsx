function CSHandoff() {
  return (
    <div id="cs-handoff">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking-[-0.02em] mb-5! text-(--ink)">
        Developer Handoff
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-6!">
        The handoff package was designed to eliminate ambiguity. Engineers
        shouldn&apos;t need to interrogate designers — every spec lives in the
        system documentation.
      </p>

      <div className="bg-(--ink) rounded-(--r-md) p-6 mb-5!">
        <div className="text-[11px] uppercase tracking-[0.12em] text-white/30 mb-4!">
          Handoff Package Contents
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {[
            "Figma design system file",
            "CSS custom properties file",
            "tokens.json (all platforms)",
            "Storybook component docs",
            "SVG + PDF asset package",
            "Brand guidelines PDF",
          ].map((val, ind) => (
            <div
              key={ind}
              className="flex items-center gap-2 p-2.5 bg-white/4 rounded-lg"
            >
              <span className="text-(--accent) text-[14px]">◈</span>
              <span className="text-[12px] text-white/60">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[13px] leading-[1.7] text-(--muted)">
        We also ran a 3-hour onboarding session with Axiom&apos;s engineering
        leads, walking through token architecture, contribution guidelines, and
        how to propose new components.
      </p>
    </div>
  );
}

export default CSHandoff;
