import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, TrendingUp, Headphones } from "lucide-react";

const tiers = [
  {
    icon: Wrench,
    label: "Software Only",
    price: "$97-197/mo",
    tagline: "I want the tools, I'll handle operations myself.",
    bullets: [
      "AI expense tracking + per-unit P&L",
      "Deal analyzer + resource library",
      "Discord community",
    ],
    cta: "Start Free Trial",
    ctaLink: "/get-started",
    highlight: false,
  },
  {
    icon: TrendingUp,
    label: "Revenue Management",
    price: "2.5% of gross revenue",
    tagline: "Maximize my revenue, I'll handle the rest.",
    bullets: [
      "All Software features, plus:",
      "Dynamic pricing",
      "Direct bookings + extensions",
      "Corporate housing placement",
    ],
    cta: "Book a Demo",
    ctaLink: "/get-started",
    highlight: true,
  },
  {
    icon: Headphones,
    label: "Remote Management",
    price: "10-15% of gross revenue",
    tagline: "Run it all for me, I just want profit.",
    bullets: [
      "Full guest communication",
      "Multi-platform distribution",
      "Review management",
      "Vendor coordination (15% tier)",
    ],
    cta: "Book a Demo",
    ctaLink: "/get-started",
    highlight: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Three ways to work with STR Forge</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`card-elevated p-5 md:p-8 flex flex-col ${
                tier.highlight ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              <tier.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-1">{tier.label}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{tier.price}</p>
              <p className="text-sm text-muted-foreground mb-5 italic">"{tier.tagline}"</p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">·</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link to={tier.ctaLink}>
                <Button
                  variant={tier.highlight ? "cta" : "ctaOutline"}
                  className="w-full group"
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
