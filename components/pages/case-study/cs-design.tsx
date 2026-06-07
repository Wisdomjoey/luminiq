function CSDesign() {
  return (
    <div id="cs-design">
      <h3 className="[font-family:var(--serif)] text-[28px] tracking-[-0.02em] mb-5! text-(--ink)">
        Design Exploration
      </h3>

      <p className="text-[15px] leading-[1.8] text-(--muted) mb-6!">
        We explored three distinct creative territories before converging on the
        final direction. Each was tested with a subset of Axiom&apos;s investor
        base to validate emotional resonance and brand fit.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-(--r-md) overflow-hidden border-[0.5px] border-(--border)">
          <div className="h-30 bg-[linear-gradient(135deg,#0a0a1a,#1a0a30)] flex items-center justify-center">
            <span className="[font-family:var(--serif)] text-[28px] text-white tracking-[-0.04em] italic">
              Axiom
            </span>
          </div>

          <div className="p-4 bg-white h-full">
            <div className="text-[12px] font-medium text-(--ink) mb-1!">
              Direction A: Eclipse
            </div>

            <div className="text-[11px] text-(--muted)">
              Mysterious, premium, space-inspired
            </div>

            <div className="inline-flex items-center gap-1 bg-[rgba(220,38,38,0.1)] text-[#dc2626] text-[10px] py-0.75 px-2 rounded-[100px] mt-2!">
              ✕ Not selected
            </div>
          </div>
        </div>

        <div className="rounded-(--r-md) overflow-hidden border-0.5 border-(--accent)">
          <div className="h-30 bg-[linear-gradient(135deg,#f8f7f5,#e8e6e0)] flex items-center justify-center gap-2.5">
            <div className="size-7 bg-(--accent) rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="size-3.5 bg-white rounded-full absolute top-1 left-1"></div>
            </div>

            <span className="[font-family:var(--serif)] text-[20px] text-(--ink) tracking-[-0.03em]">
              Axiom
            </span>
          </div>

          <div className="p-4 bg-white h-full">
            <div className="text-[12px] font-medium text-(--ink) mb-1!">
              Direction B: Meridian ✓
            </div>

            <div className="text-[11px] text-(--muted)">
              Precise, warm, institutional authority
            </div>

            <div className="inline-flex items-center gap-1 bg-(--accent-glow) text-(--accent) text-[10px] py-0.75 px-2 rounded-[100px] mt-2!">
              ✓ Selected
            </div>
          </div>
        </div>

        <div className="rounded-(--r-md) overflow-hidden border-[0.5px] border-(--border)">
          <div className="h-30 bg-[#0a2540] flex items-center justify-center">
            <span className="[font-family:var(--sans)] text-[20px] text-white font-semibold tracking-widest">
              AXIOM
            </span>
          </div>

          <div className="p-4 bg-white h-full">
            <div className="text-[12px] font-medium text-(--ink) mb-1!">
              Direction C: Citadel
            </div>

            <div className="text-[11px] text-(--muted)">
              Confident, corporate, direct
            </div>

            <div className="inline-flex items-center gap-1 bg-[rgba(220,38,38,0.1)] text-[#dc2626] text-[10px] py-0.75 px-2 rounded-[100px] mt-2!">
              ✕ Not selected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSDesign;
