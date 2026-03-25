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

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    units: "",
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
        <main className="pt-32 pb-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-semibold text-foreground mb-4">You're in.</h1>
              <p className="text-text-secondary mb-4">
                We'll review your info and get back to you within 24 hours with next steps.
              </p>
              <p className="text-sm text-muted-foreground">
                If you selected the Software tier, check your email for trial access.
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

      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                Get Started
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Let's figure out the right fit.
              </h1>
              <p className="text-text-secondary">
                Tell us about your portfolio and we'll recommend the best tier for you.
                Software trial starts immediately. Service tiers begin after a quick call.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">Your Info</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Derek Cheung"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="derek@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>How many units do you operate?</Label>
                      <Select
                        value={formData.units}
                        onValueChange={(v) => handleInputChange("units", v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Getting started (0)</SelectItem>
                          <SelectItem value="1-5">1-5 units</SelectItem>
                          <SelectItem value="6-15">6-15 units</SelectItem>
                          <SelectItem value="16-30">16-30 units</SelectItem>
                          <SelectItem value="30+">30+ units</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">What are you looking for?</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>I'm most interested in:</Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(v) => handleInputChange("interest", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">Software ($97-197/mo)</SelectItem>
                        <SelectItem value="revenue">Revenue Management (2.5%)</SelectItem>
                        <SelectItem value="remote-10">Remote Management (10%)</SelectItem>
                        <SelectItem value="full-15">Full Management (15%)</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentChallenge">
                      What's the biggest headache in your business right now? (optional)
                    </Label>
                    <Textarea
                      id="currentChallenge"
                      value={formData.currentChallenge}
                      onChange={(e) => handleInputChange("currentChallenge", e.target.value)}
                      placeholder="e.g., expense tracking is a mess, pricing is all over the place, I need help with guest communication..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" variant="cta" size="xl" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Software tier: instant trial access. Service tiers: we'll schedule a quick call.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
