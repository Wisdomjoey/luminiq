import BrandSection from "@/components/pages/brand/brand-section";
import HandoffSection from "@/components/pages/brand/handoff-section";
import HeroSection from "@/components/pages/brand/hero-section";

export default function BrandPage() {
  return (
    <div className="page active" id="page-brand">
      <HeroSection />

      <BrandSection />

      <HandoffSection />
    </div>
  );
}
