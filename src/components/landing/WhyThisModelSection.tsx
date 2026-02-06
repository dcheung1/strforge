import { motion } from "framer-motion";
import { Play, TrendingUp, Wallet, Shuffle, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Operating cash flow",
    description: "Focus on income generation rather than speculation",
  },
  {
    icon: Wallet,
    title: "Capital-light structure",
    description: "No mortgages, no property taxes, no maintenance risk",
  },
  {
    icon: Shuffle,
    title: "Flexibility",
    description: "Leasing model instead of long-term debt obligations",
  },
  {
    icon: DollarSign,
    title: "Income focus",
    description: "Cash flow priority, not appreciation assumptions",
  },
];

const WhyThisModelSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-foreground mb-6">
                Why professionals are choosing operations over ownership
              </h2>
              
              <div className="space-y-4 text-text-secondary">
                <p>
                  Public markets are volatile and uncontrollable.
                </p>
                <p>
                  Traditional real estate ties up capital in long-term debt, 
                  maintenance risk, and appreciation assumptions.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50"
                >
                  <benefit.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              This is a private operating asset — not a speculative investment.
            </p>
          </motion.div>
          
          {/* Right: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="video-placeholder group cursor-pointer">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="text-sm font-medium">Learn More</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisModelSection;
