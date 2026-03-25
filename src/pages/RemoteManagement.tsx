import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, MessageCircle, Globe, Star, Calendar, FileText,
  Wrench, ShoppingCart, Shield, Phone, Sparkles,
} from "lucide-react";
import { useRef } from "react";

const heroFadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
};

const tenPercent = [
  { icon: MessageCircle, label: "Full guest communication (booking to checkout)" },
  { icon: Globe, label: "Multi-platform distribution (Airbnb, Vrbo, Booking.com)" },
  { icon: Star, label: "Review monitoring + AI responses" },
  { icon: Calendar, label: "Calendar sync + booking management" },
  { icon: FileText, label: "Monthly P&L reports" },
];

const fifteenPercentExtras = [
  { icon: Wrench, label: "Vendor coordination (cleaning, maintenance)" },
  { icon: ShoppingCart, label: "Supplies + restocking" },
  { icon: Shield, label: "Quality control" },
  { icon: Phone, label: "24/7 emergency response" },
];

const RemoteManagement = () => {
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
                  Remote Management
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-foreground mb-6"
              >
                We run your STR business.{" "}
                <span className="text-muted-foreground">You collect the profit.</span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                Full remote operations for arbitrage operators who want hands-off income.
                Guest communication, multi-platform distribution, review management,
                and optional vendor coordination.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ Two Tiers ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 hover:border-border/80 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">Remote Management</h3>
                <p className="text-3xl font-semibold text-foreground mb-1">10%</p>
                <p className="text-sm text-muted-foreground mb-6">of gross revenue</p>

                <ul className="space-y-3 mb-6">
                  {tenPercent.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    >
                      <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item.label}
                    </motion.li>
                  ))}
                </ul>

                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="ctaOutline" className="w-full group">
                      Book a Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20 relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <h3 className="text-lg font-semibold text-foreground">Full Management</h3>
                  <motion.span
                    className="text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Popular
                  </motion.span>
                </div>
                <p className="text-3xl font-semibold text-foreground mb-1">15%</p>
                <p className="text-sm text-muted-foreground mb-6">of gross revenue</p>

                <p className="text-sm text-text-secondary mb-4">Everything in 10%, plus:</p>
                <ul className="space-y-3 mb-6">
                  {fifteenPercentExtras.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4, duration: 0.4 }}
                    >
                      <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item.label}
                    </motion.li>
                  ))}
                </ul>

                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" className="w-full group">
                      Book a Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ How it works ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="max-w-3xl"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground mb-8">How it works</h2>

              <div className="space-y-6 text-text-secondary">
                {[
                  { num: "01", title: "Discovery call", desc: "We review your portfolio, goals, and current operations to make sure we're a good fit." },
                  { num: "02", title: "Onboarding", desc: "We connect to your platforms, set up communication workflows, and align on your standards." },
                  { num: "03", title: "Operations go live", desc: "We handle guest communication, bookings, reviews, and reporting. You get monthly P&L statements and proactive updates." },
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <div className="step-number shrink-0">{step.num}</div>
                    <div>
                      <p className="font-medium text-foreground mb-1">{step.title}</p>
                      <p className="text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RemoteManagement;
