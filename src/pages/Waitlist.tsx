import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

const heroFadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const sectionFadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
};

const challengeOptions = [
  "Finding profitable deals",
  "Underwriting and analyzing markets",
  "Pricing and revenue management",
  "Operations and team systems",
  "Scaling from 1-5 units",
  "Other",
];

const tools = [
  {
    title: "Deal Forge",
    description: "AI-powered deal analysis so you can stop relying on broken Excel spreadsheets and spot winners fast.",
  },
  {
    title: "Resource Vault",
    description: "Templates, SOPs, and playbooks to run your STR business like a real operator.",
  },
  {
    title: "Discord Community",
    description: "Network with operators, not gurus. Real builders sharing real playbooks.",
  },
];

const roadmap = [
  { phase: "Phase 1 (Q2 2026)", items: "Base Platform, Deal Forge, Weekly Calls" },
  { phase: "Phase 2 (Q3 2026)", items: "Listing Optimizer, Market Outreach CRM, Financial Dashboard" },
  { phase: "Phase 3 (Q4 2026)", items: "Smart Pricer, Operations Hub, Team Management" },
  { phase: "Phase 4 (2027)", items: "PMS Integrations, AI Lease Review, Expansion Planner" },
];

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [challenge, setChallenge] = useState("");
  const [challengeDetail, setChallengeDetail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submissionPayload = useMemo(
    () => ({ email, name, challenge, challengeDetail, submittedAt: new Date().toISOString() }),
    [challenge, challengeDetail, email, name]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("STR Forge waitlist submission", submissionPayload);
    setSubmitted(true);
    setEmail("");
    setName("");
    setChallenge("");
    setChallengeDetail("");
  };

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* ═══════════ Hero ═══════════ */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]"
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="section-container relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={heroStagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  STR Forge Early Access
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-3xl font-bold leading-tight md:text-5xl text-foreground"
              >
                Your AI Operating Partner for Airbnb Businesses
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="mt-5 text-base text-muted-foreground md:text-lg"
              >
                AI-powered expense tracking, revenue optimization, and remote management.
                Built by an operator who's run 240 units.
              </motion.p>

              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
                  <Button size="lg" onClick={scrollToForm} className="shadow-lg shadow-primary/20">
                    Reserve Your Spot
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Waitlist Form ═══════════ */}
        <section className="pb-16 border-t border-border/50">
          <div className="section-container">
            <motion.div
              {...cardVariants}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              id="waitlist-form"
              className="mx-auto mt-12 max-w-2xl"
            >
              <Card className="border-primary/25 bg-card/90 backdrop-blur">
                <CardHeader>
                  <CardTitle>Reserve Your Spot</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (optional)</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label>What's your biggest STR challenge? (optional)</Label>
                      <Select value={challenge} onValueChange={setChallenge}>
                        <SelectTrigger><SelectValue placeholder="Select a challenge" /></SelectTrigger>
                        <SelectContent>
                          {challengeOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="challenge-detail">Additional context (optional)</Label>
                      <Textarea id="challenge-detail" value={challengeDetail} onChange={(e) => setChallengeDetail(e.target.value)} placeholder="Tell us more about your situation" />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button type="submit" className="w-full" size="lg">Reserve Your Spot</Button>
                    </motion.div>
                    {submitted && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-medium text-green-400"
                      >
                        You&apos;re on the list! Check your email for early access details.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Inside STR Forge ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.div {...sectionFadeUp}>
              <h2 className="text-2xl font-semibold md:text-3xl text-foreground">Inside STR Forge</h2>
              <p className="mt-2 text-muted-foreground">Tools built for operators who care about margins, not hype.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.title}
                    {...cardVariants}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Card className="bg-card/70 h-full">
                      <CardHeader><CardTitle className="text-lg">{tool.title}</CardTitle></CardHeader>
                      <CardContent className="text-sm text-muted-foreground">{tool.description}</CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Social Proof ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
          </div>
          <div className="section-container relative z-10">
            <motion.div
              {...cardVariants}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="rounded-xl border border-primary/20 bg-card/50 p-6"
            >
              <p className="text-xl font-semibold text-foreground">Join 500+ operators building profitable STR businesses</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <blockquote className="rounded-lg border p-4 text-sm text-muted-foreground">
                  "Placeholder testimonial quote from an operator who transformed their underwriting process with STR Forge."
                </blockquote>
                <blockquote className="rounded-lg border p-4 text-sm text-muted-foreground">
                  "Placeholder testimonial quote about building systems and confidence to scale profitably."
                </blockquote>
              </div>
              <p className="mt-5 text-sm font-medium text-primary">As seen in Business Insider</p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Why STR Forge ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.div {...sectionFadeUp}>
              <h2 className="text-2xl font-semibold md:text-3xl text-foreground">Why STR Forge</h2>
              <div className="mt-6 space-y-4 text-sm md:text-base">
                {[
                  { bad: "No more guessing if a deal is good", good: "AI analyzes profit margins in 30 seconds" },
                  { bad: "No more messy spreadsheets", good: "Clean dashboards. Real-time data." },
                  { bad: 'No more "figure it out yourself"', good: "Join weekly calls. Get live feedback." },
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    className="text-text-secondary"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                  >
                    ❌ {item.bad} → ✅ {item.good}
                  </motion.p>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                Built by Derek Cheung (240 units, $5M/year). Powered by AI. Proven by operators.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Roadmap ═══════════ */}
        <section className="section-spacing border-t border-border/50">
          <div className="section-container">
            <motion.div {...sectionFadeUp}>
              <h2 className="text-2xl font-semibold md:text-3xl text-foreground">Roadmap Preview</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {roadmap.map((item, i) => (
                  <motion.div
                    key={item.phase}
                    {...cardVariants}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Card className="bg-card/70 h-full">
                      <CardHeader><CardTitle className="text-base">{item.phase}</CardTitle></CardHeader>
                      <CardContent className="text-sm text-muted-foreground">{item.items}</CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ Final CTA ═══════════ */}
        <section className="section-spacing border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="rounded-2xl border border-primary/25 bg-primary/10 p-7 text-center"
            >
              <p className="text-xl font-semibold text-foreground">Early access is limited. Reserve your spot now.</p>
              <Separator className="mx-auto my-6 max-w-xs" />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button size="lg" onClick={scrollToForm} className="shadow-lg shadow-primary/20">
                  Reserve Your Spot
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Waitlist;
