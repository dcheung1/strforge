import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  return (
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
          <h2 className="text-foreground mb-8">What STR Forge Does</h2>
          
          <div className="space-y-6 text-lg text-text-secondary">
            <p>
              STR Forge exists to help professionals build their{" "}
              <span className="text-foreground font-medium">
                first corporate housing business correctly
              </span>.
            </p>
            
            <p>
              We do not teach tactics or sell courses.
            </p>
            
            <p>
              We design the business, source and set up the initial portfolio, 
              install operating systems, launch it, and hand it off.
            </p>
            
            <p className="text-muted-foreground">
              This allows clients to own a functioning operating asset without 
              spending months experimenting or making avoidable mistakes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
