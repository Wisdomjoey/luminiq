function TeamSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30">
      <div className="section-eyebrow reveal">The Team</div>

      <h2 className="section-title reveal reveal-delay-1">
        Designers who think in <em>systems</em>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="team-card reveal reveal-delay-1">
          <div className="team-img bg-[linear-gradient(135deg,#1a1040,#0d0d2b)]">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="25"
                fill="none"
                stroke="rgba(91,69,245,0.4)"
                strokeWidth="0.5"
              />
              <circle
                cx="30"
                cy="30"
                r="15"
                fill="rgba(91,69,245,0.2)"
                stroke="rgba(91,69,245,0.5)"
                strokeWidth="0.5"
              />
              <circle cx="30" cy="30" r="5" fill="rgba(91,69,245,0.8)" />
            </svg>
          </div>

          <div className="team-info">
            <div className="team-name">Elena Vasquez</div>

            <div className="team-role">Creative Director</div>

            <div className="team-bio">
              15 years building brand systems for Fortune 500 companies.
              Previously at Pentagram and Wolff Olins.
            </div>
          </div>
        </div>

        <div className="team-card reveal reveal-delay-2">
          <div className="team-img bg-[linear-gradient(135deg,#041020,#0a2540)]">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect
                x="10"
                y="10"
                width="18"
                height="18"
                rx="3"
                fill="none"
                stroke="rgba(56,189,248,0.5)"
                strokeWidth="0.5"
              />
              <rect
                x="32"
                y="10"
                width="18"
                height="18"
                rx="3"
                fill="rgba(14,165,233,0.2)"
                stroke="rgba(56,189,248,0.4)"
                strokeWidth="0.5"
              />
              <rect
                x="10"
                y="32"
                width="18"
                height="18"
                rx="3"
                fill="rgba(14,165,233,0.1)"
                stroke="rgba(56,189,248,0.3)"
                strokeWidth="0.5"
              />
              <rect
                x="32"
                y="32"
                width="18"
                height="18"
                rx="3"
                fill="none"
                stroke="rgba(56,189,248,0.2)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <div className="team-info">
            <div className="team-name">James Okafor</div>

            <div className="team-role">Head of Design Systems</div>

            <div className="team-bio">
              Design systems architect with deep expertise in token
              architecture, component APIs, and cross-platform consistency.
            </div>
          </div>
        </div>

        <div className="team-card reveal reveal-delay-3">
          <div className="team-img bg-[linear-gradient(135deg,#051510,#0a3020)]">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path
                d="M30 8L52 42H8L30 8Z"
                fill="none"
                stroke="rgba(34,197,94,0.4)"
                strokeWidth="0.5"
              />
              <path
                d="M30 18L44 40H16L30 18Z"
                fill="rgba(34,197,94,0.15)"
                stroke="rgba(34,197,94,0.3)"
                strokeWidth="0.5"
              />
              <circle cx="30" cy="32" r="4" fill="rgba(34,197,94,0.6)" />
            </svg>
          </div>

          <div className="team-info">
            <div className="team-name">Priya Sharma</div>

            <div className="team-role">Strategy Lead</div>

            <div className="team-bio">
              Brand strategist who bridges business goals and design execution.
              Worked with 40+ venture-backed startups.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
