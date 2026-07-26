import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const heroFadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    capital: "",
    interest: "",
    currentChallenge: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }
    console.log("Get Started submission", formData);
    setIsSubmitted(true);
    toast({
      title: "We got it",
      description: "We'll be in touch within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative overflow-hidden pt-28 pb-20">
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
              className="max-w-xl mx-auto text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </motion.div>
              <h1 className="text-3xl font-semibold text-foreground mb-4">You're in.</h1>
              <p className="text-text-secondary mb-4">
                We'll review your fit and get back to you within 24 hours with next steps.
              </p>
              <p className="text-sm text-muted-foreground">
                Qualified applicants will be routed to deal flow, capital, operating, or partner conversations.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ═══════════ Hero ═══════════ */}
        <section className="relative overflow-hidden pt-24 pb-10 md:pt-32 md:pb-12">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[150px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="section-container relative z-10">
            <motion.div initial="initial" animate="animate" variants={heroStagger} className="max-w-2xl mx-auto text-center">
              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Apply to Work With Us
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="mb-4 text-3xl font-semibold text-foreground md:text-4xl"
              >
                Apply to work with STR Forge.
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="font-medium text-foreground/90"
              >
                Tell us about your capital, operating background, and goals so we can route you into the right part of the STR Forge flywheel.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Form ═══════════ */}
        <section className="pb-20">
          <div className="section-container">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
              <motion.div
                initial="initial"
                animate="animate"
                {...cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Your Info</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Derek Cheung" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="derek@example.com" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label>Available capital or buying power</Label>
                      <Select value={formData.capital} onValueChange={(v) => handleInputChange("capital", v)}>
                        <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K-$250K</SelectItem>
                          <SelectItem value="250k-500k">$250K-$500K</SelectItem>
                          <SelectItem value="500k-1m">$500K-$1M</SelectItem>
                          <SelectItem value="1m-plus">$1M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate="animate"
                {...cardVariants}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">What are you looking for?</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>I'm most interested in:</Label>
                    <Select value={formData.interest} onValueChange={(v) => handleInputChange("interest", v)}>
                      <SelectTrigger><SelectValue placeholder="Select a pathway" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portfolio">Forging a full Airbnb portfolio (arbitrage + purchase)</SelectItem>
                        <SelectItem value="arbitrage">Arbitrage deals for cash flow and scale</SelectItem>
                        <SelectItem value="purchase">Purchase deals for equity and tax savings</SelectItem>
                        <SelectItem value="management">Hands-off management for units I already own</SelectItem>
                        <SelectItem value="busy-professional">Semi-passive STR income (busy professional)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentChallenge">
                      What should we know about your goals, capital, timeline, or STR experience? (optional)
                    </Label>
                    <Textarea
                      id="currentChallenge"
                      value={formData.currentChallenge}
                      onChange={(e) => handleInputChange("currentChallenge", e.target.value)}
                      placeholder="e.g., I want semi-passive STR exposure, I have capital to deploy this quarter, I operate units already, I want tax-aware ownership conversations..."
                      rows={4}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button type="submit" variant="cta" size="xl" className="group shadow-lg shadow-primary/20">
                    Submit Application
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <p className="text-sm text-muted-foreground mt-4">
                  We work with a limited number of investors and busy professionals each quarter so every portfolio gets hands-on attention.
                </p>
              </motion.div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
