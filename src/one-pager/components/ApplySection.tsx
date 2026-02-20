import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, PenTool, CheckCircle, Users, Rocket } from "lucide-react";

const eligibility = [
  { icon: GraduationCap, text: "Final‑year graduates (AI, CS, Data, Cybersecurity)" },
  { icon: Briefcase, text: "Young professionals (1–5 years experience)" },
  { icon: Cpu, text: "AI/ML engineers, system architects" },
  { icon: PenTool, text: "Product designers, governance & policy thinkers" },
];

const gains = [
  "Architecture‑first AI capability",
  "Exposure to enterprise transformation models",
  "Recognition aligned with AIgilityX USA standards",
  "Strategic positioning for GCC & global AI markets",
  "Network of mentors & ecosystem builders",
];

const ApplySection = () => (
  <section className="py-24 bg-secondary/20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card/60 border border-border rounded-2xl p-8 mb-8 text-center"
      >
        <h3 className="font-display text-2xl font-bold mb-3">Application Process</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Submit your team portfolio and project intent. Teams undergo a technical screening for fellowship shortlisting.
          The hackathon focuses on moving participants from <span className="text-foreground font-semibold">AI users to AI architects</span>.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <Users className="text-primary mb-4" size={40} />
          <h3 className="font-display text-2xl font-bold mb-6">Who Should Apply</h3>
          <ul className="space-y-4">
            {eligibility.map((e) => (
              <li key={e.text} className="flex items-center gap-3 text-muted-foreground">
                <e.icon className="text-primary shrink-0" size={20} /> {e.text}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-foreground font-medium">
            Move from "AI user" to <span className="text-primary font-bold">AI architect</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <Rocket className="text-primary mb-4" size={40} />
          <h3 className="font-display text-2xl font-bold mb-6">What You Gain</h3>
          <ul className="space-y-4">
            {gains.map((g) => (
              <li key={g} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="text-primary shrink-0" size={18} /> {g}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ApplySection;
