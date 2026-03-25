import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Search, DollarSign, Hammer, Settings,
  Phone, Handshake, Brain, Zap, Check, Sparkles,
} from "lucide-react";

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

const tools = [
  {
    id: "dealforge",
    icons: [Search, DollarSign],
    name: "DealForge",
    tagline: "Find profitable deals in seconds",
    description:
      "Analyze any rental arbitrage deal instantly with Derek's proprietary scoring algorithm. The Chrome extension evaluates properties while you browse Zillow, Apartments.com, or Craigslist -- giving you instant profit projections before you even pick up the phone.",
    features: [
      "Instant profit projections & ROI calculations",
      "Market risk scoring (regulations, saturation, ADR trends)",
      "Chrome extension for one-click property analysis",
      "Save & compare deals in your pipeline",
      "Historical comp data for negotiation leverage",
    ],
    standalone: "$29/mo",
    cta: "Get DealForge",
    ctaLink: "/get-started",
  },
  {
    id: "foundry",
    icons: [Hammer, Settings],
    name: "The Foundry",
    tagline: "Launch units 10x faster",
    description:
      "AI website builder creates your direct booking site in minutes. Plus business setup automation -- LLC guides, banking, credit strategy -- so you go from lease signed to live listing in record time.",
    features: [
      "AI-generated direct booking websites",
      "Stripe payment processing integrated",
      "Business setup templates (LLC, operating agreement)",
      "Guest CRM built-in",
      "SEO-optimized pages for direct traffic",
    ],
    standalone: "$197 one-time",
    cta: "Build Your Site",
    ctaLink: "/get-started",
  },
  {
    id: "negotiator",
    icons: [Phone, Handshake],
    name: "The Negotiator",
    tagline: "AI cold calls landlords for you",
    description:
      "Upload your landlord list. AI makes calls, sends texts, schedules tours, and follows up automatically. Generates negotiation counter-offers based on Derek's 240-unit playbook. Nobody else has this.",
    features: [
      "Automated landlord outreach (voice + SMS)",
      "AI schedules property tours for you",
      "Deal negotiation frameworks & counter-offer scripts",
      "Follow-up automation until you get a response",
      "Call recording & transcript summaries",
    ],
    standalone: "$97/mo + $0.50/call",
    cta: "Start Outreach",
    ctaLink: "/get-started",
    standout: true,
  },
  {
    id: "jarvis",
    icons: [Brain, Zap],
    name: "Jarvis",
    tagline: "Your AI operating partner",
    description:
      "Not a dashboard you log into -- an agent that monitors your business 24/7. It learns how you allocate expenses, flags issues before they escalate, and automates guest communication so you can focus on growth.",
    features: [
      "AI expense allocation (learns your logic)",
      "Real-time per-unit P&L dashboards",
      "Review monitoring & proactive alerts",
      "Guest communication automation",
      "Anomaly detection (unusual charges, review dips)",
    ],
    standalone: "Included in full toolkit",
    cta: "See It In Action",
    ctaLink: "/get-started",
  },
];

const Tools = () => {
  const { hash } = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

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
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]"
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
                  The STR Forge Toolkit
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-foreground mb-6"
              >
                AI tools that run your{" "}
                <span className="text-muted-foreground">Airbnb business</span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="text-lg text-text-secondary max-w-2xl mx-auto"
              >
                Use them yourself, or let us run them for you. Each tool works standalone or as part of our full-service management.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ Tool detail sections ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="space-y-12 md:space-y-20">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  id={tool.id}
                  {...cardVariants}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`card-elevated p-6 md:p-10 scroll-mt-28 relative overflow-hidden ${
                    tool.standout ? "border-primary/40 ring-1 ring-primary/20" : ""
                  }`}
                >
                  {tool.standout && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {tool.icons.map((Icon, i) => (
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
                      <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">
                        {tool.name}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        {tool.tagline}
                      </h2>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {tool.description}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Standalone: <span className="text-foreground font-medium">{tool.standalone}</span>
                      </p>
                      <Link to={tool.ctaLink}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                          <Button variant={tool.standout ? "cta" : "ctaOutline"} size="lg" className="group">
                            {tool.cta}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </Link>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {tool.features.map((f, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-text-secondary flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                          >
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ Bottom CTA ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h3 className="text-foreground mb-4">
                Want all 4 tools? Get the full toolkit.
              </h3>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                $97-197/mo gets you every tool plus the resource library and Discord community. Or let us run them for you starting at 2.5% of revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" size="lg" className="group shadow-lg shadow-primary/20">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/pricing">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="ctaOutline" size="lg">
                      See Pricing
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

export default Tools;
