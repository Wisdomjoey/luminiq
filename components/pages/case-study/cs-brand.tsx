function CSBrand() {
  return (
    <div id="cs-brand">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking-[-0.02em] mb-5 text-(--ink)">
        Brand Strategy
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-6!">
        Our research revealed a clear positioning opportunity: Axiom&apos;s
        competitors were either aggressively consumer-grade (accessible but
        superficial) or stodgily traditional (trustworthy but cold). The
        strategy was to occupy &quot;Institutional Confidence&quot; —
        technically authoritative, visually sophisticated, humanly approachable.
      </p>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="border-[0.5px] border-(--border-2) rounded-(--r-md) p-6">
          <div className="text-[11px] uppercase tracking-[0.12em] text-(--muted-2) mb-3!">
            Brand Personality
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[20px] [font-family:var(--serif)] tracking-[-0.02em] text-(--ink)">
              Precise
            </span>

            <span className="text-[20px] [font-family:var(--serif)] tracking-[-0.02em] text-(--ink)">
              Authoritative
            </span>

            <span className="text-[20px] [font-family:var(--serif)] tracking-[-0.02em] text-(--ink)">
              Considered
            </span>

            <span className="text-[20px] [font-family:var(--serif)] tracking-[-0.02em] text-(--ink)">
              Transparent
            </span>
          </div>
        </div>

        <div className="border-[0.5px] border-(--border-2) rounded-(--r-md) p-6">
          <div className="text-[11px] uppercase tracking-[0.12em] text-(--muted-2) mb-3!">
            Strategic Decisions
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[13px] text-(--muted) leading-[1.6] p-3 border-b-[0.5px] border-(--border)">
              Serif display type signals institutional permanence while modern
              cuts avoid feeling dated
            </div>

            <div className="text-[13px] text-(--muted) leading-[1.6] p-3 border-b-[0.5px] border-(--border)">
              Deep ink palette reads as authoritative against warm surface,
              avoiding the cold grey of competitors
            </div>

            <div className="text-[13px] text-(--muted) leading-[1.6]">
              Gold accent communicates precision and value without ostentation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSBrand;
