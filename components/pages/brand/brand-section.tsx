import Logo from "@/components/widgets/logo";

function BrandSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-35">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-30">
          <div className="section-eyebrow">Visual Identity</div>

          <h2 className="section-title text-[40px]">
            The logo <em>system</em>
          </h2>

          <p className="text-[15px] leading-[1.7] text-(--muted) mb-10!">
            The LUMINIQ mark is built on a precise geometric foundation: a
            circle representing clarity of thought, intersected by a smaller
            circle representing focus — together symbolizing intelligent
            illumination.
          </p>

          {/* <!-- Logo Showcase --> */}
          <div className="bg-(--surface-2) border border-(--border-2) rounded-(--r-lg) p-6 sm:p-10 mb-6!">
            <div className="flex flex-wrap items-center flex-col sm:flex-row gap-8 mb-8!">
              {/* <!-- Primary Logo --> */}
              <div className="w-full flex-1 bg-white rounded-(--r-md) py-6 px-8 flex items-center justify-center gap-3.5 border border-(--border)">
                <Logo size={40} />

                <span className="[font-family:var(--serif)] text-2xl tracking-[-0.03em] text-(--ink)">
                  LUMINIQ
                </span>
              </div>

              {/* <!-- Dark bg --> */}
              <div className="w-full flex-1 bg-(--ink) rounded-(--r-md) py-6 px-8 flex items-center justify-center gap-3.5">
                <Logo size={40} />

                <span className="[font-family:var(--serif)] text-2xl tracking-[-0.03em] text-white">
                  LUMINIQ
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* <!-- Icon only --> */}
              <div className="flex-1 bg-(--surface-3) rounded-(--r-md) p-6 flex items-center justify-center">
                <Logo size={56} />
              </div>

              {/* <!-- Monogram --> */}
              <div className="flex-1 bg-(--ink-2) rounded-(--r-md) p-6 flex items-center justify-center">
                <span className="[font-family:var(--serif)] text-[42px text-white tracking-[0.06em] leading-1 italic">
                  LQ
                </span>
              </div>

              {/* <!-- Tag --> */}
              <div className="flex-1 bg-white  rounded-(--r-md) p-6 flex flex-col items-center justify-center border border-(--border)">
                <span className="[font-family:var(--serif)] text-[18px] text-(--ink) tracking-[0.02em]">
                  LUMINIQ
                </span>

                <div className="w-full h-[0.5px] bg-(--border-2) my-2!"></div>

                <span className="text-[8px]] tracking-[0.22em] uppercase text-(--muted)">
                  Intelligent Design
                </span>
              </div>
            </div>
          </div>

          <div className="brand-block-label">Clear Space Rule</div>

          <p className="text-[13px] text-(--muted) leading-[1.7]">
            Minimum clear space equals the height of the &apos;L&apos; glyph on
            all sides. Never place other elements within this zone. Scale all
            versions proportionally.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          {/* <!-- COLOR SYSTEM --> */}
          <div className="mb-14!">
            <div className="section-eyebrow">Color System</div>

            <h3 className="[font-family:var(--serif)] text-[28px] tracking-[0.02em] mb-4! text-(--ink)">
              A palette built on <em>psychological precision</em>
            </h3>

            <p className="text-[14px] leading-[1.7] text-(--muted) mb-7!">
              Each color was selected for its specific emotional impact and
              brand positioning. The violet-forward palette signals innovation
              and intelligence; warm gold accents reference precision and value;
              the near-black ink communicates authority and permanence.
            </p>

            <div className="brand-block-label">Primary Palette</div>

            <div className="color-palette mb-5!">
              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#5b45f5]">
                <div className="color-swatch-label">
                  Lumen Violet #5B45F5
                  <br />
                  Primary Brand
                </div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#8b6cf5]">
                <div className="color-swatch-label">
                  Lumen Lavender #8B6CF5
                  <br />
                  Secondary Brand
                </div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#0a0a0f]">
                <div className="color-swatch-label">
                  Deep Ink #0A0A0F
                  <br />
                  Text / Dark BG
                </div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#c9a84c]">
                <div className="color-swatch-label">
                  Precision Gold #C9A84C
                  <br />
                  Accent
                </div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#f8f7f5]">
                <div className="color-swatch-label">
                  Warm Surface #F8F7F5
                  <br />
                  Background
                </div>
              </div>
            </div>

            <div className="brand-block-label">Semantic Palette</div>
            <div className="color-palette">
              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#22c55e]">
                <div className="color-swatch-label">Success #22C55E</div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#f59e0b]">
                <div className="color-swatch-label">Warning #F59E0B</div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#ef4444]">
                <div className="color-swatch-label">Error #EF4444</div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#3b82f6]">
                <div className="color-swatch-label">Info #3B82F6</div>
              </div>

              <div className="color-swatch flex-1 h-10 sm:h-14 bg-[#6b6b8a]">
                <div className="color-swatch-label">Muted #6B6B8A</div>
              </div>
            </div>
          </div>

          {/* <!-- TYPOGRAPHY --> */}
          <div className="mb-14!">
            <div className="section-eyebrow">Typography System</div>

            <h3 className="[font-family:var(--serif)] text-[28px] tracking-[0.02em] mb-4! text-(--ink)">
              Two typefaces. <em>Infinite expression.</em>
            </h3>

            <p className="text-[14px] leading-[1.7] text-(--muted) mb-7!">
              DM Serif Display brings elegance and editorial authority to
              headlines. DM Sans provides clean readability for interface and
              body copy. Both from the same design family, ensuring visual
              harmony.
            </p>

            <div className="type-scale">
              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">Display</span>
                <span className="type-sample-d">Intelligent</span>
              </div>

              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">H1</span>
                <span className="type-sample-h1">Design Systems</span>
              </div>

              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">H2</span>
                <span className="type-sample-h2">Brand Identity</span>
              </div>

              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">Body</span>
                <span className="type-sample-body">
                  Crafting digital experiences that endure.
                </span>
              </div>

              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">Small</span>
                <span className="type-sample-sm">
                  Secondary information and captions.
                </span>
              </div>

              <div className="type-item">
                <span className="type-meta min-w-14 sm:min-w-20">Label</span>
                <span className="type-sample-label">UI Label / Tag</span>
              </div>
            </div>
          </div>

          {/* <!-- SPACING --> */}
          <div className="mb-14!">
            <div className="section-eyebrow">Spacing System</div>

            <h3 className="[font-family:var(--serif)] text-[28px] tracking-[0.02em] mb-4! text-(--ink)">
              A base-8 <em>spatial rhythm</em>
            </h3>

            <p className="text-[14px] leading-[1.7] text-(--muted) mb-7!">
              All spacing values are multiples of 4px, organized in a base-8
              scale. This creates natural visual hierarchy and ensures
              consistent spatial relationships across all components.
            </p>

            <div className="flex items-end gap-2">
              <div className="spacing-unit size-4">
                <span className="spacing-val text-[8px]">4</span>
              </div>

              <div className="spacing-unit size-5">
                <span className="spacing-val text-[8px]">8</span>
              </div>

              <div className="spacing-unit size-7">
                <span className="spacing-val text-[9px]">12</span>
              </div>

              <div className="spacing-unit size-9">
                <span className="spacing-val">16</span>
              </div>

              <div className="spacing-unit size-12">
                <span className="spacing-val">24</span>
              </div>

              <div className="spacing-unit size-15">
                <span className="spacing-val">32</span>
              </div>

              <div className="spacing-unit size-20">
                <span className="spacing-val">48</span>
              </div>

              <div className="spacing-unit size-25">
                <span className="spacing-val">64</span>
              </div>

              <div className="spacing-unit size-30">
                <span className="spacing-val">80</span>
              </div>
            </div>
          </div>

          {/* <!-- COMPONENTS --> */}
          <div className="mb-14!">
            <div className="section-eyebrow">Component Library</div>

            <h3 className="[font-family:var(--serif)] text-[28px] tracking-[0.02em] mb-7! text-(--ink)">
              Production-ready <em>elements</em>
            </h3>

            <div className="comp-showcase p-6 sm:p-8 md:p-10">
              <div>
                <div className="comp-label mb-3!">Buttons</div>

                <div className="comp-row">
                  <button className="ui-btn ui-btn-primary">
                    Primary Action
                    <span className="size-5.5 bg-white/15 rounded-full flex items-center justify-center text-[11px]">
                      ↗
                    </span>
                  </button>
                  <button className="ui-btn ui-btn-secondary">Secondary</button>
                  <button className="ui-btn ui-btn-ghost">Ghost</button>
                  <button className="ui-btn ui-btn-destructive">
                    Destructive
                  </button>
                </div>
              </div>

              <div>
                <div className="comp-label mb-3!">Badges</div>
                <div className="comp-row">
                  <span className="ui-badge ui-badge-default">Default</span>
                  <span className="ui-badge ui-badge-accent">● Active</span>
                  <span className="ui-badge ui-badge-success">● Live</span>
                  <span className="ui-badge ui-badge-warning">● Warning</span>
                  <span className="ui-badge ui-badge-error">● Error</span>
                </div>
              </div>

              <div>
                <div className="comp-label mb-3!">Form Elements</div>

                <div className="flex gap-3 flex-col">
                  <input
                    placeholder="Text input with focus state"
                    className="ui-input max-w-[320px]"
                  />

                  <input
                    placeholder="Search..."
                    className="ui-input max-w-[320px] pl-9! bg-no-repeat! bg-position-[12px_center]!"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,<svg width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 16 16\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'><circle cx=\\'6.5\\' cy=\\'6.5\\' r=\\'4\\' stroke=\\'%236b6b8a\\' stroke-width=\\'1.2\\'/%3E%3Cpath d=\\'M11 11l2.5 2.5\\' stroke=\\'%236b6b8a\\' stroke-width=\\'1.2\\' stroke-linecap=\\'round\\'/%3E%3C/svg%3E')",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="comp-label mb-3!">
                  Design Tokens (CSS Custom Properties)
                </div>

                <div className="bg-(--ink) radius-(--r-sm) p-4 font-[monospace] text-[12px] [&_span]:leading-2 text-white/60">
                  <div>
                    <span className="text-[#c9a84c]">
                      --color-brand-primary
                    </span>
                    : <span className="text-[#7dd3fc]">#5B45F5</span>;
                  </div>

                  <div>
                    <span className="text-[#c9a84c]">
                      --color-surface-primary
                    </span>
                    : <span className="text-[#7dd3fc]">#F8F7F5</span>;
                  </div>

                  <div>
                    <span className="text-[#c9a84c]">--spacing-unit</span>:{" "}
                    <span className="text-[#7dd3fc]">4px</span>;
                  </div>

                  <div>
                    <span className="text-[#c9a84c]">--radius-component</span>:{" "}
                    <span className="text-[#7dd3fc]">12px</span>;
                  </div>

                  <div>
                    <span className="text-[#c9a84c]">--font-display</span>:{" "}
                    <span className="text-[#7dd3fc]">
                      &apos;DM Serif Display&apos;
                    </span>
                    ;
                  </div>

                  <div>
                    <span className="text-[#c9a84c]">--motion-spring</span>:{" "}
                    <span className="text-[#7dd3fc]">
                      cubic-bezier(0.32, 0.72, 0, 1)
                    </span>
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ACCESSIBILITY --> */}
          <div>
            <div className="section-eyebrow">Accessibility Standards</div>

            <h3 className="[font-family:var(--serif)] text-[28px] tracking-[0.02em] mb-4! text-(--ink)">
              WCAG 2.1 AA <em>compliant</em>
            </h3>

            <p className="text-[14px] leading-[1.7] text-(--muted) mb-7!">
              Every color combination in our system has been tested for
              contrast. We target WCAG 2.1 AA minimum and AAA where possible.
              Accessibility is built in, not bolted on.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
              <div className="a11y-card p-6 sm:p-7">
                <div className="a11y-ratio">14.7:1</div>

                <div className="a11y-pass">✓ AAA Pass</div>

                <div className="contrast-demo">
                  <div className="contrast-row bg-[#0a0a0f] text-white">
                    White on Deep Ink
                  </div>
                </div>

                <div className="a11y-label">
                  Primary text on dark backgrounds
                </div>
              </div>

              <div className="a11y-card p-6 sm:p-7">
                <div className="a11y-ratio">4.8:1</div>

                <div className="a11y-pass">✓ AA Pass</div>

                <div className="contrast-demo">
                  <div className="contrast-row bg-[#5b45f5] text-white">
                    White on Brand Violet
                  </div>
                </div>

                <div className="a11y-label">
                  CTA buttons and interactive elements
                </div>
              </div>

              <div className="a11y-card p-6 sm:p-7">
                <div className="a11y-ratio">7.2:1</div>

                <div className="a11y-pass">✓ AAA Pass</div>

                <div className="contrast-demo">
                  <div className="contrast-row bg-[#f8f7f5] text-[#0a0a0f]">
                    Ink on Warm Surface
                  </div>
                </div>

                <div className="a11y-label">
                  Body text on primary background
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
