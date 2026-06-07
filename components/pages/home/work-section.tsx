"use client";

import Link from "next/link";

function WorkSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30">
      <div className="flex flex-col sm:flex-row sm:gap-5 justify-between sm:items-end mb-12!">
        <div>
          <div className="section-eyebrow reveal">Selected Work</div>

          <h2 className="section-title reveal reveal-delay-1">
            Brands we&apos;ve <em>shaped</em>
          </h2>
        </div>

        <Link href="/case-study" className="btn-ghost reveal">
          View all case studies
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      <div className="relative grid gap-5 md:grid-cols-[1.4fr_1fr] md:grid-rows-[auto_auto] reveal">
        <Link
          href={"/case-study"}
          className="min-h-80 lg:min-h-[initial] work-card work-card-a grid cursor-none md:row-[span_2]"
        >
          <div className="work-card-inner">
            <div className="work-card-content">
              <div className="work-card-img">
                <div className="work-float work-float-ring"></div>

                <div className="work-float work-float-ring work-float-ring-2"></div>

                <div className="work-float work-float-grid">
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                  <div className="work-float-dot"></div>
                </div>

                {/* <!-- Abstract logo mark --> */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="opacity-60"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgba(91,69,245,0.5)"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="35"
                    fill="none"
                    stroke="rgba(139,108,245,0.4)"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="20"
                    fill="rgba(91,69,245,0.15)"
                    stroke="rgba(91,69,245,0.6)"
                    strokeWidth="1"
                  />
                  <line
                    x1="10"
                    y1="60"
                    x2="110"
                    y2="60"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="110"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                  <circle cx="60" cy="25" r="4" fill="rgba(91,69,245,0.8)" />
                  <circle cx="95" cy="60" r="4" fill="rgba(201,168,76,0.8)" />
                  <circle cx="60" cy="95" r="4" fill="rgba(139,108,245,0.8)" />
                  <circle cx="25" cy="60" r="4" fill="rgba(255,255,255,0.4)" />
                </svg>
              </div>

              <div className="work-card-meta">
                <span className="work-card-cat">
                  Brand Identity + Design System
                </span>

                <h3 className="work-card-title">
                  Axiom Capital — Building trust through systematic precision
                </h3>

                <span className="work-card-link">View Case Study →</span>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"/case-study"}
          className="block min-h-80 lg:min-h-[initial] work-card work-card-b cursor-none"
        >
          <div className="work-card-inner">
            <div className="work-card-content">
              <div className="work-card-img">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  className="opacity-70"
                >
                  <rect
                    x="10"
                    y="10"
                    width="28"
                    height="28"
                    rx="4"
                    fill="rgba(220,38,38,0.3)"
                    stroke="rgba(220,38,38,0.5)"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="42"
                    y="10"
                    width="28"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="10"
                    y="42"
                    width="28"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="42"
                    y="42"
                    width="28"
                    height="28"
                    rx="4"
                    fill="rgba(220,38,38,0.15)"
                    stroke="rgba(220,38,38,0.3)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="work-card-meta">
                <span className="work-card-cat">Digital Experience</span>

                <h3 className="work-card-title">
                  Meridian Health — Patient-first digital transformation
                </h3>

                <span className="work-card-link">View Case Study →</span>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"/case-study"}
          className="block min-h-80 lg:min-h-[initial] work-card work-card-c cursor-none"
        >
          <div className="work-card-inner">
            <div className="work-card-content">
              <div className="work-card-img">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  className="opacity-70"
                >
                  <path
                    d="M40 5L75 55H5L40 5Z"
                    fill="none"
                    stroke="rgba(56,189,248,0.5)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M40 15L65 50H15L40 15Z"
                    fill="rgba(14,165,233,0.15)"
                    stroke="rgba(56,189,248,0.3)"
                    strokeWidth="0.5"
                  />
                  <circle cx="40" cy="32" r="6" fill="rgba(14,165,233,0.4)" />
                </svg>
              </div>

              <div className="work-card-meta">
                <span className="work-card-cat">Brand Strategy + Identity</span>

                <h3 className="work-card-title">
                  Prism Network — Rebranding for scale
                </h3>

                <span className="work-card-link">View Case Study →</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default WorkSection;
