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
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const steps = [
  { number: "1", label: "Your info" },
  { number: "2", label: "What you want" },
  { number: "3", label: "Send it" },
];

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
      description: "We'll be in touch within 24-48 hours.",
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
                We'll review your fit and get back to you within 24-48 hours with next steps.
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
        <section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-10">
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
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
                Apply to work with us.
              </h1>
              <p className="text-foreground/80">
                Tell us what you're building. We'll map the right fit.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                      {step.number}
                    </div>
                    <span className="text-sm text-foreground/80 hidden sm:block">{step.label}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={cardVariants}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="card-elevated p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-5">Your info</h3>
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full name *</Label>
                        <Input id="fullName" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required placeholder="" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required placeholder="" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="" />
                      </div>
                      <div className="space-y-2">
                        <Label>Capital to deploy</Label>
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
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="card-elevated p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-5">What you want</h3>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label>I'm most interested in</Label>
                      <Select value={formData.interest} onValueChange={(v) => handleInputChange("interest", v)}>
                        <SelectTrigger><SelectValue placeholder="Select a pathway" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portfolio">Full portfolio (arbitrage + purchase)</SelectItem>
                          <SelectItem value="arbitrage">Arbitrage deals for cash flow</SelectItem>
                          <SelectItem value="purchase">Purchase deals for equity and tax savings</SelectItem>
                          <SelectItem value="management">Management for units I already own</SelectItem>
                          <SelectItem value="busy-professional">Semi-passive STR income</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenge">Anything else? (optional)</Label>
                      <Textarea
                        id="currentChallenge"
                        value={formData.currentChallenge}
                        onChange={(e) => handleInputChange("currentChallenge", e.target.value)}
                        placeholder="Goals, timeline, experience..."
                        rows={3}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="text-center pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Button type="submit" variant="cta" size="xl" className="group shadow-lg shadow-primary/20">
                      Submit Application
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Limited spots each quarter. Every portfolio gets hands-on attention.
                  </p>
                </motion.div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
