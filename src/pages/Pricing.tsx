import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Check, Wrench, TrendingUp, Headphones, Crown,
  Search, DollarSign, Phone, Handshake, Hammer, Settings, Sparkles,
} from "lucide-react";
import { useRef } from "react";

/* ─── Animation variants (matching Home) ─── */
const heroFadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const sectionFadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
};

const Pricing = () => {
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
          {/* Ambient glows */}
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
            className="section-container relative z-10 text-center"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <motion.div initial="initial" animate="animate" variants={heroStagger}>
              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pricing
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-foreground mb-6"
              >
                Choose Your Path:{" "}
                <span className="text-muted-foreground">DIY or Done-With-You</span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="text-lg text-text-secondary max-w-2xl mx-auto"
              >
                The tools work standalone OR as part of our service. Software users run the tools. Service clients: we run them for you.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ Two-column: DIY vs Services ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {/* LEFT: Software (DIY) */}
              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 flex flex-col hover:border-border/80 transition-colors duration-300"
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <Wrench className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Software (DIY)</h3>
                <p className="text-sm text-muted-foreground italic mb-5">
                  "I want the tools, I'll run my business myself"
                </p>

                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  All 4 tools included:
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    "DealForge (deal analyzer + Chrome extension)",
                    "The Foundry (website builder + business setup)",
                    "The Negotiator (AI cold caller)",
                    "The Bellows (operations AI + expense tracking)",
                    "Resource library + Discord community",
                  ].map((f, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    >
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-3xl font-semibold text-foreground">$97-197/mo</span>
                  <p className="text-xs text-muted-foreground mt-1">Based on portfolio size</p>
                </div>

                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" className="w-full group">
                      Start 14-Day Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* RIGHT: Services (Done-With-You) */}
              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20 flex flex-col relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-2 mb-3 relative z-10"
                >
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <motion.span
                    className="text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Popular
                  </motion.span>
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-1 relative z-10">Services (Done-With-You)</h3>
                <p className="text-sm text-muted-foreground italic mb-5">
                  "Use the tools FOR me, maximize my profit"
                </p>

                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  All 4 tools + we run them for you:
                </p>
                <div className="space-y-4 flex-1 mb-6">
                  {[
                    {
                      icon: TrendingUp,
                      name: "Revenue Management",
                      price: "2.5% of revenue",
                      desc: "We optimize pricing, direct bookings, extensions",
                    },
                    {
                      icon: Headphones,
                      name: "Remote Management",
                      price: "10% of revenue",
                      desc: "We handle ALL guest communication + listings",
                    },
                    {
                      icon: Crown,
                      name: "Full Management",
                      price: "15% of revenue",
                      desc: "We coordinate vendors + 24/7 operations",
                    },
                  ].map((tier, i) => (
                    <motion.div
                      key={i}
                      className="bg-secondary/40 rounded-lg p-4 border border-border/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.4, duration: 0.5 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <tier.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{tier.name}</span>
                      </div>
                      <p className="text-primary text-sm font-medium mb-1">{tier.price}</p>
                      <p className="text-xs text-muted-foreground">{tier.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" className="w-full group">
                      Book a Demo Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ Standalone Tools ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.div {...sectionFadeUp} className="mb-10">
              <div className="accent-line mb-6" />
              <h2 className="text-foreground mb-3">Just want one tool? No problem.</h2>
              <p className="text-text-secondary text-sm mb-8">
                Each tool is available individually. Start small, expand when ready.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icons: [Search, DollarSign],
                  name: "DealForge Only",
                  price: "$29/mo",
                  desc: "Chrome extension + deal analyzer",
                  cta: "Get DealForge",
                },
                {
                  icons: [Phone, Handshake],
                  name: "The Negotiator Only",
                  price: "$97/mo + $0.50/call",
                  desc: "AI cold caller + SMS outreach",
                  cta: "Get The Negotiator",
                },
                {
                  icons: [Hammer, Settings],
                  name: "Website Builder Only",
                  price: "$197 one-time",
                  desc: "Direct booking site + payment processing",
                  cta: "Build Your Site",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  {...cardVariants}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="card-elevated p-5 md:p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {item.icons.map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-2xl font-semibold text-foreground mb-2">{item.price}</p>
                  <p className="text-sm text-muted-foreground mb-5 flex-1">{item.desc}</p>
                  <Link to="/get-started">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button variant="ctaOutline" className="w-full group">
                        {item.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-muted-foreground text-center mt-10"
            >
              14-day free trial on Software tier. No credit card required. Cancel anytime.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
