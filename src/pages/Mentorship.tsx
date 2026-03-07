import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Users,
  BookOpen,
  Target,
  MessageCircle,
  Check,
  X,
  Calendar,
  Quote,
} from "lucide-react";

const weeklyBreakdown = [
  {
    week: "Week 1",
    title: "Foundation & Market Selection",
    description: "Business model design, market analysis, entity structure guidance, and credit strategy planning.",
  },
  {
    week: "Week 2",
    title: "Sourcing & Deal Analysis",
    description: "Unit sourcing frameworks, lease evaluation criteria, application strategies, and negotiation tactics.",
  },
  {
    week: "Week 3",
    title: "Furnishing & Setup Systems",
    description: "Furnishing standards, vendor coordination, budget optimization, and quality control checklists.",
  },
  {
    week: "Week 4",
    title: "Operations & Pricing",
    description: "Channel setup, pricing logic, dynamic rate strategies, and automation tools.",
  },
  {
    week: "Week 5",
    title: "SOPs & Guest Experience",
    description: "Standard operating procedures, guest communication templates, escalation frameworks, and reviews strategy.",
  },
  {
    week: "Week 6",
    title: "Launch & Scaling",
    description: "Go-live execution, first booking optimization, stabilization tactics, and scaling your portfolio from 1 to 5 units.",
  },
];

const included = [
  "6 weekly live group coaching calls",
  "Structured curriculum covering all phases",
  "Templates, SOPs, and frameworks library",
  "Market selection and deal analysis tools",
  "Pricing and revenue optimization guidance",
  "Private cohort community access",
  "Q&A and hot-seat sessions each week",
  "Recorded sessions for replay",
];

const excluded = [
  "Done-for-you unit sourcing or setup",
  "Direct lease negotiation on your behalf",
  "Property management services",
  "Legal or tax advice",
  "Guaranteed income or returns",
];

const testimonials = [
  {
    quote: "The cohort gave me the confidence and framework to land my first unit within 3 weeks. Having a group going through the same process made all the difference.",
    author: "Marketing Manager",
    context: "First-time operator, secured 2 units",
  },
  {
    quote: "I had been watching YouTube videos for months. This program cut through the noise and gave me a real system to follow, week by week.",
    author: "Financial Analyst",
    context: "Built 3-unit portfolio",
  },
];

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                    Mentorship Cohort
                  </p>
                  <h1 className="text-foreground leading-tight mb-6">
                    Learn the system.{" "}
                    <span className="text-muted-foreground">Build it yourself.</span>
                  </h1>

                  <p className="text-lg text-text-secondary leading-relaxed">
                    A 6-week group coaching program that gives you the frameworks,
                    templates, and live guidance to build your first corporate housing
                    portfolio, from your first unit to five.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-text-secondary text-sm">
                    You get the same system behind our Done-For-You builds,
                    <span className="text-foreground font-medium block mt-2">
                      delivered as structured coaching, not execution.
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-elevated p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground uppercase tracking-wide">
                        Cohort Program
                      </span>
                    </div>

                    <div>
                      <p className="text-4xl font-semibold text-foreground">$4,000</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        One-time investment
                      </p>
                    </div>

                    <div className="divider" />

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">6 weeks · Live group calls</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">First unit → 5-unit portfolio</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">Full curriculum + templates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">Private community access</span>
                      </div>
                    </div>

                    <Link to="/apply">
                      <Button variant="cta" size="xl" className="w-full group mt-2">
                        Apply for the Cohort
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Weekly Breakdown */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">6-Week Curriculum</h2>
            </motion.div>

            <div className="space-y-4">
              {weeklyBreakdown.map((item, index) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-6 p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors"
                >
                  <div className="step-number shrink-0">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">{item.week}</p>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included / Excluded */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">What You Get</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  Included
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Need done-for-you execution?{" "}
                    <Link to="/program" className="text-primary hover:underline font-medium">
                      See our DFY Program →
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cohort vs DFY Comparison */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">Mentorship vs. Done-For-You</h2>
            </motion.div>

            <div className="card-elevated p-6 md:p-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-muted-foreground font-medium"></th>
                    <th className="text-center py-3 px-4 text-primary font-semibold">Mentorship Cohort</th>
                    <th className="text-center py-3 pl-4 text-foreground font-semibold">DFY Program</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  {[
                    ["Investment", "$4,000", "$50,000"],
                    ["Format", "Group coaching", "Private build"],
                    ["Execution", "You build it", "We build it"],
                    ["Timeline", "6 weeks", "6–8 weeks"],
                    ["Portfolio target", "1–5 units", "4–5 units"],
                    ["Live support", "Weekly group calls", "Dedicated team"],
                    ["Templates & SOPs", "✓", "✓"],
                    ["Community access", "✓", "—"],
                  ].map(([label, cohort, dfy], i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                      <td className="py-3 px-4 text-center">{cohort}</td>
                      <td className="py-3 pl-4 text-center">{dfy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="accent-line mb-6" />
              <h2 className="text-foreground">From Past Cohort Members</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 md:p-8 relative"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <blockquote className="text-text-secondary leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">{testimonial.context}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing bg-secondary/30 border-t border-border">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-foreground mb-6">Ready to learn the system?</h2>
              <p className="text-lg text-text-secondary mb-4">
                Join the next cohort and get the frameworks, templates, and live
                coaching to build your corporate housing business.
              </p>
              <p className="text-sm text-muted-foreground mb-10">
                Limited spots per cohort · Next cohort starts soon
              </p>
              <Link to="/apply">
                <Button variant="cta" size="xl" className="group">
                  Apply for the Mentorship Cohort
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mentorship;
