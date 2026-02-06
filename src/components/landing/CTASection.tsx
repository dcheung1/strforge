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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-foreground mb-6">
            Ready to build?
          </h2>
          
          <p className="text-lg text-text-secondary mb-10">
            If you meet the qualifications and are ready to own a properly 
            built corporate housing business, apply to work with STR Forge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/apply">
              <Button variant="cta" size="xl" className="group">
                Apply to Work With STR Forge
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/program">
              <Button variant="ctaOutline" size="lg">
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
