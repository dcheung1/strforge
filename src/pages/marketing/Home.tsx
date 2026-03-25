import { InfiniteMovingCards } from "@/components/aceternity/InfiniteMovingCards";
import AnimatedToolsGrid from "@/components/landing/AnimatedToolsGrid";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Search, DollarSign, Phone, Handshake,
  Brain, Zap, Hammer, Settings, Check, Sparkles,
} from "lucide-react";

/* ─── Animation variants ─── */
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

/* ─── Data ─── */
const testimonials = [
  {
    quote: "STR Forge saved me 20 hours a month on expense tracking alone. The AI knows my allocation patterns better than I do.",
    name: "Sarah Chen",
    title: "12 units, Austin TX",
  },
  {
    quote: "The Negotiator closed 3 deals in 2 weeks. I hate cold calling—this AI does it for me.",
    name: "Marcus Rodriguez",
    title: "8 units, Denver CO",
  },
  {
    quote: "I went from spreadsheet chaos to knowing exactly which units are profitable. Game changer.",
    name: "Jennifer Park",
    title: "24 units, Dallas TX",
  },
  {
    quote: "Derek's AI caught a $2K expense leak I would have missed. Paid for itself in the first month.",
    name: "Kevin Thompson",
    title: "18 units, Nashville TN",
  },
];

const toolItems = [
  {
    title: "DealForge",
    description: "Analyze any rental arbitrage deal instantly with proprietary scoring. Chrome extension evaluates properties while you browse.",
    icons: [Search, DollarSign],
    label: "Deal Analysis",
  },
  {
    title: "The Negotiator",
    description: "AI makes calls, sends texts, schedules tours, and follows up automatically. Nobody else has this.",
    icons: [Phone, Handshake],
    label: "AI Outreach",
  },
  {
    title: "The Bellows",
    description: "An agent that monitors your business 24/7. Learns expense allocation, flags issues, automates guest comms.",
    icons: [Brain, Zap],
    label: "Operations AI",
  },
  {
    title: "The Foundry",
    description: "AI website builder creates your direct booking site in minutes. Plus business setup automation.",
    icons: [Hammer, Settings],
    label: "Launch Tools",
  },
];

const serviceTiers = [
  "All 4 tools (DealForge, Negotiator, Bellows, Foundry)",
  "Revenue optimization (2.5% of revenue)",
  "Remote management (10-15% of revenue)",
];

/* ─── Animated Tool Card Header ─── */
const ToolCardHeader = ({ icons }: { icons: typeof Search[] }) => (
  <motion.div
    className="flex items-center gap-3 p-6 rounded-xl bg-secondary/30 border border-border/30 min-h-[6rem] relative overflow-hidden group"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {icons.map((Icon, i) => (
      <motion.div
        key={i}
        initial={{ rotate: -10, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-primary relative z-10" />
      </motion.div>
    ))}
  </motion.div>
);

export default function MarketingHome() {
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
        <section ref={heroRef} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          {/* Animated ambient glows */}
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
              {/* Badge */}
              <motion.div
                variants={heroFadeUp}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI-Powered Platform
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-foreground leading-[1.1] text-4xl md:text-5xl lg:text-7xl mb-6 font-bold"
              >
                Your AI Operating Partner
                <br />
                <span className="text-muted-foreground font-semibold">
                  to Start and Scale your entire Airbnb business.
                </span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12"
              >
                Find &amp; analyze deals, cold call and negotiate, launch listings, and automate operations and profit tracking. All powered by AI agents.
              </motion.p>

              <motion.div
                variants={heroFadeUp}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" size="xl" className="group w-full sm:w-auto shadow-lg shadow-primary/20">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                      Book a Demo
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ Social Proof ═══════════ */}
        <motion.section
          className="py-8 border-y border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="section-container flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Trusted by operators managing</span>
            <motion.span
              className="text-sm font-semibold text-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              5,000+ units
            </motion.span>
          </div>
        </motion.section>

        <AnimatedToolsGrid />

        {/* ═══════════ Choose Your Path ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          {/* Section glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <motion.h2
              {...sectionFadeUp}
              className="text-foreground text-center mb-14"
            >
              Choose Your Path
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Software DIY */}
              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 flex flex-col hover:border-border/80 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">Software (DIY)</h3>
                <p className="text-sm text-muted-foreground italic mb-6">
                  "I want the tools, I'll run my business myself"
                </p>
                <ul className="space-y-3 mb-6 flex-1">
                  {[
                    "All 4 tools (DealForge, Negotiator, Bellows, Foundry)",
                    "Resource library + Discord community",
                    "14-day free trial",
                  ].map((f, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
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
                <p className="text-2xl font-semibold text-foreground mb-4">$97-197/mo</p>
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="cta" className="w-full group">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Services */}
              <motion.div
                {...cardVariants}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20 flex flex-col relative overflow-hidden"
              >
                {/* Glow effect on featured card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <h3 className="text-xl font-semibold text-foreground">Services (Done-With-You)</h3>
                  <motion.span
                    className="text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Popular
                  </motion.span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-6">
                  "Use the tools FOR me, maximize my profit"
                </p>
                <ul className="space-y-3 mb-6 flex-1">
                  {serviceTiers.map((t, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4, duration: 0.4 }}
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {t}
                    </motion.li>
                  ))}
                </ul>
                <p className="text-2xl font-semibold text-foreground mb-4">2.5-15% of revenue</p>
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

        {/* ═══════════ Testimonials ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container text-center mb-10">
            <motion.h2 {...sectionFadeUp} className="text-foreground mb-4">
              Built by an operator who's been there
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary max-w-xl mx-auto"
            >
              Derek Cheung scaled to 240 units, saw the crash coming, and built the tools he wishes existed.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
          </motion.div>
        </section>

        {/* ═══════════ Final CTA ═══════════ */}
        <section className="relative section-spacing border-t border-border/50 overflow-hidden">
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="section-container relative z-10 text-center">
            <motion.h2 {...sectionFadeUp} className="text-foreground mb-4">
              Start with software. Scale to full management.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary max-w-lg mx-auto mb-10"
            >
              Most operators start with our AI tools and upgrade to remote management once they see the results. No risk, no upfront cost.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/get-started">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="cta" size="xl" className="group w-full sm:w-auto shadow-lg shadow-primary/20">
                    Start 14-Day Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/get-started">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                    Book a Demo Call
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
