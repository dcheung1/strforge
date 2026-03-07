import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-spacing bg-secondary/30 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-foreground mb-6">
            Ready to build?
          </h2>
          
          <p className="text-base md:text-lg text-text-secondary mb-8 md:mb-10">
            If you meet the qualifications and are ready to own a properly 
            built corporate housing business, apply to work with STR Forge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link to="/apply" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Apply to Work With STR Forge
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/program" className="w-full sm:w-auto">
              <Button variant="ctaOutline" size="lg" className="w-full sm:w-auto">
                View Full Program Details
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
