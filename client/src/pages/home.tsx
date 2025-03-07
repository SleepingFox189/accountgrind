import HeroSection from "@/components/hero-section";
import ServiceCards from "@/components/service-cards";
import BenefitsSection from "@/components/benefits-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ServiceCards />
      <BenefitsSection />
    </div>
  );
}
