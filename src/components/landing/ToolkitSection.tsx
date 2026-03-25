import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, DollarSign, Hammer, Settings, Phone, Handshake, Brain, Zap } from "lucide-react";

const tools = [
  {
    icons: [Search, DollarSign],
    name: "DealForge",
    headline: "Find profitable deals in seconds",
    description:
      "Analyze any rental arbitrage deal instantly with Derek's proprietary scoring algorithm. Chrome extension evaluates properties while you browse Zillow, Apartments.com, or Craigslist.",
    features: [
      "Instant profit projections & ROI",
      "Market risk scoring (regulations, saturation, ADR trends)",
      "Chrome extension for one-click analysis",
      "Save deals to your pipeline",
    ],
    cta: "Try DealForge",
    ctaLink: "/tools#dealforge",
  },
  {
    icons: [Hammer, Settings],
    name: "The Foundry",
    headline: "Launch units 10x faster",
    description:
      "AI website builder creates your direct booking site in minutes. Plus business setup automation—LLC guides, banking, credit strategy—so you go from lease to launch in record time.",
    features: [
      "AI-generated direct booking websites",
      "Stripe payment processing integrated",
      "Business setup templates (LLC, operating agreement)",
      "Guest CRM built-in",
    ],
    cta: "Build Your Site",
    ctaLink: "/tools#foundry",
  },
  {
    icons: [Phone, Handshake],
    name: "The Negotiator",
    headline: "AI cold calls landlords for you",
    description:
      "Upload your landlord list. AI makes calls, sends texts, schedules tours, and follows up automatically. Generates negotiation counter-offers based on Derek's 240-unit playbook.",
    features: [
      "Automated landlord outreach (voice + SMS)",
      "AI schedules property tours",
      "Deal negotiation frameworks",
      "Follow-up automation",
    ],
    cta: "Start Outreach",
    ctaLink: "/tools#negotiator",
    standout: true,
  },
  {
    icons: [Brain, Zap],
    name: "Jarvis",
    headline: "Your AI operating partner",
    description:
      "Not a dashboard you log into—an agent that monitors your business 24/7. Learns how you allocate expenses, flags issues before they escalate, automates guest communication.",
    features: [
      "AI expense allocation (learns your logic)",
      "Real-time per-unit P&L",
      "Review monitoring & proactive alerts",
      "Guest communication automation",
    ],
    cta: "See It In Action",
    ctaLink: "/tools#jarvis",
  },
];

const ToolkitSection = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="accent-line mb-6" />
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
            The STR Forge Toolkit
          </p>
          <h2 className="text-foreground mb-4">
            AI tools that run your Airbnb business
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-xl">
            Use them yourself, or let us run them for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-elevated p-6 md:p-8 flex flex-col ${
                tool.standout ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                {tool.icons.map((Icon, i) => (
                  <Icon key={i} className="w-5 h-5 text-primary" />
                ))}
              </div>

              <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">
                {tool.name}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {tool.headline}
              </h3>
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                {tool.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tool.features.map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 shrink-0">·</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to={tool.ctaLink}>
                <Button
                  variant={tool.standout ? "cta" : "ctaOutline"}
                  className="w-full group"
                >
                  {tool.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          Start with DealForge ($29/mo), upgrade to the full toolkit ($97/mo), scale to full management (10-15%).
        </motion.p>
      </div>
    </section>
  );
};

export default ToolkitSection;
