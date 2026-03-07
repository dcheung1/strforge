import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-5 md:space-y-6">
              <h1 className="text-foreground leading-tight text-3xl md:text-5xl lg:text-6xl">
                Corporate housing portfolios,{" "}
                <span className="text-muted-foreground">built properly.</span>
              </h1>
              
              <p className="text-base md:text-xl text-text-secondary leading-relaxed max-w-xl">
                STR Forge helps professionals create a cash-flowing corporate housing 
                business without owning property, managing day-to-day operations, 
                or betting on appreciation.
              </p>
              
              <p className="text-sm text-muted-foreground">
                A fixed-scope build, launch, and handoff engagement. Not coaching. Not property management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/apply" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Apply to Work With STR Forge
                </Button>
              </Link>
              <Link to="/program" className="w-full sm:w-auto">
                <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                  View Program Details
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="video-placeholder cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="text-sm font-medium">Watch Overview</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
