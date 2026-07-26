import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Hammer,
  Handshake,
  Home,
  KeyRound,
  Landmark,
  Search,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroFadeUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
};

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
};

const sectionFadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
};

const cardVariants = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
};

const flywheel = [
  {
    title: "Find BNB",
    eyebrow: "Deal origination",
    description:
      "Curated arbitrage and purchase deals screened for demand, cash flow, and clear upside — the sourcing engine behind every portfolio we help build.",
    icon: Search,
  },
  {
    title: "Manage BNB",
    eyebrow: "Operating backbone",
    description:
      "A hands-off management layer for investors and busy professionals who want revenue, guest experience, and unit performance handled with discipline.",
    icon: ClipboardCheck,
  },
  {
    title: "Build BNB",
    eyebrow: "Value creation",
    description:
      "Design, furnishing, repairs, vendor coordination, and launch support that turn ordinary supply into durable STR assets inside your portfolio.",
    icon: Hammer,
  },
  {
    title: "Capital BNB",
    eyebrow: "Portfolio expansion",
    description:
      "Tax-aware strategy and purchase deal flow for investors ready to convert arbitrage cash flow into long-term equity and scaled ownership.",
    icon: Landmark,
  },
];

const investorOutcomes = [
  "A real portfolio strategy — arbitrage for scale, purchase for equity and tax savings",
  "Curated arbitrage and purchase deals matched to your capital, market, and timeline",
  "A management team already attached so units perform without your daily attention",
  "One consultative relationship instead of a one-off deal search or generic marketplace",
];

const dealRoomRows = [
  { market: "Nashville", type: "Arbitrage", profile: "Launch-ready", status: "Screened" },
  { market: "Scottsdale", type: "Purchase", profile: "Design upside", status: "Reviewing" },
  { market: "Tampa", type: "Arbitrage", profile: "Operator matched", status: "Available" },
];

const pathways = [
  {
    title: "Investors",
    description:
      "For investors deploying capital who want a real STR portfolio — arbitrage for cash flow and scale, purchase deals for equity, depreciation, and long-term ownership.",
    icon: Wallet,
  },
  {
    title: "Busy professionals",
    description:
      "For high earners who want STR income without becoming an operator. We source the deals, launch the units, and manage them so your time stays yours.",
    icon: KeyRound,
  },
];

function DealRoomMockup() {
  return (
    <motion.div
      variants={heroFadeUp}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-lg"
    >
      <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
            <Building2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">STR Forge Deal Room</p>
            <p className="text-xs text-muted-foreground">Arbitrage + purchase deal pipeline</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground md:flex">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          Qualified access
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-border p-4 md:border-b-0 md:border-r md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase text-muted-foreground">Current pipeline</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">17 screened opportunities</p>
            </div>
            <div className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-right">
              <p className="text-xs text-muted-foreground">Next allocation</p>
              <p className="text-sm font-semibold text-primary">Open now</p>
            </div>
          </div>

          <div className="space-y-3">
            {dealRoomRows.map((deal, index) => (
              <motion.div
                key={`${deal.market}-${deal.type}`}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.35 }}
                className="grid grid-cols-[1fr_auto] gap-4 rounded-md border border-border bg-secondary/30 p-3 md:grid-cols-[1fr_0.8fr_0.8fr_auto] md:items-center"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{deal.market}</p>
                  <p className="text-xs text-muted-foreground">{deal.type}</p>
                </div>
                <p className="hidden text-sm text-text-secondary md:block">{deal.profile}</p>
                <div className="hidden items-center gap-2 text-sm text-text-secondary md:flex">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  Upside mapped
                </div>
                <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground">
                  {deal.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-6">
          <p className="mb-4 text-xs uppercase text-muted-foreground">Flywheel economics</p>
          <div className="space-y-4">
            {[
              ["Source", "Find underpriced STR supply"],
              ["Operate", "Attach management and launch systems"],
              ["Improve", "Design, furnish, repair, and optimize"],
              ["Own", "Layer in purchase deals for equity and tax savings"],
            ].map(([label, copy], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 + index * 0.08, duration: 0.35 }}
                className="flex gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-18">
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div className="section-container relative z-10 text-center">
            <motion.div initial="initial" animate="animate" variants={heroStagger}>
              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase text-primary">
                  <Home className="h-3.5 w-3.5" />
                  Airbnb deal flow, operations, and ownership
                </span>
              </motion.div>

              <motion.h1
                variants={heroFadeUp}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-7xl"
              >
                STR Forge
                <span className="block text-foreground">forges compounding Airbnb portfolios.</span>
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mb-10 max-w-3xl text-lg font-medium text-foreground/90 md:text-xl"
              >
                A consultative platform for investors and busy professionals. We help you forge a real Airbnb portfolio — arbitrage deals for scale, purchase deals for equity and tax savings — then manage and build the units for you.
              </motion.p>

              <motion.div variants={heroFadeUp} transition={{ duration: 0.6 }} className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild variant="cta" size="xl" className="group shadow-lg shadow-primary/20">
                  <Link to="/get-started">
                    Apply to work with us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="ctaOutline" size="xl">
                  <a href="#flywheel">See the flywheel</a>
                </Button>
              </motion.div>
            </motion.div>

            <DealRoomMockup />
          </motion.div>
        </section>

        <section className="py-8">
          <div className="section-container grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["200+", "units operated"],
              ["$15M+", "revenue generated"],
              ["8+", "years in STRs"],
              ["3", "entry points"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-border pl-4">
                <p className="text-2xl font-semibold text-foreground md:text-3xl">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="flywheel" className="section-spacing relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="section-container">
            <motion.div {...sectionFadeUp} className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase text-primary">The STR Forge flywheel</p>
              <h2 className="mb-4 text-foreground">One platform for the whole Airbnb supply chain.</h2>
              <p className="text-text-secondary">
                STR Forge is moving beyond tools into the actual assets, services, and operating infrastructure behind short-term rental growth.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {flywheel.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...cardVariants}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                  className="card-elevated p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase text-primary">{item.eyebrow}</p>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="deal-flow" className="section-spacing bg-secondary/20">
          <div className="section-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div {...sectionFadeUp}>
              <p className="mb-3 text-sm font-semibold uppercase text-primary">Portfolio, not one-off</p>
              <h2 className="mb-5 text-foreground">A consultative build, not a deal search.</h2>
              <p className="mb-8 text-text-secondary">
                We sit down with investors and busy professionals, map goals, capital, and tax picture, then blend arbitrage and purchase deals into one compounding STR portfolio — and run it end to end.
              </p>
              <Button asChild variant="cta" size="lg" className="group">
                <Link to="/get-started">
                  Apply for access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div {...cardVariants} transition={{ duration: 0.7 }} className="grid gap-3">
              {investorOutcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-md border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-text-secondary">{outcome}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="capital" className="section-spacing relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="section-container">
            <motion.div {...sectionFadeUp} className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase text-primary">Who we work with</p>
              <h2 className="mb-4 text-foreground">Built for investors and busy professionals.</h2>
              <p className="text-text-secondary">
                Two audiences, one playbook: forge a portfolio of arbitrage and purchase Airbnbs, and let our team source, launch, and operate every unit.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
              {pathways.map((path, index) => (
                <motion.article
                  key={path.title}
                  {...cardVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-elevated p-6"
                >
                  <path.icon className="mb-5 h-8 w-8 text-primary" />
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{path.title}</h3>
                  <p className="text-sm text-text-secondary">{path.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="section-container text-center">
            <motion.div {...sectionFadeUp} className="mx-auto max-w-3xl">
              <BadgeDollarSign className="mx-auto mb-5 h-10 w-10 text-primary" />
              <h2 className="mb-5 text-foreground">Apply to forge your Airbnb portfolio with us.</h2>
              <p className="mb-9 text-text-secondary">
                We take on a limited number of investors and busy professionals each quarter so every portfolio gets consultative attention from sourcing through operations.
              </p>
              <Button asChild variant="cta" size="xl" className="group shadow-lg shadow-primary/20">
                <Link to="/get-started">
                  Apply to work with us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}