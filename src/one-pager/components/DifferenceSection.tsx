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
      {/* 🚀 CHANGED: Swapped the border classes for border-0 to completely remove the white line */}
      <div 
        className="bg-card/60 rounded-3xl p-8 sm:p-12 transition-all duration-500 hover:bg-[#0d97c9]/10 border-0 hover:shadow-[0_0_40px_#0d97c9]" 
        style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsl(186 95% 73% / 0.04) 0%, transparent 50%)" }}
      >
        {/* 🚀 CHANGED: Also applied border-0 here for total consistency */}
        <span className="inline-block bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border-0 mb-6">
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
              // Small inner cards keep their lift and glow!
              className="flex flex-col items-center justify-center text-center gap-4 bg-card border-0 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
            >
              <p.icon className="text-primary" size={48} />
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