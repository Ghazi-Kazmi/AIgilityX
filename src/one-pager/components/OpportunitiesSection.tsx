import { motion } from "framer-motion";
import { Users, Newspaper, Cpu, Megaphone, TrendingUp } from "lucide-react";

const opportunities = [
  {
    icon: Users,
    title: "Volunteers",
    desc: "Help with logistics, registration, moderation and documentation. Short flexible shifts with perks like meals and certificates.",
  },
  {
    icon: Newspaper,
    title: "Media Partners",
    desc: "Cover the hackathon with behind‑the‑scenes access. Bloggers, content creators and media outlets welcome.",
  },
  {
    icon: Cpu,
    title: "Technology Providers",
    desc: "Contribute APIs, toolkits or cloud credits to empower participating teams.",
  },
  {
    icon: Megaphone,
    title: "Community Ambassadors",
    desc: "Promote the hackathon through your network. Recruit community leaders and influencers.",
  },
  {
    icon: TrendingUp,
    title: "Incubation & Funding Partners",
    desc: "Accelerators, venture funds and impact investors supporting winning teams post‑hackathon.",
  },
];

const OpportunitiesSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold relative inline-block section-heading mb-14"
      >
        Additional Opportunities
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {opportunities.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-card-glow transition-all"
          >
            <o.icon className="text-primary mb-3" size={32} />
            <h3 className="font-display text-lg font-bold mb-2">{o.title}</h3>
            <p className="text-sm text-muted-foreground">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OpportunitiesSection;
