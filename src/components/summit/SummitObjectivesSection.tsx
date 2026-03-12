import React from "react";

const objectives = [
  { num: "01", icon: "🛡️", title: "Define Pakistan's Sovereign AI Execution Roadmap", desc: "Establish a concrete national AI roadmap with execution milestones and institutional ownership." },
  { num: "02", icon: "💾", title: "Align Public Sector, Industry, Academia & Security", desc: "Bring key stakeholders into unified strategic alignment across sectors." },
  { num: "03", icon: "💻", title: "Identify Infrastructure & Compute Requirements", desc: "Map Pakistan's compute gaps and infrastructure priorities for AI sovereignty." },
  { num: "04", icon: "⚖️", title: "Establish Governance & Ethical Frameworks", desc: "Draft AI governance principles, regulatory guardrails, and ethical deployment standards." },
  { num: "05", icon: "🎓", title: "Design National AI Talent Strategy", desc: "Develop a national plan for AI curriculum reform, reskilling, and executive literacy." },
  { num: "06", icon: "🌐", title: "Enable AI for Social Goods & Public Impact", desc: "Ensure AI serves citizens in health, education, agriculture, and disaster response." },
  { num: "07", icon: "🏛️", title: "Announce Structured Working Groups", desc: "Formalize actionable working groups with institutional mandates and timelines." },
];

const SummitObjectivesSection: React.FC = () => (
  <section id="objectives" className="summit-section-light summit-section-padding">
    <div className="summit-container">
      <div className="summit-section-header">
        <span className="summit-section-label">What We Will Achieve</span>
        <h2 className="summit-section-title">
          Seven Pillars. One National Agenda.
        </h2>
        <p className="summit-section-desc">
          Each objective is designed to produce a tangible, institutional-level outcome within 90 days of the summit.
        </p>
      </div>

      <div className="summit-objectives-grid">
        {objectives.map(({ num, icon, title, desc }) => (
          <div key={num} className="summit-glass-card-light summit-objective-card">
            <span className="summit-objective-num">{num}</span>
            <div className="summit-objective-icon" style={{ fontSize: "1.5rem" }}>{icon}</div>
            <h3 className="summit-objective-title">{title}</h3>
            <p className="summit-objective-desc">{desc}</p>
          </div>
        ))}
        <div className="summit-glass-card-light summit-objective-quote">
          <p>
            "Pakistan's AI sovereign future is not a distant aspiration — it is an execution challenge."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SummitObjectivesSection;
