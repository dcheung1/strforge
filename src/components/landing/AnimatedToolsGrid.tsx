import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Search, DollarSign, Phone, Handshake,
  Brain, Zap, Hammer, Settings,
} from "lucide-react";

const toolItems = [
  {
    title: "DealForge",
    description: "Analyze any rental arbitrage deal instantly with proprietary scoring. Chrome extension evaluates properties while you browse.",
    icons: [Search, DollarSign],
    label: "Deal Analysis",
  },
  {
    title: "The Negotiator",
    description: "AI makes calls, sends texts, schedules tours, and follows up automatically. Nobody else has this.",
    icons: [Phone, Handshake],
    label: "AI Outreach",
  },
  {
    title: "AI CEO",
    description: "An agent that monitors your business 24/7. Learns expense allocation, flags issues, automates guest comms.",
    icons: [Brain, Zap],
    label: "Operations AI",
  },
  {
    title: "The Foundry",
    description: "AI website builder creates your direct booking site in minutes. Plus business setup automation.",
    icons: [Hammer, Settings],
    label: "Launch Tools",
  },
];

/* Icon that draws its stroke path on hover via CSS */
const DrawIcon = ({ Icon, delay }: { Icon: typeof Search; delay: number }) => (
  <div
    className="draw-icon"
    style={{ "--draw-delay": `${delay}s` } as React.CSSProperties}
  >
    <Icon className="w-7 h-7 text-primary" />
  </div>
);

const ToolCard = ({ item, index }: { item: typeof toolItems[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
    className={`group ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
  >
    <div className="h-full rounded-xl bg-card border border-border/50 p-5 flex flex-col space-y-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]">
      {/* Icon header */}
      <div className="flex items-center gap-3 p-5 rounded-lg bg-secondary/30 border border-border/30 min-h-[5rem]">
        {item.icons.map((Icon, j) => (
          <DrawIcon key={j} Icon={Icon} delay={j * 0.15} />
        ))}
      </div>

      {/* Content */}
      <div>
        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
          {item.label}
        </span>
        <div className="font-bold text-foreground mb-2 mt-2">{item.title}</div>
        <div className="text-text-secondary text-xs leading-relaxed">{item.description}</div>
      </div>
    </div>
  </motion.div>
);

export default function AnimatedToolsGrid() {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Build, Launch, and Scale
            </span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Use them yourself, or let us run them for you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:auto-rows-[18rem]">
          {toolItems.map((item, i) => (
            <ToolCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/tools">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button variant="ctaOutline" size="lg" className="group">
                Explore All Tools
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
