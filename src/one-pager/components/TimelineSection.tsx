import { motion } from "framer-motion";

const topTimelineSteps = [
  { id: "1", title: "Bootcamp" },
  { id: "2", title: "Build" },
  { id: "3", title: "Validate" },
  { id: "4", title: "Deploy" },
  { id: "5", title: "Present" },
];

const phases = [
  {
    num: "1",
    title: "Phase 1 — AIgilityX™ Fellowship",
    date: "Onsite | 3 April",
    desc: "Immersive masterclasses: Sovereign AI strategy, agentic architecture, AIgile Mindset™, challenge briefing & team formation.",
  },
  {
    num: "2",
    title: "Phase 2 — Remote Build Sprint",
    date: "4 & 5 April",
    desc: "Working prototype + Sovereign AI Blueprint + Agentic workflow + Governance mapping.",
  },
  {
    num: "3",
    title: "Phase 3 — People's Choice + Jury",
    date: "5 April",
    desc: "Community & expert review. Awards: Most Sovereign Design, Best Enterprise-Ready Architecture, Most Scalable Agentic System, Social Impact, People's Choice.",
  },
  {
    num: "4",
    title: "Phase 4 — Grand Finale",
    date: "Onsite | 6 April",
    desc: "Live presentations to industry leaders, enterprise decision‑makers, government stakeholders. Keynote, awards, partnership announcements.",
  },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 bg-secondary/20">
    <div className="container">
      
      {/* ==========================================
          PROGRESS TIMELINE
      ========================================== */}
      <div className="relative w-full max-w-4xl mx-auto mb-20 hidden md:block">
        {/* The Gradient Connecting Line */}
        <div className="absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#38bdf8] via-[#fbbf24] to-[#38bdf8] z-0 -translate-y-1/2 opacity-70" />
        
        {/* The Steps Container */}
        <motion.div 
          className="w-full flex justify-between relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {topTimelineSteps.map((step) => (
            <motion.div 
              key={step.id} 
              className="flex flex-col items-center w-24"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 15 },
                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
            >
              {/* Circle - UPDATED: text-primary changed to text-white */}
              <div className="w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center font-display text-xl font-extrabold text-white mb-3 shadow-lg">
                {step.id}
              </div>
              {/* Label */}
              <div className="font-display font-semibold text-sm text-center text-foreground">
                {step.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ==========================================
          EVENT EXPERIENCE GRID
      ========================================== */}
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
            {/* Circle - UPDATED: text-primary changed to text-white */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center font-display text-xl font-extrabold text-white">
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