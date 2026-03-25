import { motion } from "framer-motion";
import { DollarSign, BarChart3, Bot, TrendingUp, MessageSquare } from "lucide-react";

const stats = [
  { label: "Unit #3 P&L", value: "+$2,140", icon: DollarSign, trend: "+12%" },
  { label: "Occupancy", value: "87%", icon: BarChart3, trend: "+5%" },
  { label: "AI Actions", value: "12 today", icon: Bot, trend: "" },
];

export default function HeroDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative mt-16 max-w-4xl mx-auto"
    >
      {/* Glow behind dashboard */}
      <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-[60px] pointer-events-none" />

      {/* Dashboard container */}
      <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl p-5 md:p-6 space-y-4 shadow-lg">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-xs font-medium text-foreground">STR Forge Dashboard</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              className="p-3 rounded-lg bg-secondary/50 border border-border/30"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-4 h-4 text-primary" />
                {stat.trend && (
                  <span className="text-[10px] text-primary flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {stat.trend}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Two-column bottom: Chart + AI Agent */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Mini chart placeholder */}
          <div className="rounded-lg bg-secondary/30 border border-border/30 p-4">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-3">Revenue (30d)</p>
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/40 rounded-sm"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.9 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* AI Agent chat */}
          <div className="rounded-lg bg-secondary/30 border border-border/30 p-4 space-y-2.5">
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3 text-primary" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">AI Agent</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="bg-card/80 p-2.5 rounded-md border border-border/30 text-[11px] text-text-secondary leading-relaxed"
            >
              That Costco run ($247) covers Units #3 and #5. I split it 60/40 based on your usual pattern.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="bg-primary/10 p-2.5 rounded-md border border-primary/20 text-[11px] text-foreground leading-relaxed"
            >
              Unit #5 had 3 WiFi complaints. Fix now or risk Superhost status.
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
