"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlayStoreSection from "@/components/PlayStoreSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import FamilySafetySection from "@/components/FamilySafetySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FacebookBanner from "@/components/FacebookBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PlayStoreSection />
      <ComparisonSection />
      <FeaturesSection />
      <FamilySafetySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <FacebookBanner />
    </main>
  );
}
