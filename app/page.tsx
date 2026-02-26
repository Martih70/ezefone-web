"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleDownloadClick = () => {
    window.location.href = '/ezefone.apk';
  };

  return (
    <main>
      <Navbar onDownloadClick={handleDownloadClick} />
      <HeroSection onDownloadClick={handleDownloadClick} />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection onDownloadClick={handleDownloadClick} />
      <FAQSection />
      <Footer />
    </main>
  );
}
