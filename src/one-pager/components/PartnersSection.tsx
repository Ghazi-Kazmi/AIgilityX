import { motion } from "framer-motion";
import { Crown, BookOpen, GraduationCap, Handshake } from "lucide-react";

const partnerTypes = [
  {
    name: "Strategic Partner",
    icon: Crown,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    bulletColor: "bg-amber-400",
    benefits: [
      "Premium placement & branding rights",
      "Keynote speaking opportunity",
      "Logo on all event materials",
      "Direct access to top teams",
    ],
  },
  {
    name: "Knowledge Partner",
    icon: BookOpen,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    bulletColor: "bg-blue-400",
    benefits: [
      "Bootcamp collaboration",
      "Mentor slots allocation",
      "Content co-creation",
      "Research partnership",
    ],
  },
  {
    name: "Institutional Partner",
    icon: GraduationCap,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    bulletColor: "bg-emerald-400",
    benefits: [
      "Student nominations",
      "Academic collaboration",
      "Joint certification",
      "Campus engagement",
    ],
  },
];

interface PartnersSectionProps {
  onPartnerClick: () => void;
}

const PartnersSection = ({ onPartnerClick }: PartnersSectionProps) => (
  <section id="partners" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Partnership
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Sponsors & <span className="text-primary">Partners</span>
          </h2>

          <div className="h-1.5 w-32 bg-gradient-to-r from-[#38bdf8] to-[#fbbf24] mx-auto rounded-full mb-8" />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {partnerTypes.map((partner, i) => {
          const Icon = partner.icon;
          return (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border-0 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${partner.iconBg}`}>
                <Icon className={partner.iconColor} size={28} />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-6">
                {partner.name}
              </h3>

              <ul className="space-y-4">
                {partner.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-muted-foreground font-medium text-sm lg:text-base">
                    <span className={`w-2 h-2 rounded-full mr-3 shrink-0 ${partner.bulletColor}`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button
          onClick={onPartnerClick}
          className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform flex items-center gap-2 border-none cursor-pointer"
        >
          <Handshake size={20} /> Partner With Us
        </button>
      </motion.div>
    </div>
  </section>
);

export default PartnersSection;
