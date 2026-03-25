import { motion } from "framer-motion";
import { Receipt, TrendingDown, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: Receipt,
    headline: "Which unit does that Costco run belong to?",
    description: "You spend 10 hours a month manually allocating expenses across units. That's time you don't have.",
  },
  {
    icon: TrendingDown,
    headline: "Is Unit #5 actually profitable?",
    description: "You have revenue data but no idea about true unit economics. You're flying blind on the numbers that matter.",
  },
  {
    icon: AlertTriangle,
    headline: "Your occupancy dropped 20% and you didn't notice.",
    description: "No proactive alerts. No early warnings. You found out too late to do anything about it.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Running an STR portfolio is messy. Really messy.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.headline}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-elevated p-5 md:p-8"
            >
              <point.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">
                {point.headline}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
