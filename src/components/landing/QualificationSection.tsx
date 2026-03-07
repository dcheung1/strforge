import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "U.S. citizens or permit holders",
  "Busy professionals with $100k+ capital or credit capacity",
  "700+ personal credit score",
  "First-time corporate housing operators",
  "People who value correctness over experimentation",
];

const notForYou = [
  "Existing Airbnb / STR operators",
  "Coaching or course seekers",
  "Anyone seeking guaranteed returns",
  "Those without capital readiness",
];

const QualificationSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Who This Is For</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card-elevated p-5 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5 md:mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              This is for
            </h3>
            
            <ul className="space-y-3 md:space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-text-secondary text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated p-5 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5 md:mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
              This is not for
            </h3>
            
            <ul className="space-y-3 md:space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                  <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
