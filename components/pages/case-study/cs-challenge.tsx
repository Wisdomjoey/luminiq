import React from "react";

function CSChallenge() {
  return (
    <div id="cs-challenge">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking-[-0.02em] mb-5! text-(--ink)">
        The Challenge
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-5!">
        Axiom Capital had grown rapidly to £1.2B AUM with a visual identity that
        hadn&apos;t scaled with them. Their brand was inconsistent across
        digital touchpoints, their investor portal felt consumer-grade, and
        their team was shipping UI components without a shared system.
      </p>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-8!">
        The mandate was clear: build a brand system that communicates
        institutional-grade credibility, enables the product team to move faster
        without sacrificing consistency, and positions Axiom for a significant
        fundraise within 18 months.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-(--surface-2) rounded-(--r-md) p-5">
          <div className="text-[24px] [font-family:var(--serif)] text-(--accent) mb-2!">
            3
          </div>

          <div className="text-[12px] text-(--muted) leading-normal">
            Disconnected brand expressions across digital products
          </div>
        </div>

        <div className="bg-(--surface-2) rounded-(--r-md) p-5">
          <div className="text-[24px] [font-family:var(--serif)] text-(--accent) mb-2!">
            47%
          </div>

          <div className="text-[12px] text-(--muted) leading-normal">
            Duplicate component code across design + engineering teams
          </div>
        </div>

        <div className="bg-(--surface-2) rounded-(--r-md) p-5">
          <div className="text-[24px] [font-family:var(--serif)] text-(--accent) mb-2!">
            0
          </div>

          <div className="text-[12px] text-(--muted) leading-normal">
            Formal accessibility testing of existing product
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSChallenge;
