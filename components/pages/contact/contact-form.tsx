function ContactForm() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 pt-10 pb-20 md:py-30">
      <div className="contact-layout grid lg:grid-cols-2">
        <div className="contact-form-wrap px-6 sm:px-8 md:px-12 py-12">
          <div className="mb-8">
            <div className="text-[18px] font-medium text-(--ink) mb-1!">
              Project Inquiry
            </div>

            <div className="text-[13px] text-(--muted-2) mb-4!">
              Typical response time: 24–48 hours
            </div>
          </div>

          <div className="form-row grid sm:grid-cols-2">
            <div className="form-group">
              <label className="form-label">First Name</label>

              <input className="form-input" type="text" placeholder="Elena" />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>

              <input className="form-input" type="text" placeholder="Vasquez" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Company</label>

            <input
              className="form-input"
              type="text"
              placeholder="Axiom Capital"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>

            <input
              className="form-input"
              type="email"
              placeholder="elena@axiomcapital.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Service</label>

            <select className="form-input form-select">
              <option>Brand Identity + Strategy</option>
              <option>Design System Build</option>
              <option>Marketing Website</option>
              <option>Full Engagement</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Budget</label>

            <div className="budget-pills" id="budgetPills">
              <button className="budget-pill">$25K – $50K</button>
              <button className="budget-pill">$50K – $100K</button>
              <button className="budget-pill active">$100K – $250K</button>
              <button className="budget-pill">$250K+</button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Timeline</label>

            <select className="form-input form-select">
              <option>ASAP (within 2 weeks)</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Tell us about your project</label>

            <textarea
              className="form-input"
              rows={4}
              placeholder="Describe your goals, current challenges, and what success looks like for you..."
            ></textarea>
          </div>

          <button type="submit" className="form-submit">
            Send Project Brief
            <span className="size-7 bg-white/15 rounded-full flex items-center justify-center text-[14px]">
              ↗
            </span>
          </button>
        </div>

        <div>
          <div className="contact-info">
            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] text-(--muted-2) mb-6!">
                Contact Information
              </div>

              <div className="contact-detail">
                <div className="contact-icon">✉</div>

                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-val">hello@luminiq.studio</div>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">◎</div>

              <div>
                <div className="contact-label">Office</div>
                <div className="contact-val">Shoreditch, London</div>
                <div className="text-[13px] text-(--muted-2) mt-0.5!">
                  Also serving NYC, SF, and remote
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">◷</div>

              <div>
                <div className="contact-label">Hours</div>
                <div className="contact-val">Mon – Fri, 9AM – 6PM GMT</div>
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="text-[13px] font-medium uppercase tracking-[0.12em] text-(--muted-2) mb-2!">
              Frequently Asked
            </div>

            <div className="faq-item">
              <div className="faq-q">
                How long does a typical engagement take?{" "}
                <span className="text-[18px;font-weight:300;text-(--muted-2)">
                  +
                </span>
              </div>

              <div className="faq-a">
                Brand identity projects run 8–12 weeks. Design systems take
                12–20 weeks. Full engagements covering brand + system + website
                typically run 18–24 weeks.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                Do you work with early-stage startups?{" "}
                <span className="text-[18px;font-weight:300;text-(--muted-2)">
                  +
                </span>
              </div>

              <div className="faq-a">
                Yes. We work with companies from seed stage through IPO. For
                earlier stage clients, we have a focused brand foundation
                package that scales with you.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                What does the handoff process look like?{" "}
                <span className="text-[18px;font-weight:300;text-(--muted-2)">
                  +
                </span>
              </div>

              <div className="faq-a">
                Every engagement ends with a complete handoff package: Figma
                libraries, design tokens, component documentation, brand
                guidelines, and a team onboarding session.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                Do you offer ongoing retainer support?{" "}
                <span className="text-[18px;font-weight:300;text-(--muted-2)">
                  +
                </span>
              </div>

              <div className="faq-a">
                We do. Many of our clients retain us as a strategic design
                partner for ongoing system maintenance, new feature design, and
                brand governance.
              </div>
            </div>
          </div>

          <div className="mt-10! p-6 bg-(--surface-2) rounded-(--r-md) border-[0.5px] border-(--border)">
            <div className="flex items-center gap-2.5 mb-2!">
              <div className="size-2 rounded-full bg-[#22c55e] animate-[pulse_2s_ease-in-out_infinite]"></div>

              <span className="text-[12px] font-medium text-(--ink)">
                Currently accepting Q4 2025 projects
              </span>
            </div>

            <div className="text-[13px] text-(--muted) leading-[1.6]">
              We limit active engagements to ensure quality. 2 slots remaining
              this quarter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
