"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FamilySafetySection from "@/components/FamilySafetySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import InstallSection from "@/components/InstallSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FacebookBanner from "@/components/FacebookBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FamilySafetySection />
      <TestimonialsSection />
      <PricingSection />
      <InstallSection />
      <FAQSection />
      <Footer />
      <FacebookBanner />
    </main>
  );
}
