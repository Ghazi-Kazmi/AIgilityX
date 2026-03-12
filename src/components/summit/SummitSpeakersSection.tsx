import React from "react";

const speakers = [
  { role: "KEYNOTE SPEAKER", name: "Federal Minister", title: "Minister of IT & Telecom", org: "Government of Pakistan" },
  { role: "PANELIST", name: "Chairman", title: "Chairman", org: "Pakistan Telecommunication Authority" },
  { role: "PANELIST", name: "Secretary IT", title: "Secretary", org: "Ministry of IT & Telecom" },
  { role: "ROUNDTABLE LEAD", name: "CEO", title: "Chief Executive Officer", org: "Leading Telecom Enterprise" },
  { role: "PANELIST", name: "Director General", title: "Director General", org: "National Center for AI (NUST)" },
  { role: "PANELIST", name: "CISO / CTO", title: "Chief Information Security Officer", org: "Strategic Institution" },
  { role: "ROUNDTABLE FACILITATOR", name: "AI Policy Expert", title: "Senior Advisor", org: "National AI Governance Body" },
  { role: "TALENT ROUNDTABLE LEAD", name: "CHRO", title: "Chief Human Resources Officer", org: "Enterprise — Financial Sector" },
  { role: "ACADEMIA PANELIST", name: "Rector", title: "Rector / Vice Chancellor", org: "Leading National University" },
];

const SummitSpeakersSection: React.FC = () => (
  <section id="speakers" className="summit-speakers-section summit-section-dark summit-dotted-pattern summit-section-padding">
    <div className="summit-vertical-text">
      {"SPEAKERS".split("").map((char, i) => <span key={i}>{char}</span>)}
    </div>
    <div className="summit-container">
      <div className="summit-section-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="summit-section-label" style={{ display: "block", marginBottom: "1rem" }}>WHO WILL BE THERE</span>
        <h2 className="summit-section-title white">
          The Leaders Shaping <span className="primary">Pakistan's AI Future</span>
        </h2>
        <p className="summit-section-desc white" style={{ margin: "1.5rem auto 0", maxWidth: "45rem" }}>
          Ministers, enterprise CEOs, security leaders, academic directors, and policy strategists — united to architect Pakistan's sovereign AI future.
        </p>
      </div>

      <div className="summit-speakers-grid">
        {speakers.map((s, i) => (
          <div key={i} className="summit-speaker-card">
            <div className="summit-speaker-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="summit-speaker-role">{s.role}</span>
            <h3 className="summit-speaker-name">{s.name}</h3>
            <p className="summit-speaker-title">{s.title}</p>
            <p className="summit-speaker-org">{s.org}</p>
          </div>
        ))}
      </div>

      <p className="summit-speaker-note">
        Speaker roster being finalised. Full confirmed list released prior to summit.
      </p>
    </div>
  </section>
);

export default SummitSpeakersSection;
