import { motion } from "framer-motion";
import { ShieldAlert, Building2, Zap } from "lucide-react";

const cards = [
  {
    icon: ShieldAlert,
    title: "National Risk",
    items: ["Data dependency & regulatory exposure", "Strategic vulnerability", "Loss of digital autonomy"],
  },
  {
    icon: Building2,
    title: "Enterprise Crisis",
    items: ["Vendor lock‑in & compliance gaps", "Security fragmentation", "Competitive erosion"],
  },
  {
    icon: Zap,
    title: "The Solution",
    items: ["Data‑Sovereign AI systems", "Autonomous Agentic Workflows", "Architecture‑first leadership"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const ImperativeSection = () => (
  <section id="imperative" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold relative inline-block section-heading mb-12"
      >
        Sovereign AI: A National & Enterprise Imperative
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="op-card cursor-pointer"
          >
            <div className="op-card-icon">
              <c.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">{c.title}</h3>
            <ul className="space-y-3">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1 shrink-0">⚠</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-lg font-medium mt-12 op-cta-banner"
      >
        <span className="accent-glow">Sovereign Agentic AI is the new leadership layer.</span>{" "}
        AIgilityX™ 2026 builds architects — not just coders.
      </motion.p>
    </div>
  </section>
);

export default ImperativeSection;