import { motion } from "framer-motion";
import { Award, Globe, Check } from "lucide-react";

const ProgramSection = () => (
  <section id="program" className="py-24">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="op-card cursor-pointer"
        >
          <div className="op-card-icon">
            <Award className="text-primary" size={24} />
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">Young Future AI Leader Program</h3>
          <span className="op-badge mb-4">
            Certified by AIgilityX USA
          </span>
          <p className="text-muted-foreground">
            Participants gain Sovereign AI Architecture principles, AIgile Mindset™, agentic design methodology, and governance models.{" "}
            <span className="text-foreground font-medium">Selected participants receive AIgilityX™ Young Future AI Leader Recognition</span> — a signal of architecture‑level capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="op-card cursor-pointer"
        >
          <div className="op-card-icon">
            <Globe className="text-primary" size={24} />
          </div>
          <h3 className="font-display text-2xl font-bold mb-4">Why Global Opportunities — GCC — Are Knocking</h3>
          <p className="text-muted-foreground mb-4">GCC nations invest billions in national AI strategies, digital sovereignty, and smart cities. Demand soars for:</p>
          <ul className="space-y-2">
            {["Sovereign AI Architects", "Agentic Workflow Designers", "AI Governance Specialists", "Enterprise AI Transformation Leads"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <Check className="text-primary shrink-0" size={16} /> {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground font-medium mt-4">AIgilityX™ positions you at that intersection.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProgramSection;