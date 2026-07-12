import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TrustedBySection } from "@/components/trusted-by-section";
import { WhatYouGetSection } from "@/components/what-you-get-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <TrustedBySection />
        <WhatYouGetSection />
        <ProcessSection />
        <ProjectsSection />
        <PricingSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
