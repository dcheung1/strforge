import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Star,
  Calendar,
  FileText,
  Wrench,
  ShoppingCart,
  Shield,
  Phone,
  Check,
} from "lucide-react";

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
            className="max-w-3xl mb-16"
          >
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
              Remote Management
            </p>
            <h1 className="text-foreground mb-6">
              We run your STR business.{" "}
              <span className="text-muted-foreground">You collect the profit.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Full remote operations for arbitrage operators who want hands-off income. 
              Guest communication, multi-platform distribution, review management, 
              and optional vendor coordination.
            </p>
          </motion.div>

          {/* Two Tiers */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">Remote Management</h3>
              <p className="text-3xl font-semibold text-foreground mb-1">10%</p>
              <p className="text-sm text-muted-foreground mb-6">of gross revenue</p>

              <ul className="space-y-3 mb-6">
                {tenPercent.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <Link to="/get-started">
                <Button variant="ctaOutline" className="w-full group">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-elevated p-6 md:p-8 border-primary/40 ring-1 ring-primary/20"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">Full Management</h3>
              <p className="text-3xl font-semibold text-foreground mb-1">15%</p>
              <p className="text-sm text-muted-foreground mb-6">of gross revenue</p>

              <p className="text-sm text-text-secondary mb-4">Everything in 10%, plus:</p>
              <ul className="space-y-3 mb-6">
                {fifteenPercentExtras.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <Link to="/get-started">
                <Button variant="cta" className="w-full group">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="accent-line mb-6" />
            <h2 className="text-foreground mb-8">How it works</h2>

            <div className="space-y-6 text-text-secondary">
              <div className="flex items-start gap-4">
                <div className="step-number shrink-0">01</div>
                <div>
                  <p className="font-medium text-foreground mb-1">Discovery call</p>
                  <p className="text-sm">We review your portfolio, goals, and current operations to make sure we're a good fit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="step-number shrink-0">02</div>
                <div>
                  <p className="font-medium text-foreground mb-1">Onboarding</p>
                  <p className="text-sm">We connect to your platforms, set up communication workflows, and align on your standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="step-number shrink-0">03</div>
                <div>
                  <p className="font-medium text-foreground mb-1">Operations go live</p>
                  <p className="text-sm">We handle guest communication, bookings, reviews, and reporting. You get monthly P&L statements and proactive updates.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RemoteManagement;
