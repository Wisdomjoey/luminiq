function CSResearch() {
  return (
    <div id="cs-research">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking[-0.02em] mb-5! text-(--ink)">
        Research & Discovery
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-6!">
        We began with a 3-week immersion: stakeholder interviews across C-suite,
        product, and engineering; competitive audit of 12 comparable fintech
        platforms; and a brand perception survey with 200 high-net-worth
        investors.
      </p>

      <div className="process-diagram sm:divide-x-[0.5px] divide-(--border-2) [&>div]:border-(--border-2) grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="pd-phase order-1 border-b-[0.5px] lg:border-b-0">
          <div className="pd-phase-num">Week 1–2</div>

          <div className="pd-phase-name">Stakeholder Interviews</div>

          <ul className="pd-phase-items">
            <li>12 C-suite sessions</li>
            <li>Engineering audit</li>
            <li>Customer surveys</li>
          </ul>

          <div className="pd-arrow hidden! sm:flex! top-1/2 -translate-y-1/2 -right-2.5">
            →
          </div>
          <div className="pd-arrow sm:hidden! -bottom-2.5 left-1/2 -translate-x-1/2">
            ↓
          </div>
        </div>

        <div className="pd-phase order-2 border-b-[0.5px] lg:border-b-0">
          <div className="pd-phase-num">Week 3</div>

          <div className="pd-phase-name">Brand Audit</div>

          <ul className="pd-phase-items">
            <li>Asset inventory</li>
            <li>Competitive matrix</li>
            <li>Gap analysis</li>
          </ul>

          <div className="pd-arrow hidden! lg:flex! top-1/2 -translate-y-1/2 -right-2.5">
            →
          </div>
          <div className="pd-arrow lg:hidden! -bottom-2.5 left-1/2 -translate-x-1/2">
            ↓
          </div>
        </div>

        <div className="pd-phase order-3 sm:order-4 lg:order-3 border-b-[0.5px] sm:border-b-0 sm:border-l-[0.5px] lg:border-l-0">
          <div className="pd-phase-num">Week 4</div>

          <div className="pd-phase-name">Synthesis</div>

          <ul className="pd-phase-items">
            <li>Insight mapping</li>
            <li>Opportunity areas</li>
            <li>Brief refinement</li>
          </ul>

          <div className="pd-arrow hidden! lg:flex! top-1/2 -translate-y-1/2 -right-2.5">
            →
          </div>
          <div className="pd-arrow sm:hidden! -bottom-2.5 left-1/2 -translate-x-1/2">
            ↓
          </div>
          <div className="pd-arrow hidden! sm:flex! lg:hidden! -left-2.5 top-1/2 -translate-y-1/2">
            ←
          </div>
        </div>

        <div className="pd-phase order-4 sm:order-3 lg:order-4">
          <div className="pd-phase-num">Week 5</div>

          <div className="pd-phase-name">Strategy Brief</div>

          <ul className="pd-phase-items">
            <li>Brand positioning</li>
            <li>Creative territories</li>
            <li>Success metrics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CSResearch;
