import { Preloader } from "@/components/preloader";
import { GrainOverlay } from "@/components/grain-overlay";
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
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <Preloader />
      <GrainOverlay />
      <SiteHeader />
      <main className="mx-4 flex flex-1 flex-col md:mx-20">
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
