import { motion } from "framer-motion";
import { Crown, BookOpen, GraduationCap, Handshake, Star } from "lucide-react";

const partnerTypes = [
  {
    name: "Strategic Partner",
    icon: Crown,
    // Dark mode friendly Amber
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
    // Dark mode friendly Blue (replaced indigo for better contrast)
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
    // Dark mode friendly Emerald
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

const PartnersSection = () => (
  // Restored dark background wrapper
  <section id="partners" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-4 max-w-6xl">
      
      {/* Header Area */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Partnership Pill Badge - Adapted for dark theme */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Partnership
          </span>
          
          {/* Main Heading - White text with primary accent */}
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Sponsors & <span className="text-primary">Partners</span>
          </h2>
          
          {/* Gradient Underline matching Timeline */}
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#38bdf8] to-[#fbbf24] mx-auto rounded-full mb-8" />
        </motion.div>
      </div>

      {/* Cards Grid */}
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
              // Dark theme cards with subtle glow on hover
              className="bg-secondary/40 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300"
            >
              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${partner.iconBg}`}>
                <Icon className={partner.iconColor} size={28} />
              </div>
              
              {/* Card Title - White */}
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                {partner.name}
              </h3>
              
              {/* Benefits List - Muted text */}
              <ul className="space-y-4">
                {partner.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-muted-foreground font-medium text-sm lg:text-base">
                    {/* Colored Dot */}
                    <span className={`w-2 h-2 rounded-full mr-3 shrink-0 ${partner.bulletColor}`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Action Buttons - Restored your original dark theme button styles */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#partner-with-us" className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform flex items-center gap-2">
          <Handshake size={20} /> Partner With Us
        </a>
        <a href="#sponsor-future" className="border border-border text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition-colors flex items-center gap-2">
          <Star size={20} /> Sponsor the Future
        </a>
      </motion.div>

    </div>
  </section>
);

export default PartnersSection;