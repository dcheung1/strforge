import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-foreground mb-6">
            Start with software. Scale to full management.
          </h2>
          
          <p className="text-base md:text-lg text-text-secondary mb-4">
            Most operators start with our AI tools and upgrade to remote management 
            once they see the results. No risk, no upfront cost.
          </p>

          <p className="text-sm text-muted-foreground mb-8 md:mb-10">
            14-day free trial on Software tier. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link to="/get-started" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/get-started" className="w-full sm:w-auto">
              <Button variant="ctaOutline" size="lg" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
