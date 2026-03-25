import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Upload, Bot, BarChart3, TrendingUp, Headphones, Sparkles } from "lucide-react";
import { useRef } from "react";

const heroFadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ═══════════ Hero ═══════════ */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[150px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="section-container relative z-10"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <motion.div initial="initial" animate="animate" variants={heroStagger} className="max-w-3xl">
              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  How It Works
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-foreground mb-6"
              >
                From chaos to clarity{" "}
                <span className="text-muted-foreground">in about 15 minutes.</span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                Connect your accounts, let the AI learn your business, and start
                making decisions based on real numbers instead of gut feelings.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ Steps ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="space-y-6 max-w-3xl mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-5 p-5 md:p-6 rounded-lg border border-border/50 bg-card/50 hover:border-border/80 transition-colors duration-300"
                >
                  <div className="step-number shrink-0 bg-primary text-primary-foreground border-primary">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      >
                        <step.icon className="w-4 h-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-foreground mb-4">Ready to see it in action?</h2>
              <p className="text-text-secondary mb-8">
                Start with a 14-day free trial or book a walkthrough with our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" size="xl" className="group shadow-lg shadow-primary/20">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="ctaOutline" size="lg">
                      Book a Demo
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
