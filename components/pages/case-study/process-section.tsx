"use client";

import { useState } from "react";
import CSBrand from "./cs-brand";
import CSChallenge from "./cs-challenge";
import CSDesign from "./cs-design";
import CSHandoff from "./cs-handoff";
import CSOutcome from "./cs-outcome";
import CSResearch from "./cs-research";
import CSSystem from "./cs-system";

const tabs = [
  "challenge",
  "research",
  "brand",
  "design",
  "system",
  "handoff",
  "outcome",
] as const;

function ProcessSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("challenge");

  return (
    <section className=" px-4.5 sm:px-15 md:px-20 pt-40 pb-25">
      <div className="cs-process grid sm:grid-cols-[200px_1fr]">
        <div className="cs-nav py-5 md:py-8 overflow-y-auto h-36 sm:h-full">
          <button
            onClick={() => setTab("challenge")}
            className={`cs-nav-item w-full ${tab === "challenge" ? "active" : ""}`}
          >
            <span className="cs-nav-num">01</span> Challenge
          </button>

          <button
            onClick={() => setTab("research")}
            className={`cs-nav-item w-full ${tab === "research" ? "active" : ""}`}
          >
            <span className="cs-nav-num">02</span> Research
          </button>

          <button
            onClick={() => setTab("brand")}
            className={`cs-nav-item w-full ${tab === "brand" ? "active" : ""}`}
          >
            <span className="cs-nav-num">03</span> Brand Strategy
          </button>

          <button
            onClick={() => setTab("design")}
            className={`cs-nav-item w-full ${tab === "design" ? "active" : ""}`}
          >
            <span className="cs-nav-num">04</span> Design
          </button>

          <button
            onClick={() => setTab("system")}
            className={`cs-nav-item w-full ${tab === "system" ? "active" : ""}`}
          >
            <span className="cs-nav-num">05</span> System Build
          </button>

          <button
            onClick={() => setTab("handoff")}
            className={`cs-nav-item w-full ${tab === "handoff" ? "active" : ""}`}
          >
            <span className="cs-nav-num">06</span> Handoff
          </button>

          <button
            onClick={() => setTab("outcome")}
            className={`cs-nav-item w-full ${tab === "outcome" ? "active" : ""}`}
          >
            <span className="cs-nav-num">07</span> Outcomes
          </button>
        </div>

        <div className="px-6 sm:px-8 md:px-12 py-12" id="csContent">
          {tab === "challenge" && <CSChallenge />}

          {tab === "research" && <CSResearch />}

          {tab === "brand" && <CSBrand />}

          {tab === "design" && <CSDesign />}

          {tab === "system" && <CSSystem />}

          {tab === "handoff" && <CSHandoff />}

          {tab === "outcome" && <CSOutcome />}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
