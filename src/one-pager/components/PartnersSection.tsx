import { motion } from "framer-motion";
import { Handshake, Star, Crown, Check } from "lucide-react";

const tiers = [
  {
    name: "Silver",
    color: "text-muted-foreground",
    borderColor: "border-border",
    benefits: ["Logo on website", "Social media mention", "1 mentorship slot"],
  },
  {
    name: "Gold",
    color: "text-gold",
    borderColor: "border-gold/50",
    benefits: ["All Silver benefits", "Keynote opportunity", "3 mentorship slots", "Recruitment access"],
  },
  {
    name: "Platinum",
    color: "text-primary",
    borderColor: "border-primary/50",
    benefits: ["All Gold benefits", "Premium logo placement", "Workshop hosting", "Career fair booth", "Custom package available"],
  },
];

const PartnersSection = () => (
  <section id="partners" className="py-24 bg-secondary/20">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-6"
      >
        Partners & Sponsors
      </motion.h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 text-center">
        Join academic institutions, industry leaders, government bodies, tech providers, and open‑source communities to build sovereign AI ecosystems.
      </p>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-center text-sm">
        Access top AI talent, gain brand exposure, influence the direction of ethical AI in Pakistan, and discover recruiting opportunities. Engage through workshops, API demos, career fairs and data challenge sponsorship.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-card border ${t.borderColor} rounded-2xl p-6 text-center hover:shadow-card-glow transition-all`}
          >
            <Crown className={`${t.color} mx-auto mb-3`} size={32} />
            <h3 className={`font-display text-xl font-bold mb-4 ${t.color}`}>{t.name}</h3>
            <ul className="space-y-2 text-left">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="text-primary shrink-0 mt-0.5" size={14} /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="bg-secondary text-foreground border border-border px-7 py-3 rounded-full font-semibold hover:bg-secondary/80 transition flex items-center gap-2">
          <Handshake size={18} /> Partner With Us
        </a>
        <a href="#" className="bg-secondary text-foreground border border-border px-7 py-3 rounded-full font-semibold hover:bg-secondary/80 transition flex items-center gap-2">
          <Star size={18} /> Sponsor the Future
        </a>
      </div>
    </div>
  </section>
);

export default PartnersSection;
