import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Upload, Bot, BarChart3, TrendingUp, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect your accounts",
    description:
      "Link your Airbnb, Vrbo, and bank accounts. STR Forge pulls in your revenue, expenses, and bookings automatically.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI learns your business",
    description:
      "Our AI agent studies your expense patterns, occupancy trends, and unit economics. It learns how you split costs across units and flags anything that looks off.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get real-time P&L by unit",
    description:
      "See exactly how much each unit is making (or losing) in real-time. No more end-of-month surprises or spreadsheet gymnastics.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize revenue (optional)",
    description:
      "Upgrade to Revenue Management and our AI handles dynamic pricing, direct bookings, extensions, and corporate housing placement.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Go hands-off (optional)",
    description:
      "Upgrade to Remote Management and we handle guest communication, listings, reviews, vendor coordination, and monthly reporting.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
              How It Works
            </p>
            <h1 className="text-foreground mb-6">
              From chaos to clarity{" "}
              <span className="text-muted-foreground">in about 15 minutes.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Connect your accounts, let the AI learn your business, and start 
              making decisions based on real numbers instead of gut feelings.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-5 p-5 md:p-6 rounded-lg border border-border/50 bg-card/50"
              >
                <div className="step-number shrink-0 bg-primary text-primary-foreground border-primary">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-foreground mb-4">Ready to see it in action?</h2>
            <p className="text-text-secondary mb-8">
              Start with a 14-day free trial or book a walkthrough with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/get-started">
                <Button variant="cta" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="ctaOutline" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
