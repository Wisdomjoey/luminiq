function CSSystem() {
  return (
    <div id="cs-system">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking-[-0.02em] mb-5! text-(--ink)">
        Design System Build
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-6!">
        Once brand direction was approved, we moved into the design system build
        phase. We used a token-first approach — establishing all primitive
        values before building components, ensuring every element traces back to
        a documented decision.
      </p>

      <div className="flex flex-col gap-4">
        <div className="bg-(--surface-2) rounded-(--r-md) p-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-medium text-(--ink)">
              Figma Token Library
            </div>

            <div className="text-[12px] text-(--muted)">
              342 primitive tokens → 89 semantic tokens
            </div>
          </div>

          <span className="ui-badge ui-badge-success">● Delivered</span>
        </div>

        <div className="bg-(--surface-2) rounded-(--r-md) p-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-medium text-(--ink)">
              Component Library
            </div>

            <div className="text-[12px] text-(--muted)">
              64 components, all variants, all states
            </div>
          </div>

          <span className="ui-badge ui-badge-success">● Delivered</span>
        </div>

        <div className="bg-(--surface-2) rounded-(--r-md) p-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-medium text-(--ink)">
              Storybook Documentation
            </div>

            <div className="text-[12px] text-(--muted)">
              All components documented with usage guidelines
            </div>
          </div>

          <span className="ui-badge ui-badge-success">● Delivered</span>
        </div>

        <div className="bg-(--surface-2) rounded-(--r-md) p-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-medium text-(--ink)">
              Accessibility Audit
            </div>

            <div className="text-[12px] text-(--muted)">
              WCAG 2.1 AA across all components
            </div>
          </div>

          <span className="ui-badge ui-badge-success">● Delivered</span>
        </div>
      </div>
    </div>
  );
}

export default CSSystem;
