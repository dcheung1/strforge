import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cinematic.jpg";
import bedroomImage from "@/assets/interior-bedroom.jpg";
import kitchenImage from "@/assets/interior-kitchen.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
};

const flywheel = [
  { n: "01", title: "Find", copy: "Arbitrage and purchase deals we underwrite ourselves for demand, cash flow, and real upside." },
  { n: "02", title: "Build", copy: "Design, furnishing, and launch handled by our team so each unit opens ready to perform." },
  { n: "03", title: "Manage", copy: "A hands-off operating layer running guests, revenue, and unit performance for you." },
  { n: "04", title: "Scale", copy: "Layer in purchase deals for equity, depreciation, and long-term ownership across the portfolio." },
];

const markets = ["Nashville", "Scottsdale", "Tampa", "Austin", "Miami", "Dallas", "Charlotte", "Phoenix"];

const opportunities = [
  { market: "Nashville, TN", type: "Arbitrage", note: "Launch-ready 2BR downtown", image: kitchenImage },
  { market: "Scottsdale, AZ", type: "Purchase", note: "Design upside, resort corridor", image: bedroomImage },
  { market: "Tampa, FL", type: "Arbitrage", note: "Operator matched, coastal demand", image: heroImage },
];

const principles = [
  { title: "We run what we source.", copy: "Every unit we bring you is a unit our own team can operate. One group owns the outcome." },
  { title: "Built as a portfolio.", copy: "Arbitrage for scale, purchase for equity and tax savings. One compounding strategy, not a listings feed." },
  { title: "Quiet by design.", copy: "A small number of investors and busy professionals each quarter, with hands-on attention throughout." },
];

export default function HomeAlt() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}>
      {/* Serif font just for headings on this page */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap"
      />
      <Header />

      <main>
        {/* CINEMATIC HERO */}
        <section className="relative min-h-[92vh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Designed short-term rental interior at golden hour"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

          <div className="section-container relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-40 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="max-w-3xl"
            >
              <p className="mb-6 font-sans text-xs uppercase tracking-[0.28em] text-primary/90">
                An Airbnb portfolio studio
              </p>
              <h1
                className="mb-6 text-5xl font-medium leading-[1.02] text-foreground md:text-7xl lg:text-[92px]"
                style={{ fontFamily: "inherit" }}
              >
                Forge real
                <br />
                <em className="italic text-foreground/90">Airbnb</em> portfolios.
              </h1>
              <p className="mb-10 max-w-xl font-sans text-base text-text-secondary md:text-lg">
                A one-stop studio for investors and busy professionals. We source, build, and manage a portfolio of arbitrage and purchase Airbnbs that produces significant, consistent income and tax-advantaged equity, without the operating weight.
              </p>
              <div className="flex flex-col gap-4 font-sans sm:flex-row">
                <Button asChild variant="cta" size="xl" className="group">
                  <Link to="/get-started">
                    Book a call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="ctaOutline" size="xl">
                  <a href="#flywheel">Our approach</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THESIS STRIP */}
        <section className="border-y border-border py-16 md:py-24">
          <div className="section-container grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-primary">0{i + 1}</p>
                <h3 className="mb-3 text-2xl leading-tight text-foreground md:text-3xl" style={{ fontFamily: "inherit" }}>
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary">{p.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDITORIAL SPLIT — THE STUDIO */}
        <section className="py-20 md:py-32">
          <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div {...fadeUp} className="relative aspect-[4/5] overflow-hidden">
              <img
                src={bedroomImage}
                alt="Warm interior bedroom of a short-term rental"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-primary">The studio</p>
              <h2 className="mb-6 text-4xl leading-[1.05] text-foreground md:text-5xl" style={{ fontFamily: "inherit" }}>
                One hands-on team, from first deal to full portfolio.
              </h2>
              <p className="mb-6 font-sans text-base text-text-secondary md:text-lg">
                We work with a small group of investors and busy professionals each quarter. We map your goals, capital, and tax picture, then blend arbitrage and purchase deals into one compounding Airbnb portfolio and run it end to end.
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                200+ units operated. $15M+ in generated revenue. Eight years inside the asset class.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FLYWHEEL — EDITORIAL LIST */}
        <section id="flywheel" className="border-t border-border py-20 md:py-32">
          <div className="section-container">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-primary">The flywheel</p>
              <h2 className="text-4xl leading-[1.05] text-foreground md:text-6xl" style={{ fontFamily: "inherit" }}>
                Find. Build. Manage. Scale.
              </h2>
            </motion.div>

            <div className="divide-y divide-border border-y border-border">
              {flywheel.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="grid grid-cols-[auto_1fr] gap-6 py-8 md:grid-cols-[100px_1fr_2fr] md:gap-12 md:py-10"
                >
                  <p className="font-sans text-sm text-primary md:text-base">{step.n}</p>
                  <h3 className="text-3xl text-foreground md:text-5xl" style={{ fontFamily: "inherit" }}>
                    {step.title}
                  </h3>
                  <p className="col-span-2 font-sans text-base text-text-secondary md:col-span-1 md:text-lg">
                    {step.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRENT OPPORTUNITIES */}
        <section className="py-20 md:py-32">
          <div className="section-container">
            <motion.div {...fadeUp} className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-primary">On the board</p>
                <h2 className="text-4xl leading-[1.05] text-foreground md:text-5xl" style={{ fontFamily: "inherit" }}>
                  Deals we are working now.
                </h2>
              </div>
              <p className="max-w-sm font-sans text-sm text-text-secondary">
                A rotating shortlist of arbitrage and purchase deals across primary US markets. Full underwriting shared under NDA.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {opportunities.map((o, i) => (
                <motion.article
                  key={o.market}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden">
                    <img
                      src={o.image}
                      alt={`${o.market} opportunity`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 border border-border/60 bg-background/70 px-3 py-1 font-sans text-xs uppercase tracking-wider text-foreground backdrop-blur">
                      {o.type}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="mb-1 text-2xl text-foreground" style={{ fontFamily: "inherit" }}>{o.market}</h3>
                      <p className="font-sans text-sm text-text-secondary">{o.note}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETS FOOTPRINT */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="section-container grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <motion.div {...fadeUp}>
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-primary">Where we operate</p>
              <h2 className="text-4xl leading-[1.05] text-foreground md:text-5xl" style={{ fontFamily: "inherit" }}>
                Active markets.
              </h2>
            </motion.div>
            <motion.ul {...fadeUp} className="divide-y divide-border border-y border-border">
              {markets.map((m) => (
                <li key={m} className="flex items-center justify-between py-5">
                  <span className="text-2xl text-foreground md:text-3xl" style={{ fontFamily: "inherit" }}>{m}</span>
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">Live</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden py-24 md:py-36">
          <img
            src={kitchenImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="section-container relative z-10 mx-auto max-w-3xl text-center">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 text-4xl leading-[1.05] text-foreground md:text-6xl" style={{ fontFamily: "inherit" }}>
                Apply to forge your portfolio.
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-sans text-base text-text-secondary md:text-lg">
                A small number of investors and busy professionals each quarter. Hands-on attention from sourcing through operations.
              </p>
              <Button asChild variant="cta" size="xl" className="group font-sans">
                <Link to="/get-started">
                  Book a call
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