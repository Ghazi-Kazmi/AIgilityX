import React from "react";
import { Building2, Shield, Cpu, Wifi, Briefcase, BookOpen, Users, Activity, Globe, Heart } from "lucide-react";

const audiences = [
  { icon: "Building2", title: "Federal & Provincial Government Leaders", color: "blue" },
  { icon: "Shield", title: "Strategic & Security Institutions", color: "blue" },
  { icon: "Cpu", title: "CIOs, CTOs, CISOs", color: "blue" },
  { icon: "Wifi", title: "Telecom & Infrastructure Leaders", color: "blue" },
  { icon: "Briefcase", title: "Defense & Public Sector Technology Heads", color: "blue" },
  { icon: "BookOpen", title: "Academia & Research Directors", color: "blue" },
  { icon: "Users", title: "AI Policy Experts", color: "blue" },
  { icon: "Activity", title: "Enterprise Transformation Leaders", color: "blue" },
  { icon: "Globe", title: "Board Members & C-Suite Executives", color: "blue" },
  { icon: "Heart", title: "Development Sector & Social Impact Institutions", color: "blue" },
];


const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="summit-role-icon" />,
  Shield: <Shield className="summit-role-icon" />,
  Cpu: <Cpu className="summit-role-icon" />,
  Wifi: <Wifi className="summit-role-icon" />,
  Briefcase: <Briefcase className="summit-role-icon" />,
  BookOpen: <BookOpen className="summit-role-icon" />,
  Users: <Users className="summit-role-icon" />,
  Activity: <Activity className="summit-role-icon" />,
  Globe: <Globe className="summit-role-icon" />,
  Heart: <Heart className="summit-role-icon" />,
};

const mainFeatures = [
  "Full access Day 1 (14:00 – 20:00)",
  "Executive dinner & networking",
  "Ministerial keynote & roundtables",
  "Signature launches & playbook",
  "Invitation-only delegate list",
];

const premiumFeatures = [
  "Everything in Main Summit",
  "Day 2 Board & C-Suite Workshop (30–40 seats)",
  "Chatham House boardroom session",
  "Islamabad Accord drafting",
  "Fellowship founding cohort recognition",
  "Post-summit peer community",
];

const SummitAudienceSection: React.FC = () => (
  <section id="audience" className="summit-section-dark summit-dotted-pattern summit-section-padding">
    <div className="summit-container">
      <div className="summit-audience-top">
        <div className="summit-audience-header-content">
          <span className="summit-section-label blue-accent">NOT A CONFERENCE. A CONVENING.</span>
          <h2 className="summit-audience-title">
            100–150 Decision Makers. <br />
            <span className="primary">One Execution Agenda.</span>
          </h2>
          <div className="summit-title-underline"></div>
          <p className="summit-audience-desc">
            This is not a public tech conference. The summit convenes Pakistan's most senior decision-makers to align on a sovereign AI execution agenda. Every seat at the table carries institutional weight.
          </p>
          <div className="summit-audience-tags">
            <span className="summit-audience-tag">100-150 Participants</span>
            <span className="summit-audience-tag invitation">Invitation Only</span>
            <span className="summit-audience-tag">Multi-Sector Leadership</span>
          </div>
        </div>
        <div className="summit-audience-roles-grid">
          {audiences.map(({ icon, title }, i) => (
            <div key={i} className="summit-audience-role-card">
              <div className="summit-role-icon-wrapper">
                {iconMap[icon]}
              </div>
              <p className="summit-role-text">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="summit-pricing-header">
        <span className="summit-section-label">Join the Summit</span>
        <h2 className="summit-audience-title" style={{ marginTop: "0.5rem" }}>Select Your Participation</h2>
        <p className="summit-audience-desc" style={{ maxWidth: "42rem", margin: "1rem auto 0" }}>
          Choose the main summit only, or the premium package with the exclusive Day 2 workshop (strictly limited to 40 board-level executives).
        </p>
      </div>

      <div className="summit-pricing-grid">
        <div className="summit-glass-card summit-pricing-card">
          <h3 className="plan-name">Main Summit</h3>
          <div className="plan-price">PKR 150,000<span className="tax">+ tax</span></div>
          <div className="summit-pricing-features">
            {mainFeatures.map((f, i) => (
              <div key={i} className="summit-pricing-feature">
                <span>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <a href="#cta" className="summit-pricing-btn secondary">Register for Summit</a>
        </div>

        <div className="summit-glass-card summit-glow-border summit-pricing-card premium">
          <span className="summit-pricing-best-value">Best Value</span>
          <h3 className="plan-name">Premium Package</h3>
          <div className="plan-price">PKR 225,000<span className="tax">+ tax</span></div>
          <div className="summit-pricing-features">
            {premiumFeatures.map((f, i) => (
              <div key={i} className="summit-pricing-feature">
                <span>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <a href="#cta" className="summit-pricing-btn primary">Register for Premium</a>
        </div>
      </div>
    </div>
  </section>
);

export default SummitAudienceSection;
