import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Play, 
  ArrowRight, 
  Building2, 
  Cog, 
  Rocket, 
  KeyRound,
  Check,
  X,
  Clock,
  Quote
} from "lucide-react";

const phases = [
  {
    title: "Phase 1 — Business Foundation",
    description: "Operating model, entity setup guidance, banking, credit strategy, and systems architecture.",
    icon: Cog,
  },
  {
    title: "Phase 2 — Portfolio Build",
    description: "Unit sourcing, lease guidance, furnishing standards, vendor coordination, and quality control.",
    icon: Building2,
  },
  {
    title: "Phase 3 — Operations Installation",
    description: "Channel setup, pricing logic, SOPs, messaging, and escalation frameworks.",
    icon: Cog,
  },
  {
    title: "Phase 4 — Launch & Handoff",
    description: "Go-live support, stabilization window, documentation transfer, and ownership transition.",
    icon: Rocket,
  },
];

const included = [
  "Business model design and market selection",
  "Entity structure guidance",
  "Credit strategy and capital planning",
  "Unit sourcing and qualification",
  "Lease review and negotiation support",
  "Furnishing specifications and vendor coordination",
  "Channel setup and optimization",
  "Pricing logic and dynamic rate guidance",
  "Standard operating procedures (SOPs)",
  "Guest communication templates",
  "Launch execution and monitoring",
  "Stabilization support window",
  "Complete documentation handoff",
];

const excluded = [
  "Property ownership or investment",
  "Long-term property management",
  "Legal or tax advice",
  "Loan origination or financing",
  "Guaranteed income or returns",
  "Ongoing operational services post-handoff",
];

const timeline = [
  { days: "Days 1–7", phase: "Onboarding & Foundation", description: "Business model finalization, market selection, entity guidance" },
  { days: "Days 7–30", phase: "Portfolio Sourcing", description: "Unit identification, applications, lease negotiations" },
  { days: "Days 21–45", phase: "Setup & Furnishing", description: "Unit preparation, vendor coordination, quality control" },
  { days: "Days 35–50", phase: "Systems Installation", description: "Channel setup, pricing, SOPs, automation" },
  { days: "Days 45–60", phase: "Launch & Stabilization", description: "Go-live, initial bookings, stabilization support" },
];

const testimonials = [
  {
    quote: "The level of structure and clarity was exactly what I needed. I was operational within two months without the trial-and-error most operators go through.",
    author: "Software Engineering Director",
    context: "5-unit portfolio, Bay Area market",
  },
  {
    quote: "STR Forge reduced my decision fatigue significantly. Every step was mapped out, executed professionally, and documented thoroughly.",
    author: "Physician & Business Owner",
    context: "First-time operator",
  },
];

const Program = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                    Full Program Details
                  </p>
                  <h1 className="text-foreground leading-tight mb-6">
                    This is not an Airbnb program.{" "}
                    <span className="text-muted-foreground">It's a business build.</span>
                  </h1>
                  
                  <p className="text-lg text-text-secondary leading-relaxed">
                    STR Forge creates a private, cash-flowing operating business in 
                    corporate housing — independent of public markets, employers, 
                    and property ownership.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-text-secondary text-sm">
                    You are not buying units. You are not joining a course. 
                    <span className="text-foreground font-medium block mt-2">
                      You are building an asset.
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="video-placeholder group cursor-pointer">
                  <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                    <span className="text-sm font-medium">Program Overview</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* The Engagement */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-foreground mb-8">The Engagement</h2>
              
              <div className="card-elevated p-8 md:p-12 text-left">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Program Fee
                    </p>
                    <p className="text-3xl font-semibold text-foreground">$50,000</p>
                    <p className="text-sm text-muted-foreground mt-1">Fixed scope</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Portfolio Size
                    </p>
                    <p className="text-3xl font-semibold text-foreground">4–5 Units</p>
                    <p className="text-sm text-muted-foreground mt-1">Corporate housing</p>
                  </div>
                </div>
                
                <div className="divider my-8" />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Timeline
                    </p>
                    <p className="text-xl font-semibold text-foreground">~6–8 weeks</p>
                    <p className="text-sm text-muted-foreground mt-1">To launch + stabilization</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Model
                    </p>
                    <p className="text-xl font-semibold text-foreground">Build → Launch → Handoff</p>
                    <p className="text-sm text-muted-foreground mt-1">Ownership transfer</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
                  STR Forge does not own property, manage long-term, or hold client funds.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* How It Works - Detailed */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">Detailed Process</h2>
            </motion.div>
            
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 md:p-8 flex items-start gap-6"
                >
                  <div className="step-number shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-text-secondary">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* What's Included / Excluded */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">Scope of Engagement</h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  What's Included
                </h3>
                
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Excluded */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  What's Not Included
                </h3>
                
                <ul className="space-y-3">
                  {excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Capital & Structure */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground mb-8">Capital & Structure</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p>
                  This model is fundamentally different from traditional real estate investment.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "No property ownership required",
                    "No mortgages or long-term debt",
                    "No property taxes or maintenance liability",
                    "Capital-light leasing model",
                    "Business credit commonly used for furnishings",
                    "Cash flow focus, not appreciation",
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">Delivery Timeline</h2>
            </motion.div>
            
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.days}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-6 p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.days}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.phase}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">From Past Clients</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 md:p-8 relative"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  
                  <blockquote className="text-text-secondary leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.context}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="section-spacing bg-secondary/30 border-t border-border">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-foreground mb-6">
                Ready to build your business?
              </h2>
              
              <p className="text-lg text-text-secondary mb-4">
                STR Forge is selective by design. We work with qualified professionals 
                who are ready to own and operate a corporate housing portfolio.
              </p>
              
              <p className="text-sm text-muted-foreground mb-10">
                $100k+ capital or credit capacity · 700+ credit score · U.S. citizens only
              </p>
              
              <Link to="/apply">
                <Button variant="cta" size="xl" className="group">
                  Apply to Work With STR Forge
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Program;
