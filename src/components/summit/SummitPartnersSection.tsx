import React, { useState } from "react";
import { ShieldHalf, Rocket, BookOpen, Wifi, Shield, FileText, Building, Flame, GraduationCap, ArrowRight } from "lucide-react";

const tiers = ["All Partners", "Strategic Sponsor", "Knowledge Partner", "Institutional Partner"];

const partners = [
  { name: "National AI Authority", tier: "Gold", display: "★ Gold Tier", icon: <ShieldHalf className="partner-logo-svg" /> },
  { name: "Digital Pakistan Ventures", tier: "Gold", display: "★ Gold Tier", icon: <Rocket className="partner-logo-svg" /> },
  { name: "NUST — AI Research Centre", tier: "Silver", display: "Silver Tier", icon: <BookOpen className="partner-logo-svg" /> },
  { name: "PTA — Digital Infrastructure", tier: "Silver", display: "Silver Tier", icon: <Wifi className="partner-logo-svg" /> },
  { name: "NCCS — Cybersecurity", tier: "Silver", display: "Silver Tier", icon: <Shield className="partner-logo-svg" /> },
  { name: "AI Policy Institute", tier: "Bronze", display: "Bronze Tier", icon: <FileText className="partner-logo-svg" /> },
  { name: "e-Government AI Division", tier: "Bronze", display: "Bronze Tier", icon: <Building className="partner-logo-svg" /> },
  { name: "Ignite National Tech Fund", tier: "Bronze", display: "Bronze Tier", icon: <Flame className="partner-logo-svg" /> },
  { name: "COMSATS AI Lab", tier: "Bronze", display: "Bronze Tier", icon: <GraduationCap className="partner-logo-svg" /> },
];

const SummitPartnersSection: React.FC = () => {
  const [filter, setFilter] = useState("All Partners");
  // The original component didn't implement the filtering logic but prepared the state.
  const filtered = filter === "All Partners" ? partners : partners.filter(p => {
    if (filter === "Strategic Sponsor" && p.tier === "Gold") return true;
    if (filter === "Knowledge Partner" && p.tier === "Silver") return true;
    if (filter === "Institutional Partner" && p.tier === "Bronze") return true;
    return false;
  });

  return (
    <section id="partners" className="summit-section-dark summit-section-padding">
      <div className="summit-container">
        <div className="summit-section-header">
          <span className="summit-section-label">Our Summit Partners</span>
          <h2 className="summit-section-title white">
            Institutions Shaping Pakistan's <span className="blue-accent">Sovereign AI Future</span>
          </h2>
          <p className="summit-section-desc white">
            Strategic partners, knowledge institutions, and sovereign AI champions committed to Pakistan's national AI transformation agenda.
          </p>
          <div className="summit-partners-filters">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`summit-partners-filter-btn ${filter === t ? "active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="summit-partners-grid">
          {filtered.map((p, i) => {
            const tierClass = p.tier.toLowerCase();
            return (
              <div key={i} className={`summit-glass-card summit-partner-card ${tierClass}-border`}>
                <div className="summit-partner-logo">
                  <div className="logo-white-circle">
                    {p.icon}
                  </div>
                </div>
                <p className="summit-partner-name">{p.name}</p>
              </div>
            );
          })}
        </div>

        <div className="summit-partners-status-bar">
          <div className="status-bar-content">
            <span className="status-dot"></span>
            <p>Partnership slots are limited. <span className="blue-accent">Your logo could be here.</span></p>
          </div>
          <a href="#cta" className="summit-btn-primary-blue">
            Become a Strategic Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default SummitPartnersSection;
