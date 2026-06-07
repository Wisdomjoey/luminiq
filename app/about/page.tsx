import CtaSection from "@/components/pages/about/cta-section";
import HeroSection from "@/components/pages/about/hero-section";
import InfoSection from "@/components/pages/about/info-section";
import TeamSection from "@/components/pages/about/team-section";

export default function AboutPage() {
  return (
    <div className="page active" id="page-about">
      <HeroSection />

      <InfoSection />

      <div className="divider"></div>

      <TeamSection />

      <CtaSection />
    </div>
  );
}
