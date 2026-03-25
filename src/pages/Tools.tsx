import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Search, DollarSign, Hammer, Settings,
  Phone, Handshake, Brain, Zap, Check,
} from "lucide-react";

const tools = [
  {
    id: "dealforge",
    icons: [Search, DollarSign],
    name: "DealForge",
    tagline: "Find profitable deals in seconds",
    description:
      "Analyze any rental arbitrage deal instantly with Derek's proprietary scoring algorithm. The Chrome extension evaluates properties while you browse Zillow, Apartments.com, or Craigslist—giving you instant profit projections before you even pick up the phone.",
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
      "AI website builder creates your direct booking site in minutes. Plus business setup automation—LLC guides, banking, credit strategy—so you go from lease signed to live listing in record time.",
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
    id: "bellows",
    icons: [Brain, Zap],
    name: "The Bellows",
    tagline: "Your AI operating partner",
    description:
      "Not a dashboard you log into—an agent that monitors your business 24/7. It learns how you allocate expenses, flags issues before they escalate, and automates guest communication so you can focus on growth.",
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
      <main className="pt-28 pb-20">
        <div className="section-container">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
              The STR Forge Toolkit
            </p>
            <h1 className="text-foreground mb-6">
              AI tools that run your{" "}
              <span className="text-muted-foreground">Airbnb business</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Use them yourself, or let us run them for you. Each tool works standalone or as part of our full-service management.
            </p>
          </motion.div>

          {/* Tool detail sections */}
          <div className="space-y-12 md:space-y-20">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                id={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`card-elevated p-6 md:p-10 scroll-mt-28 ${
                  tool.standout ? "border-primary/40 ring-1 ring-primary/20" : ""
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {tool.icons.map((Icon, i) => (
                        <Icon key={i} className="w-5 h-5 text-primary" />
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
                      <Button variant={tool.standout ? "cta" : "ctaOutline"} size="lg" className="group">
                        {tool.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {tool.features.map((f, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16 md:mt-20"
          >
            <h3 className="text-foreground mb-4">
              Want all 4 tools? Get the full toolkit.
            </h3>
            <p className="text-text-secondary mb-6 max-w-lg mx-auto">
              $97-197/mo gets you every tool plus the resource library and Discord community. Or let us run them for you starting at 2.5% of revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/get-started">
                <Button variant="cta" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="ctaOutline" size="lg">
                  See Pricing
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

export default Tools;
