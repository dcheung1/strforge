import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Building2, Rocket, KeyRound } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "We review for fit, capital readiness, and intent. STR Forge is selective by design.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Blueprint",
    description: "We define markets, unit criteria, budgets, and the operating model for your business.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Source & Set Up",
    description: "We source qualified units, guide lease execution, oversee furnishing and setup, and coordinate vendors.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Launch",
    description: "We install systems, channels, and SOPs, then bring the portfolio live.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Handoff",
    description: "You take full ownership of a stabilized, repeatable business.",
    icon: KeyRound,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">How It Works</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 md:p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="step-number group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.number}
                </div>
                <step.icon className="w-5 h-5 text-muted-foreground mt-2.5" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-muted-foreground mt-10 text-center"
        >
          Detailed scope and timeline available on the{" "}
          <Link to="/program" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
            program page
          </Link>.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
