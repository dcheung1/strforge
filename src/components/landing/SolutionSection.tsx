import { motion } from "framer-motion";
import { Brain, TrendingUp, Bell, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Expense Allocation",
    bullets: [
      "Learns how you split costs (Costco runs, plumber visits, portfolio expenses)",
      "Handles messy allocation logic so you don't have to",
      "Gives you accurate per-unit P&L in real-time",
    ],
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    bullets: [
      "Dynamic pricing that adjusts daily",
      "Direct booking website (cut out Airbnb fees)",
      "Extension automation (keep guests longer)",
      "Corporate housing placement (30-90 day stays)",
    ],
  },
  {
    icon: Bell,
    title: "Proactive Monitoring",
    bullets: [
      "Reviews every expense, booking, and guest review",
      "Alerts you to issues BEFORE they become problems",
      '"Unit #5 had 3 WiFi complaints this month. Fix now or risk Superhost status"',
    ],
  },
  {
    icon: BookOpen,
    title: "Derek's Playbook, Built In",
    bullets: [
      "AI trained on 240 units of operating experience",
      "Prescriptive recommendations, not just data",
      '"Here\'s what I did when Unit #47 had this same issue"',
    ],
  },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground mb-4">Meet Your AI Operating Partner</h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Not a dashboard you log into. An agent that works for you, 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-5 md:p-8"
            >
              <feature.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">·</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
