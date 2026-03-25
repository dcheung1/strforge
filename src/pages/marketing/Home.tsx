import { BentoGrid, BentoGridItem } from "@/components/aceternity/BentoGrid";
import { InfiniteMovingCards } from "@/components/aceternity/InfiniteMovingCards";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Search, DollarSign, Phone, Handshake,
  Brain, Zap, Hammer, Settings, Check,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

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
    header: (
      <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 min-h-[6rem]">
        <Search className="w-8 h-8 text-primary" />
        <DollarSign className="w-8 h-8 text-primary" />
      </div>
    ),
    icon: <span className="text-xs text-primary font-semibold uppercase tracking-wider">Deal Analysis</span>,
  },
  {
    title: "The Negotiator",
    description: "AI makes calls, sends texts, schedules tours, and follows up automatically. Nobody else has this.",
    header: (
      <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 min-h-[6rem]">
        <Phone className="w-8 h-8 text-primary" />
        <Handshake className="w-8 h-8 text-primary" />
      </div>
    ),
    icon: <span className="text-xs text-primary font-semibold uppercase tracking-wider">AI Outreach</span>,
  },
  {
    title: "The Bellows",
    description: "An agent that monitors your business 24/7. Learns expense allocation, flags issues, automates guest comms.",
    header: (
      <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 min-h-[6rem]">
        <Brain className="w-8 h-8 text-primary" />
        <Zap className="w-8 h-8 text-primary" />
      </div>
    ),
    icon: <span className="text-xs text-primary font-semibold uppercase tracking-wider">Operations AI</span>,
  },
  {
    title: "The Foundry",
    description: "AI website builder creates your direct booking site in minutes. Plus business setup automation.",
    header: (
      <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 min-h-[6rem]">
        <Hammer className="w-8 h-8 text-primary" />
        <Settings className="w-8 h-8 text-primary" />
      </div>
    ),
    icon: <span className="text-xs text-primary font-semibold uppercase tracking-wider">Launch Tools</span>,
  },
];

const serviceTiers = [
  { label: "All 4 tools (DealForge, Negotiator, Bellows, Foundry)" },
  { label: "Revenue optimization (2.5% of revenue)" },
  { label: "Remote management (10-15% of revenue)" },
];

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          </div>

          <motion.div
            className="section-container relative z-10 text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="text-foreground leading-tight text-3xl md:text-5xl lg:text-6xl mb-6"
            >
              Your AI Operating Partner
              <br />
              <span className="text-muted-foreground">
                to Start and Scale your entire Airbnb business.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            >
              Find &amp; analyze deals, cold call and negotiate, launch listings, and automate operations and profit tracking. All powered by AI agents.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button variant="cta" size="xl" className="group w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Social Proof ─── */}
        <section className="py-8 border-y border-border/50">
          <div className="section-container flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Trusted by operators managing</span>
            <span className="text-sm font-semibold text-foreground">5,000+ units</span>
          </div>
        </section>

        {/* ─── Tools Bento Grid ─── */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-foreground mb-4">
                AI tools that run your{" "}
                <span className="text-muted-foreground">Airbnb business</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Use them yourself, or let us run them for you.
              </p>
            </motion.div>

            <BentoGrid className="max-w-5xl mx-auto">
              {toolItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>

            <div className="text-center mt-10">
              <Link to="/tools">
                <Button variant="ctaOutline" size="lg" className="group">
                  Explore All Tools
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Choose Your Path ─── */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground text-center mb-12"
            >
              Choose Your Path
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Software DIY */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-elevated p-6 md:p-8 flex flex-col"
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
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-semibold text-foreground mb-4">$97-197/mo</p>
                <Link to="/get-started">
                  <Button variant="cta" className="w-full group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Services (Done-With-You)</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded">
                    Popular
                  </span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-6">
                  "Use the tools FOR me, maximize my profit"
                </p>
                <ul className="space-y-3 mb-6 flex-1">
                  {serviceTiers.map((t, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {t.label}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-semibold text-foreground mb-4">2.5-15% of revenue</p>
                <Link to="/get-started">
                  <Button variant="cta" className="w-full group">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-4"
            >
              Built by an operator who's been there
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary max-w-xl mx-auto"
            >
              Derek Cheung scaled to 240 units, saw the crash coming, and built the tools he wishes existed.
            </motion.p>
          </div>
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </section>

        {/* ─── Final CTA ─── */}
        <section className="relative section-spacing border-t border-border/50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          </div>

          <div className="section-container relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-4"
            >
              Start with software. Scale to full management.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary max-w-lg mx-auto mb-8"
            >
              Most operators start with our AI tools and upgrade to remote management once they see the results. No risk, no upfront cost.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/get-started">
                <Button variant="cta" size="xl" className="group w-full sm:w-auto">
                  Start 14-Day Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                  Book a Demo Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
