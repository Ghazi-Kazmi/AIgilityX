import React from "react";

const deliverables = [
  { icon: "📄", title: "Sovereign AI Summit Whitepaper", desc: "Comprehensive post-summit document capturing consensus, frameworks, and execution priorities." },
  { icon: "🎯", title: "National AI Ecosystem Alignment Framework", desc: "A structured framework for aligning public, private, and academic institutions around AI sovereignty." },
  { icon: "🤝", title: "AI Risk & Governance Principles Document", desc: "Principles for responsible AI governance, cybersecurity integration, and risk management." },
  { icon: "📖", title: "AI Talent Acceleration Outline", desc: "A national blueprint for building Pakistan's AI talent pipeline from education to executive level." },
  { icon: "🏅", title: "Sovereign AI for Social Impact Framework", desc: "A framework for deploying AI responsibly across health, education, agriculture, and disaster response." },
  { icon: "💼", title: "Working Group Charters", desc: "Formal charters for each working group with defined mandates, members, and timelines." },
];

const launches = [
  { icon: "🚀", text: "Sovereign AI Working Group" },
  { icon: "⚡", text: "Pakistan AI Capability Framework" },
  { icon: "🛡️", text: "National AI Governance Draft Initiative" },
  { icon: "🌐", text: "AI Talent Acceleration Taskforce" },
  { icon: "💾", text: "Sovereign AI for Social Impact Working Group" },
  { icon: "👥", text: "AIgilityX Sovereign AI Leadership Fellowship" },
];

const SummitDeliverablesSection: React.FC = () => (
  <section id="deliverables" className="summit-section-light summit-section-padding">
    <div className="summit-container">
      <div className="summit-section-header">
        <span className="summit-section-label">Post-Summit Outputs</span>
        <h2 className="summit-section-title">Strategic Deliverables</h2>
        <p className="summit-section-desc">
          Every summit session is designed to produce tangible, actionable outputs for national AI progress.
        </p>
      </div>

      <div className="summit-deliverables-grid">
        {deliverables.map(({ icon, title, desc }, i) => (
          <div key={i} className="summit-glass-card-light summit-deliverable-card">
            <div className="summit-deliverable-icon" style={{ fontSize: "1.5rem" }}>{icon}</div>
            <h3 className="summit-deliverable-title">{title}</h3>
            <p className="summit-deliverable-desc">{desc}</p>
          </div>
        ))}
      </div>

      <div className="summit-launches-box">
        <div className="summit-launches-header">
          <span className="summit-launches-label">Signature Announcements</span>
          <h3 className="summit-launches-title">Proposed Summit Launches</h3>
        </div>
        <div className="summit-launches-grid">
          {launches.map(({ icon, text }, i) => (
            <div key={i} className="summit-launch-item">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SummitDeliverablesSection;
