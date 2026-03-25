import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-5 md:space-y-6">
              <h1 className="text-foreground leading-tight text-3xl md:text-5xl lg:text-6xl">
                Your AI Operating Partner
                <br />
                <span className="text-muted-foreground">to Start and Scale your entire Airbnb business.</span>
              </h1>
              
              <p className="text-base md:text-xl text-text-secondary leading-relaxed max-w-xl">
                Find &amp; analyze deals, cold call and negotiate, launch listings, and automate operations and profit tracking. All powered by AI agents.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/get-started" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto">
                <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="card-elevated p-4 md:p-6 space-y-4">
              {/* Mini P&L Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Unit #3 P&L", value: "+$2,140", icon: DollarSign },
                  { label: "Occupancy", value: "87%", icon: BarChart3 },
                  { label: "AI Actions", value: "12 today", icon: Bot },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <stat.icon className="w-4 h-4 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* AI Agent Chat Mock */}
              <div className="rounded-lg bg-secondary/30 border border-border/50 p-4 space-y-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">AI Agent</p>
                <div className="space-y-2">
                  <div className="bg-card p-3 rounded-lg border border-border/50 text-sm text-text-secondary">
                    That Costco run ($247) looks like it covers Units #3 and #5. I split it 60/40 based on your usual pattern. Sound right?
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 text-sm text-foreground">
                    Unit #5 had 3 WiFi complaints this month. Fix now or risk Superhost status.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
