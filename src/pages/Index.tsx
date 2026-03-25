import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ToolkitSection from "@/components/landing/ToolkitSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import CredibilitySection from "@/components/landing/CredibilitySection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ToolkitSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ComparisonSection />
        <CredibilitySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
