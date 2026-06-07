import HeroSection from "@/components/pages/case-study/hero-section";
import ProcessSection from "@/components/pages/case-study/process-section";

export default function CaseStudyPage() {
  return (
    <div className="page active" id="page-casestudy">
      <HeroSection />

      <ProcessSection />
    </div>
  );
}
