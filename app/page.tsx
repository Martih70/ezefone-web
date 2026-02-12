"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
      <Toast message="Opening Google Play Store..." isVisible={showToast} />
    </main>
  );
}
