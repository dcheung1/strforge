import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
    title: "The Bellows",
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

/* Animated border that traces around the card */
const GlowingBorder = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute inset-0 rounded-xl pointer-events-none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: delay + 0.5, duration: 0.8 }}
  >
    {/* Rotating conic gradient border */}
    <motion.div
      className="absolute inset-[-1px] rounded-xl"
      style={{
        background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)) 10%, transparent 40%)",
        maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        padding: "1px",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay }}
    />
  </motion.div>
);

/* Floating particles inside the card header */
const Particles = ({ count = 12 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden rounded-xl">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30 - Math.random() * 40, 0],
          x: [0, (Math.random() - 0.5) * 30, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* 3D tilt card that follows mouse */
const TiltCard = ({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 80, scale: 0.85, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* Animated icon with pulse ring */
const AnimatedIcon = ({ Icon, delay }: { Icon: typeof Search; delay: number }) => (
  <div className="relative">
    <motion.div
      className="absolute inset-0 rounded-full bg-primary/20 blur-md"
      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}
    />
    <motion.div
      initial={{ scale: 0, rotate: -90 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: delay + 0.3 }}
    >
      <Icon className="w-8 h-8 text-primary relative z-10" />
    </motion.div>
  </div>
);

export default function AnimatedToolsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);

  return (
    <section ref={sectionRef} className="section-spacing relative overflow-hidden">
      {/* Scroll-linked background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[200px] pointer-events-none"
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[150px] pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0]),
        }}
      />

      {/* Grid lines that appear on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.15, 0.15, 0]) }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.h2
            className="text-foreground mb-4"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            AI tools that run your{" "}
            <span className="text-muted-foreground">Airbnb business</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Use them yourself, or let us run them for you.
          </motion.p>
        </motion.div>

        {/* Bento grid with 3D tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:auto-rows-[20rem]">
          {toolItems.map((item, i) => (
            <TiltCard
              key={i}
              index={i}
              className={`${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
            >
              <div className="relative h-full rounded-xl bg-card border border-border/50 p-4 flex flex-col space-y-4 group overflow-hidden cursor-default">
                <GlowingBorder delay={i * 0.4} />

                {/* Hover glow burst */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />

                {/* Icon header with particles */}
                <div className="relative flex items-center gap-3 p-6 rounded-xl bg-secondary/30 border border-border/30 min-h-[6rem] overflow-hidden">
                  <Particles count={8} />
                  {item.icons.map((Icon, j) => (
                    <AnimatedIcon key={j} Icon={Icon} delay={i * 0.2 + j * 0.15} />
                  ))}
                </div>

                {/* Text content with staggered reveal */}
                <div className="group-hover:translate-x-2 transition duration-300">
                  <motion.span
                    className="text-xs text-primary font-semibold uppercase tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4, duration: 0.5 }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    className="font-bold text-foreground mb-2 mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.div>
                  <motion.div
                    className="font-normal text-text-secondary text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.6, duration: 0.5 }}
                  >
                    {item.description}
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/tools">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
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
