import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyThisModelSection from "@/components/landing/WhyThisModelSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import QualificationSection from "@/components/landing/QualificationSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <WhyThisModelSection />
        <TestimonialsSection />
        <QualificationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
