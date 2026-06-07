function HeroSection() {
  return (
    <div className="about-hero px-4.5 sm:px-15 md:px-20 pt-40 pb-25">
      <div className="hero-orb hero-orb-1 opacity-40"></div>

      <div className="section-eyebrow text-(--accent-2)">Our Story</div>

      <h1 className="about-hero-title">
        We believe design is
        <br />
        the <em>most powerful</em>
        <br />
        business tool.
      </h1>

      <p className="text-[17px] text-white/50 max-w-135 leading-[1.7] mt-8!">
        Founded in 2016 by designers who were tired of watching great products
        fail because of incoherent design — LUMINIQ exists to make design
        systems a strategic asset, not an afterthought.
      </p>
    </div>
  );
}

export default HeroSection;
