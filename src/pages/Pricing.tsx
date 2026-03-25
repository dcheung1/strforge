import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight, Check, Wrench, TrendingUp, Headphones, Crown,
  Search, DollarSign, Phone, Handshake, Hammer, Settings,
} from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="section-container">
          {/* Header */}
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
              Choose Your Path:{" "}
              <span className="text-muted-foreground">DIY or Done-With-You</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The tools work standalone OR as part of our service. Software users run the tools. Service clients: we run them for you.
            </p>
          </motion.div>

          {/* Two-column: DIY vs Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* LEFT: Software (DIY) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
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
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <span className="text-3xl font-semibold text-foreground">$97-197/mo</span>
                <p className="text-xs text-muted-foreground mt-1">Based on portfolio size</p>
              </div>

              <Link to="/get-started">
                <Button variant="cta" className="w-full group">
                  Start 14-Day Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* RIGHT: Services (Done-With-You) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Services (Done-With-You)</h3>
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
                  <div key={i} className="bg-secondary/40 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-1">
                      <tier.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{tier.name}</span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-1">{tier.price}</p>
                    <p className="text-xs text-muted-foreground">{tier.desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/get-started">
                <Button variant="cta" className="w-full group">
                  Book a Demo Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Standalone options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-elevated p-5 md:p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} className="w-5 h-5 text-primary" />
                  ))}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-2xl font-semibold text-foreground mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{item.desc}</p>
                <Link to="/get-started">
                  <Button variant="ctaOutline" className="w-full group">
                    {item.cta}
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
