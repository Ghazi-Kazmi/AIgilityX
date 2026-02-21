import { motion } from "framer-motion";
import { Handshake, Star, Crown, Check } from "lucide-react";
import "./PartnersSection.css"; // Ensure you import the CSS file

const tiers = [
  {
    name: "Silver",
    tierClass: "tier-silver",
    benefits: ["Logo on website", "Social media mention", "1 mentorship slot"],
  },
  {
    name: "Gold",
    tierClass: "tier-gold",
    benefits: ["All Silver benefits", "Keynote opportunity", "3 mentorship slots", "Recruitment access"],
  },
  {
    name: "Platinum",
    tierClass: "tier-platinum",
    benefits: ["All Gold benefits", "Premium logo placement", "Workshop hosting", "Career fair booth", "Custom package available"],
  },
];

const PartnersSection = () => (
  <section id="partners" className="partners-section">
    <div className="partners-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="partners-heading"
      >
        Partners & Sponsors
      </motion.h2>
      <p className="partners-subheading lg-text">
        Join academic institutions, industry leaders, government bodies, tech providers, and open‑source communities to build sovereign AI ecosystems.
      </p>
      <p className="partners-subheading sm-text mb-12">
        Access top AI talent, gain brand exposure, influence the direction of ethical AI in Pakistan, and discover recruiting opportunities. Engage through workshops, API demos, career fairs and data challenge sponsorship.
      </p>

      <div className="partners-grid">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`tier-card ${t.tierClass}`}
          >
            <Crown className="tier-icon" size={32} />
            <h3 className="tier-name">{t.name}</h3>
            <ul className="tier-benefits">
              {t.benefits.map((b) => (
                <li key={b} className="benefit-item">
                  <Check className="benefit-icon" size={14} /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Styled Buttons Wrapper */}
      <div className="partners-actions">
        <a href="#" className="partner-btn">
          <Handshake size={18} /> Partner With Us
        </a>
        <a href="#" className="partner-btn">
          <Star size={18} /> Sponsor the Future
        </a>
      </div>
    </div>
  </section>
);

export default PartnersSection;