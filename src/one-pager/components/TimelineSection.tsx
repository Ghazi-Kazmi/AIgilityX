import { motion } from "framer-motion";

const phases = [
  {
    num: "1",
    title: "Phase 1 — AIgilityX™ Fellowship",
    date: "Onsite | 26 March",
    desc: "Immersive masterclasses: Sovereign AI strategy, agentic architecture, AIgile Mindset™, challenge briefing & team formation.",
  },
  {
    num: "2",
    title: "Phase 2 — Remote Build Sprint",
    date: "27–29 March",
    desc: "Working prototype + Sovereign AI Blueprint + Agentic workflow + Governance mapping.",
  },
  {
    num: "3",
    title: "Phase 3 — People's Choice + Jury",
    date: "30 Mar – 1 Apr",
    desc: "Community & expert review. Awards: Most Sovereign Design, Best Enterprise-Ready Architecture, Most Scalable Agentic System, Social Impact, People's Choice.",
  },
  {
    num: "4",
    title: "Phase 4 — Grand Finale",
    date: "Onsite | 2 April",
    desc: "Live presentations to industry leaders, enterprise decision‑makers, government stakeholders. Keynote, awards, partnership announcements.",
  },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 bg-secondary/20">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold relative inline-block section-heading mb-14"
      >
        Event Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {phases.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-5 items-start"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center font-display text-xl font-extrabold text-primary">
              {p.num}
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="text-primary text-sm font-medium mb-1">{p.date}</p>
              <p className="text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
