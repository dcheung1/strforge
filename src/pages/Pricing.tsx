import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Check, Wrench, TrendingUp, Headphones, Crown } from "lucide-react";

const tiers = [
  {
    icon: Wrench,
    name: "Software",
    price: "$97-197/mo",
    priceNote: "Flat rate",
    description: "AI tools for DIY operators",
    forLabel: "1-5 units, hands-on operators",
    features: [
      "Expense tracking + AI allocation",
      "Per-unit P&L dashboard",
      "Deal analyzer (The Crucible)",
      "Resource library + Discord community",
    ],
    cta: "Start Free Trial",
    ctaLink: "/get-started",
    highlight: false,
  },
  {
    icon: TrendingUp,
    name: "Revenue Management",
    price: "2.5%",
    priceNote: "of gross revenue",
    description: "AI + active revenue optimization",
    forLabel: "5-15 units, want revenue growth",
    features: [
      "Everything in Software, plus:",
      "Dynamic pricing AI",
      "Direct booking website",
      "Extension + repeat guest automation",
      "Corporate housing placement",
    ],
    cta: "Book a Demo",
    ctaLink: "/get-started",
    highlight: true,
  },
  {
    icon: Headphones,
    name: "Remote Management",
    price: "10%",
    priceNote: "of gross revenue",
    description: "Full remote property management",
    forLabel: "10-30 units, want hands-off operations",
    features: [
      "Everything in Revenue Management, plus:",
      "Full guest communication (booking to checkout)",
      "Multi-platform distribution (Airbnb, Vrbo, Booking.com)",
      "Review monitoring + AI responses",
      "Calendar sync + booking management",
      "Monthly P&L reports",
    ],
    cta: "Book a Demo",
    ctaLink: "/get-started",
    highlight: false,
  },
  {
    icon: Crown,
    name: "Full Management",
    price: "15%",
    priceNote: "of gross revenue",
    description: "White-glove everything",
    forLabel: "30+ units, want complete delegation",
    features: [
      "Everything in Remote Management, plus:",
      "Vendor coordination (cleaning, maintenance)",
      "Supplies + restocking",
      "Quality control",
      "24/7 emergency response",
    ],
    cta: "Book a Demo",
    ctaLink: "/get-started",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
              Pricing
            </p>
            <h1 className="text-foreground mb-6">
              Start with software.{" "}
              <span className="text-muted-foreground">Scale to full management.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every tier builds on the last. Start where you are, upgrade when you're ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-elevated p-5 md:p-7 flex flex-col ${
                  tier.highlight ? "border-primary/40 ring-1 ring-primary/20" : ""
                }`}
              >
                <tier.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-semibold text-foreground">{tier.price}</span>
                  <p className="text-xs text-muted-foreground mt-1">{tier.priceNote}</p>
                </div>

                <p className="text-xs text-primary font-medium mb-5 uppercase tracking-wide">
                  {tier.forLabel}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {f}
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
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
