function TestimonialSection() {
  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30 bg-(--surface)">
      <div className="section-eyebrow reveal">Client Stories</div>

      <h2 className="section-title reveal reveal-delay-1">
        Trusted by teams that <em>care</em>
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="testimonial-card py-9 px-6 sm:px-8 reveal reveal-delay-1">
          <div className="testimonial-stars">★★★★★</div>

          <div className="testimonial-quote">&quot;</div>

          <p className="testimonial-text">
            LUMINIQ didn&apos;t just give us a design system — they gave us a
            competitive advantage. Our engineering velocity doubled after
            implementation.
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar bg-(--accent)">SC</div>

            <div>
              <div className="testimonial-name">Sarah Chen</div>

              <div className="testimonial-role">
                Chief Product Officer, Axiom Capital
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-card py-9 px-6 sm:px-8 reveal reveal-delay-2">
          <div className="testimonial-stars">★★★★★</div>

          <div className="testimonial-quote">&quot;</div>

          <p className="testimonial-text">
            The attention to every interaction, every token, every edge case —
            this is what premium design actually looks like. Extraordinary work.
          </p>

          <div className="testimonial-author">
            <div className="testimonial-avatar bg-[#0891b2]">MR</div>

            <div>
              <div className="testimonial-name">Marcus Rodriguez</div>

              <div className="testimonial-role">
                Head of Design, Meridian Health
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-card py-9 px-6 sm:px-8 reveal reveal-delay-3">
          <div className="testimonial-stars">★★★★★</div>

          <div className="testimonial-quote">&quot;</div>

          <p className="testimonial-text">
            Three months in and we&apos;re already seeing the ROI. The brand
            system they built for us became the foundation of our Series B
            raise.
          </p>

          <div className="testimonial-author">
            <div className="testimonial-avatar bg-[#059669]">AL</div>

            <div>
              <div className="testimonial-name">Amara Lawson</div>

              <div className="testimonial-role">Founder & CEO, Novus Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
