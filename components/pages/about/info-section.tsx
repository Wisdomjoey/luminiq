function InfoSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <div className="section-eyebrow">Our Mission</div>

          <h2 className="section-title text-[36px]">
            Intelligent design for <em>every</em> scale
          </h2>

          <div className="about-text">
            <p>
              We founded LUMINIQ on a single conviction: that the distance
              between a good product and a <strong>great brand</strong> is
              almost always a systems problem.
            </p>

            <p>
              Great design scales when it&apos;s built on rigorous foundations —
              thoughtful tokens, accessible components, documented decisions,
              and a team that understands both design and engineering.
            </p>

            <p>
              We&apos;ve spent eight years building that foundation for
              companies across fintech, healthcare, SaaS, and consumer. Our
              process is opinionated, our standards are high, and our results
              speak clearly.
            </p>
          </div>
        </div>

        <div>
          <div className="section-eyebrow">Our Values</div>

          <div className="values-grid grid sm:grid-cols-2 gap-0.5">
            <div className="value-item">
              <div className="value-icon">◈</div>
              <div className="value-title">Systematic Thinking</div>
              <div className="value-desc">
                We design systems, not screens. Every decision scales.
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">◉</div>
              <div className="value-title">Radical Transparency</div>
              <div className="value-desc">
                We document every decision and explain every choice.
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">⊕</div>
              <div className="value-title">Craft Obsession</div>
              <div className="value-desc">
                The details others ignore are where we spend our time.
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">⬡</div>
              <div className="value-title">Inclusive Design</div>
              <div className="value-desc">
                Accessibility is a baseline, not a feature. Always.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
