import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/admin-thestrforge/30min";

const GetStarted = () => {
  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Calendar className="w-8 h-8 text-primary" />
            </motion.div>

            <h1 className="text-3xl font-semibold text-foreground mb-4 md:text-4xl">
              Book a 30-minute call.
            </h1>
            <p className="text-foreground/80 mb-4">
              We'll talk through your goals, capital, and timeline — then map out a plan to forge your Airbnb portfolio.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Limited spots each quarter. Every portfolio gets hands-on attention.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Button
                onClick={openCalendly}
                variant="cta"
                size="xl"
                className="group shadow-lg shadow-primary/20"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-4">
              Opens Calendly in a new tab.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
