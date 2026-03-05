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
            // Cards still have NO border and keep the cyan hover glow
            className="bg-card border-0 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
          >
            <c.icon className="text-primary mb-4" size={40} />
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
        // 🚀 CHANGED: Added a subtle cyan border that brightens on hover!
        className="text-center text-lg font-medium mt-12 py-5 px-8 rounded-full bg-secondary/50 border border-solid border-[#0d97c9] border-opacity-30 transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_30px_#0d97c9]"
      >
        <span className="accent-glow">Sovereign Agentic AI is the new leadership layer.</span>{" "}
        AIgilityX™ 2026 builds architects — not just coders.
      </motion.p>
    </div>
  </section>
);

export default ImperativeSection;