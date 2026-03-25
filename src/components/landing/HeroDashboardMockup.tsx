import { motion } from "framer-motion";
import {
  DollarSign, BarChart3, Bot, TrendingUp, MessageSquare,
  Search, Phone, MapPin, Star, ArrowUpRight, CheckCircle, Clock,
} from "lucide-react";

/* ─── Operations Dashboard Data ─── */
const opsStats = [
  { label: "Unit #3 P&L", value: "+$2,140", icon: DollarSign, trend: "+12%" },
  { label: "Occupancy", value: "87%", icon: BarChart3, trend: "+5%" },
  { label: "AI Actions", value: "12 today", icon: Bot, trend: "" },
];

/* ─── Acquisitions Dashboard Data ─── */
const deals = [
  { address: "1847 Elm St, Austin TX", score: 92, cashflow: "+$1,840/mo", risk: "Low" },
  { address: "309 Oak Ave, Nashville TN", score: 78, cashflow: "+$1,220/mo", risk: "Med" },
  { address: "5612 Pine Rd, Denver CO", score: 85, cashflow: "+$1,560/mo", risk: "Low" },
];

const outreachStats = [
  { label: "Calls Made", value: "47", icon: Phone, status: "This week" },
  { label: "Meetings Set", value: "8", icon: CheckCircle, status: "Confirmed" },
  { label: "Follow-ups", value: "12", icon: Clock, status: "Pending" },
];

/* ─── Shared Animation ─── */
const barDelay = (base: number) => (i: number) => base + i * 0.05;

export default function HeroDashboardMockup() {
  return (
    <div className="relative mt-16 max-w-5xl mx-auto space-y-6">
      {/* Glow behind dashboards */}
      <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-[60px] pointer-events-none" />

      {/* ═══ Operations Dashboard ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl p-5 md:p-6 space-y-4 shadow-lg"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-xs font-medium text-foreground">STR Forge Operations Dashboard</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {opsStats.map((stat, i) => (
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
          <div className="rounded-lg bg-secondary/30 border border-border/30 p-4">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-3">Revenue (30d)</p>
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/40 rounded-sm"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: barDelay(0.9)(i), duration: 0.4, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

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
      </motion.div>

      {/* ═══ Acquisitions Dashboard ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl p-5 md:p-6 space-y-4 shadow-lg"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-xs font-medium text-foreground">STR Forge Acquisitions Dashboard</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
          </div>
        </div>

        {/* Two-column: Deal Analyzer + Negotiator */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* DealForge — Deal Analyzer */}
          <div className="rounded-lg bg-secondary/30 border border-border/30 p-4 space-y-3">
            <div className="flex items-center gap-1.5">
              <Search className="w-3 h-3 text-primary" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">DealForge — Top Deals</p>
            </div>
            <div className="space-y-2">
              {deals.map((deal, i) => (
                <motion.div
                  key={deal.address}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.12, duration: 0.4 }}
                  className="flex items-center justify-between p-2.5 rounded-md bg-card/60 border border-border/20"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-3 h-3 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[11px] text-foreground truncate">{deal.address}</p>
                      <p className="text-[10px] text-muted-foreground">{deal.cashflow}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      deal.risk === "Low" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      {deal.risk}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 text-primary" />
                      <span className="text-[11px] font-semibold text-foreground">{deal.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Negotiator — Outreach */}
          <div className="rounded-lg bg-secondary/30 border border-border/30 p-4 space-y-3">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-primary" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">The Negotiator — Outreach</p>
            </div>

            {/* Outreach stats */}
            <div className="grid grid-cols-3 gap-2">
              {outreachStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                  className="p-2 rounded-md bg-card/60 border border-border/20 text-center"
                >
                  <stat.icon className="w-3 h-3 text-primary mx-auto mb-1" />
                  <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                  <p className="text-[9px] text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent activity feed */}
            <div className="space-y-1.5">
              {[
                { text: "Called John Martinez — Tour scheduled for Friday", time: "2m ago", success: true },
                { text: "Sent follow-up SMS to 4 landlords", time: "18m ago", success: true },
                { text: "Voicemail left for 1847 Elm St owner", time: "1h ago", success: false },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.35 }}
                  className="flex items-start gap-2 p-2 rounded-md bg-card/40 border border-border/15"
                >
                  <ArrowUpRight className={`w-3 h-3 mt-0.5 shrink-0 ${activity.success ? "text-green-400" : "text-muted-foreground"}`} />
                  <div className="min-w-0">
                    <p className="text-[10px] text-text-secondary leading-snug">{activity.text}</p>
                    <p className="text-[9px] text-muted-foreground">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
