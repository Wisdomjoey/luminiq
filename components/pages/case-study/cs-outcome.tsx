function CSOutcome() {
  return (
    <div id="cs-outcomes">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking[-0.02em] mb-5! text-(--ink)">
        Business Outcomes
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-8!">
        The new brand system became central to Axiom&apos;s Series C narrative.
        Investors cited the professionalism and consistency of their digital
        presence as a signal of operational maturity.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="border-[0.5px] border-(--border) rounded-(--r-md) p-6">
          <div className="[font-family:var(--serif)] text-[40px] sm:text-[48px] tracking[-0.04em] text-(--ink) mb-2!">
            £280<span className="text-[18px] sm:text-[24px]">M</span>
          </div>

          <div className="text-[13px] text-(--muted) leading-normal">
            Series C raised 4 months after brand launch
          </div>
        </div>

        <div className="border-[0.5px] border-(--border) rounded-(--r-md) p-6">
          <div className="[font-family:var(--serif)] text-[40px] sm:text-[48px] tracking[-0.04em] text-(--ink) mb-2!">
            2.4<span className="text-[18px] sm:text-[24px]">×</span>
          </div>

          <div className="text-[13px] text-(--muted) leading-normal">
            Increase in product team velocity post-system launch
          </div>
        </div>

        <div className="border-[0.5px] border-(--border) rounded-(--r-md) p-6">
          <div className="[font-family:var(--serif)] text-[40px] sm:text-[48px] tracking[-0.04em] text-(--ink) mb-2!">
            38<span className="text-[18px] sm:text-[24px]">%</span>
          </div>

          <div className="text-[13px] text-(--muted) leading-normal">
            Reduction in design-to-development cycle time
          </div>
        </div>

        <div className="border-[0.5px] border-(--border) rounded-(--r-md) p-6">
          <div className="[font-family:var(--serif)] text-[40px] sm:text-[48px] tracking[-0.04em] text-(--ink) mb-2!">
            100<span className="text-[18px] sm:text-[24px]">%</span>
          </div>

          <div className="text-[13px] text-(--muted) leading-normal">
            WCAG 2.1 AA compliance across all product surfaces
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSOutcome;
