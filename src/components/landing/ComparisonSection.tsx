import { motion } from "framer-motion";

const rows = [
  { label: "Pricing", pm: "15-25% + markups", hostop: "$10-20/unit/mo", forge: "2.5-15% (tiered)" },
  { label: "Expense Allocation", pm: "Manual or ignore", hostop: "Manual categorization", forge: "AI learns your logic" },
  { label: "Target", pm: "Homeowners", hostop: "Property managers", forge: "Arbitrage operators" },
  { label: "Intelligence", pm: "None", hostop: "Dashboard", forge: "Derek's 240-unit playbook" },
  { label: "Service Options", pm: "Full-service only", hostop: "Software only", forge: "Software OR Service" },
];

const ComparisonSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Built by an operator who's been there</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated p-4 md:p-8 overflow-x-auto"
        >
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 text-muted-foreground font-medium" />
                <th className="text-center py-3 px-3 text-muted-foreground font-medium">Traditional PMs</th>
                <th className="text-center py-3 px-3 text-muted-foreground font-medium">HostOp</th>
                <th className="text-center py-3 px-3 text-primary font-semibold">STR Forge</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="py-3 pr-4 font-medium text-foreground">{row.label}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.pm}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.hostop}</td>
                  <td className="py-3 px-3 text-center text-foreground font-medium">{row.forge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
