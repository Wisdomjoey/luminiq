function HandoffSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30 bg-(--ink-2)">
      <div className="section-eyebrow text-(--accent-2)">Developer Handoff</div>

      <h2 className="section-title text-white!">
        Every token, <em className="text-(--accent-2)">documented</em>
      </h2>

      <p className="text-white/45 max-w-130 mb-12! leading-[1.65]">
        Production-ready CSS variables, Figma token exports, and detailed
        component specs. Your engineers never guess, they reference.
      </p>

      <div className="grid md:grid-cols-2 gap-5 reveal">
        <div className="handoff-panel px-4 sm:px-7 py-7">
          <div className="handoff-panel-title">Design Tokens — tokens.json</div>

          <div className="code-block">
            <span className="code-comment">
              {"//"} LUMINIQ Design Tokens v3.2.1
            </span>
            <br />
            {"{"}
            <span className="code-key">&quot;color&quot;</span>: {"{"}
            <span className="code-key">&quot;brand&quot;</span>: {"{"}
            <span className="code-key">&quot;primary&quot;</span>:{" "}
            <span className="code-val">&quot;#5B45F5&quot;</span>,
            <span className="code-key">&quot;secondary&quot;</span>:{" "}
            <span className="code-val">&quot;#8B6CF5&quot;</span>,
            <span className="code-key">&quot;accent&quot;</span>:{" "}
            <span className="code-val">&quot;#C9A84C&quot;</span>
            {"}"},<span className="code-key">&quot;surface&quot;</span>: {"{"}
            <span className="code-key">&quot;primary&quot;</span>:{" "}
            <span className="code-val">&quot;#F8F7F5&quot;</span>,
            <span className="code-key">&quot;secondary&quot;</span>:{" "}
            <span className="code-val">&quot;#F0EEEA&quot;</span>,
            <span className="code-key">&quot;dark&quot;</span>:{" "}
            <span className="code-val">&quot;#0A0A0F&quot;</span>
            {"}"}
            {"}"},<span className="code-key">&quot;spacing&quot;</span>: {"{"}
            <span className="code-key">&quot;1&quot;</span>:{" "}
            <span className="code-val">&quot;4px&quot;</span>,
            <span className="code-key">&quot;2&quot;</span>:{" "}
            <span className="code-val">&quot;8px&quot;</span>,
            <span className="code-key">&quot;4&quot;</span>:{" "}
            <span className="code-val">&quot;16px&quot;</span>,
            <span className="code-key">&quot;8&quot;</span>:{" "}
            <span className="code-val">&quot;32px&quot;</span>,
            <span className="code-key">&quot;16&quot;</span>:{" "}
            <span className="code-val">&quot;64px&quot;</span>
            {"}"}
            {"}"}
          </div>
        </div>

        <div className="handoff-panel px-4 sm:px-7 py-7">
          <div className="handoff-panel-title">Component Spec — Button</div>

          <div className="code-block">
            <span className="code-comment">
              {"//"} Button Component Specification
            </span>
            <br />
            <span className="code-key">variants</span>: [primary, secondary,
            ghost, destructive]
            <span className="code-key">sizes</span>: [sm, md, lg]
            <span className="code-key">states</span>: [default, hover, active,
            disabled, loading]
            <br />
            <br />
            <span className="code-comment">
              {"//"} Accessibility Requirements
            </span>
            <br />
            <span className="code-key">focusRing</span>:{" "}
            <span className="code-val">&quot;2px solid #5B45F5&quot;</span>
            <span className="code-key">focusOffset</span>:{" "}
            <span className="code-val">&quot;2px&quot;</span>
            <span className="code-key">minTouchTarget</span>:{" "}
            <span className="code-val">&quot;44px × 44px&quot;</span>
            <span className="code-key">ariaRole</span>:{" "}
            <span className="code-val">&quot;button&quot;</span>
            <span className="code-key">keyboardNav</span>:{" "}
            <span className="code-val">Enter | Space</span>
            <br />
            <br />
            <span className="code-comment">{"//"} Motion Spec</span>
            <br />
            <span className="code-key">hoverTransform</span>:{" "}
            <span className="code-val">translateY(-2px)</span>
            <span className="code-key">activeTransform</span>:{" "}
            <span className="code-val">scale(0.97)</span>
            <span className="code-key">duration</span>:{" "}
            <span className="code-val">200ms</span>
            <span className="code-key">easing</span>:{" "}
            <span className="code-val">cubic-bezier(0.32, 0.72, 0, 1)</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 reveal mt-10!">
        <div className="token-card bg-white/4 border-white/8!">
          <div className="token-preview bg-[rgba(91,69,245,0.2)]! border border-[rgba(91,69,245,0.3)]!">
            <span className="text-[10px] text-(--accent-2)! tracking-wider">
              --color-brand
            </span>
          </div>

          <div className="token-name text-white!">Brand Colors</div>

          <div className="token-val">5 tokens</div>
        </div>

        <div className="token-card bg-white/4 border-white/8!">
          <div className="token-preview bg-white/4! border border-white/1! gap-1 flex items-center justify-center">
            <span className="text-[10px] text-white">4 8 16 32 64</span>
          </div>

          <div className="token-name text-white!">Spacing Scale</div>

          <div className="token-val">14 tokens</div>
        </div>

        <div className="token-card bg-white/4 border-white/8!">
          <div className="token-preview bg-white/4! border! border-white/1!">
            <span className="[font-family:var(--serif)] text-[22px] text-white tracking-[-0.03em]">
              Aa
            </span>
          </div>

          <div className="token-name text-white!">Typography</div>

          <div className="token-val">12 tokens</div>
        </div>

        <div className="token-card bg-white/4 border-white/8!">
          <div className="token-preview bg-white/4! border border-white/1!">
            <span className="text-[10px] text-white font-[monospace]">
              0.32, 0.72, 0, 1
            </span>
          </div>

          <div className="token-name text-white!">Motion Curves</div>

          <div className="token-val">6 tokens</div>
        </div>
      </div>
    </section>
  );
}

export default HandoffSection;
