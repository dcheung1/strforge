import { motion } from "framer-motion";

const stats = [
  { value: "240", label: "Units operated" },
  { value: "$5M+", label: "Revenue generated" },
  { value: "Featured", label: "in Business Insider" },
  { value: "18", label: "Units running profitably today" },
];

const CredibilitySection = () => {
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
          <h2 className="text-foreground">I built this because I needed it</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-text-secondary leading-relaxed"
          >
            <p>
              I scaled to 240 units across 5 cities, $5M a year in revenue. 
              Saw the crash coming. Sonder went bankrupt, StayAlfred collapsed. 
              I sold 180+ units strategically, kept the best 18 that run on autopilot.
            </p>
            <p>
              Now I manage my portfolio with AI and offshore VAs. Five hours a week, 
              $10-30K a month in profit. STR Forge is the system I built for myself. 
              Now you can use it too.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Derek Cheung, Founder
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-elevated p-5 md:p-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
