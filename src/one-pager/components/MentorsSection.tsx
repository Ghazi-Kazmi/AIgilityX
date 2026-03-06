import { motion } from "framer-motion";
import { UserCheck, Brain, Clock, BookOpen } from "lucide-react";

const roles = [
  {
    icon: UserCheck,
    title: "Mentors",
    desc: "Assist teams with scoping, feasibility and best practices. Provide technical guidance across front‑end, back‑end and machine learning. Maintain an inclusive, supportive environment.",
    commitment: "Flexible — office hours or full sprint",
  },
  {
    icon: Brain,
    title: "Judges",
    desc: "Evaluate prototypes using a structured rubric covering architecture depth, agentic autonomy, governance and scalability. Offer constructive feedback and help select winners.",
    commitment: "Required onsite for Grand Finale (2 April)",
  },
];

const expertise = [
  "AI & Machine Learning",
  "Data Science & Engineering",
  "Ethics & Governance",
  "UX/UI Design",
  "Entrepreneurship",
  "Domain Knowledge (Health, Finance, Gov)",
];

const MentorsSection = () => (
  <section id="mentors" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold relative inline-block section-heading mb-14"
      >
        Mentors & Judges
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {roles.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            // 🚀 CHANGED: Removed borders, added border-0, added hover lift and cyan glow
            className="bg-card border-0 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
          >
            <r.icon className="text-primary mb-4" size={40} />
            <h3 className="font-display text-2xl font-bold mb-3">{r.title}</h3>
            <p className="text-muted-foreground mb-4">{r.desc}</p>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Clock size={14} /> {r.commitment}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        // 🚀 CHANGED: Removed borders from the bottom banner, added hover glow
        className="mt-10 bg-card/60 border-0 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-primary" size={24} />
          <h3 className="font-display text-xl font-bold">Expertise We're Looking For</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {expertise.map((e) => (
            // 🚀 CHANGED: Removed the white border from the pill badges for a cleaner look
            <span key={e} className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium border-0">
              {e}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          Optional orientation sessions will be provided before the event to clarify expectations and the judging rubric.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MentorsSection;