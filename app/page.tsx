import CTASection from "@/components/pages/home/cta-section";
import HeroSection from "@/components/pages/home/hero-section";
import MetricsSection from "@/components/pages/home/metrics-section";
import ProcessSection from "@/components/pages/home/process-section";
import ServicesSection from "@/components/pages/home/services-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import WorkSection from "@/components/pages/home/work-section";

export default function Home() {
  return (
    <div className="page active" id="page-home">
      <HeroSection />

      <MetricsSection />

      <ServicesSection />

      <WorkSection />

      <ProcessSection />

      <TestimonialSection />

      <CTASection />
    </div>
  );
}
