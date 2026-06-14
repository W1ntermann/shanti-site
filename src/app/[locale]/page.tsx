"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { TokenUtilitySection } from "@/components/sections/TokenUtilitySection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { PhilosophySection } from "@/components/PhilosophySection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-body overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <TechnologySection />
      <TokenUtilitySection />
      <TokenomicsSection />
      <RoadmapSection />
      <TeamSection />
      <TestimonialsSection />
      <PartnersSection />
      <FaqSection />
      <CommunitySection />
      <WaitlistSection />
      <PhilosophySection />
      <Footer />
    </div>
  );
}