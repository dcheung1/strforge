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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    description:
      "AI-powered deal analysis so you can stop relying on broken Excel spreadsheets and spot winners fast.",
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
  {
    phase: "Phase 1 (Q2 2026)",
    items: "Base Platform, Deal Forge, Weekly Calls",
  },
  {
    phase: "Phase 2 (Q3 2026)",
    items: "Listing Optimizer, Market Outreach CRM, Financial Dashboard",
  },
  {
    phase: "Phase 3 (Q4 2026)",
    items: "Smart Pricer, Operations Hub, Team Management",
  },
  {
    phase: "Phase 4 (2027)",
    items: "PMS Integrations, AI Lease Review, Expansion Planner",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [challenge, setChallenge] = useState("");
  const [challengeDetail, setChallengeDetail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submissionPayload = useMemo(
    () => ({
      email,
      name,
      challenge,
      challengeDetail,
      submittedAt: new Date().toISOString(),
    }),
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

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.24),_transparent_55%)]" />

        <section className="container relative py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4">STR Forge Early Access</Badge>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Build Your STR Portfolio Like a Pro
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Stop guessing. Stop losing money on bad deals. Build your STR portfolio with AI-powered tools +
              the proven frameworks from 240 units.
            </p>
            <Button size="lg" className="mt-8" onClick={scrollToForm}>
              Reserve Your Spot
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
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
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name (optional)</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>What’s your biggest STR challenge? (optional)</Label>
                    <Select value={challenge} onValueChange={setChallenge}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a challenge" />
                      </SelectTrigger>
                      <SelectContent>
                        {challengeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge-detail">Additional context (optional)</Label>
                    <Textarea
                      id="challenge-detail"
                      value={challengeDetail}
                      onChange={(e) => setChallengeDetail(e.target.value)}
                      placeholder="Tell us more about your situation"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Reserve Your Spot
                  </Button>

                  {submitted && (
                    <p className="text-sm font-medium text-green-400">
                      You&apos;re on the list! Check your email for early access details.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="container py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold md:text-3xl">Inside STR Forge</h2>
            <p className="mt-2 text-muted-foreground">Tools built for operators who care about margins, not hype.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {tools.map((tool) => (
                <Card key={tool.title} className="bg-card/70">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{tool.description}</CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              🔜 Listing Optimizer, Market Outreach CRM, Smart Pricer
            </p>
          </motion.div>
        </section>

        <section className="container py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-primary/20 bg-card/50 p-6"
          >
            <p className="text-xl font-semibold">Join 500+ operators building profitable STR businesses</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <blockquote className="rounded-lg border p-4 text-sm text-muted-foreground">
                “Placeholder testimonial quote from an operator who transformed their underwriting process with STR
                Forge.”
              </blockquote>
              <blockquote className="rounded-lg border p-4 text-sm text-muted-foreground">
                “Placeholder testimonial quote about building systems and confidence to scale profitably.”
              </blockquote>
            </div>
            <p className="mt-5 text-sm font-medium text-primary">As seen in Business Insider</p>
          </motion.div>
        </section>

        <section className="container py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold md:text-3xl">Why STR Forge</h2>
            <div className="mt-6 space-y-4 text-sm md:text-base">
              <p>❌ No more guessing if a deal is good → ✅ AI analyzes profit margins in 30 seconds</p>
              <p>❌ No more messy spreadsheets → ✅ Clean dashboards. Real-time data.</p>
              <p>❌ No more “figure it out yourself” → ✅ Join weekly calls. Get live feedback.</p>
            </div>
            <p className="mt-6 text-muted-foreground">
              Built by Derek Cheung (240 units, $5M/year). Powered by AI. Proven by operators.
            </p>
          </motion.div>
        </section>

        <section className="container py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold md:text-3xl">Roadmap Preview</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {roadmap.map((item) => (
                <Card key={item.phase} className="bg-card/70">
                  <CardHeader>
                    <CardTitle className="text-base">{item.phase}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{item.items}</CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container pb-16 pt-10 md:pb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-primary/25 bg-primary/10 p-7 text-center"
          >
            <p className="text-xl font-semibold">Early access is limited. Reserve your spot now.</p>
            <Separator className="mx-auto my-6 max-w-xs" />
            <Button size="lg" onClick={scrollToForm}>
              Reserve Your Spot
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Waitlist;
