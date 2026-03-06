import { motion } from "framer-motion";
import { Database, Bot, Lock, GitBranch } from "lucide-react";

const pillars = [
  { icon: Database, label: "Sovereign Data Architecture" },
  { icon: Bot, label: "Agentic Decision Systems" },
  { icon: Lock, label: "Zero‑Trust AI Governance" },
  { icon: GitBranch, label: "Enterprise Integration Blueprint" },
];

const DifferenceSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="op-card op-card-feature">
        <span className="op-badge mb-6">
          ✦ ARCHITECTURE FIRST
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Why This Hackathon Is Different</h2>
        <p className="text-xl text-muted-foreground mb-10">
          Most hackathons reward demos. <span className="text-foreground font-semibold">We reward architecture.</span>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="op-card op-card-compact flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
            >
              <div className="op-card-icon !mb-0">
                <p.icon className="text-primary" size={28} />
              </div>
              <span className="font-bold">{p.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 text-center">
          All submissions follow the <span className="text-foreground font-semibold">AIgilityX™ Sovereign AI Framework</span> — strategic, scalable & responsible.
        </p>
      </div>
    </div>
  </section>
);

export default DifferenceSection;