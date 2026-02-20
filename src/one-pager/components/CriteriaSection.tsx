import { motion } from "framer-motion";

const criteria = [
  { label: "Architecture Depth", pct: "35%", desc: "Quality of Sovereign Data layers" },
  { label: "Agentic Autonomy", pct: "25%", desc: "Intelligence of decision workflows" },
  { label: "Governance", pct: "20%", desc: "Zero‑trust and local compliance" },
  { label: "Scalability", pct: "20%", desc: "GCC & global market fit potential" },
];

const CriteriaSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold relative inline-block section-heading mb-12"
      >
        Selection Criteria
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {criteria.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors"
          >
            <p className="text-4xl font-display font-black text-primary mb-2">{c.pct}</p>
            <h3 className="font-display text-lg font-bold mb-1">{c.label}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CriteriaSection;
