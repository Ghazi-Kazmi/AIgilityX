import React from "react";

const stats = [
  { icon: "📈", value: "$15.7T", desc: "Global AI economic impact by 2030" },
  { icon: "📊", value: "0.1%", desc: "Pakistan's current share of AI investment" },
  { icon: "👥", value: "50M+", desc: "Jobs at risk without AI workforce strategy" },
];

const withoutItems = [
  { title: "National dependence increases", desc: "Reliance on foreign AI systems for critical decisions" },
  { title: "Data governance remains fragmented", desc: "No unified framework for data sovereignty" },
  { title: "Security vulnerabilities rise", desc: "AI-powered threats without sovereign defense capability" },
  { title: "Public services remain inefficient", desc: "Missed opportunity to transform citizen experience" },
  { title: "Innovation ecosystems lack alignment", desc: "Talent and capital leave for other markets" },
];

const withItems = [
  { title: "Digital independence strengthens", desc: "Pakistan controls its own AI infrastructure" },
  { title: "AI enhances national security", desc: "Sovereign systems protect critical assets" },
  { title: "Public services improve significantly", desc: "AI-driven efficiency across government" },
  { title: "Social impact accelerates at scale", desc: "Health, education, agriculture transformed" },
  { title: "Economic growth scales responsibly", desc: "Pakistan becomes an AI-enabled economy" },
];

const SummitUrgencySection: React.FC = () => (
  <section id="imperative" className="summit-section-light summit-section-padding">
    <div className="summit-container">
      <div className="summit-section-header">
        <span className="summit-section-label">The Urgency</span>
        <h2 className="summit-section-title">
          AI Sovereignty Is Not Optional.{" "}
          <span className="primary">It Is Existential.</span>
        </h2>
        <p className="summit-section-desc">
          Every nation that delays AI sovereignty cedes control — of its data, its security, and its future. Pakistan must act now.
        </p>
      </div>

      <div className="summit-stats-grid">
        {stats.map(({ icon, value, desc }) => (
          <div key={value} className="summit-glass-card-light summit-stat-card">
            <span className="stat-icon" style={{ fontSize: "2rem" }}>{icon}</span>
            <div className="stat-value">{value}</div>
            <p className="stat-desc">{desc}</p>
          </div>
        ))}
      </div>

      <div className="summit-comparison-grid">
        <div className="summit-comparison-col without">
          <div className="summit-comparison-header without">Without Sovereign AI</div>
          <div className="summit-comparison-body">
            {withoutItems.map((item, i) => (
              <div key={i} className="summit-comparison-item">
                <span className="icon red" style={{ fontSize: "1.125rem" }}>✕</span>
                <div>
                  <p className="item-title">{item.title}</p>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="summit-comparison-col with">
          <div className="summit-comparison-header with">With Sovereign AI</div>
          <div className="summit-comparison-body">
            {withItems.map((item, i) => (
              <div key={i} className="summit-comparison-item">
                <span className="icon green" style={{ fontSize: "1.125rem" }}>✓</span>
                <div>
                  <p className="item-title">{item.title}</p>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="summit-quote-box">
        <p>
          "This summit transitions Pakistan from AI dialogue to{" "}
          <span className="primary">AI execution</span>."
        </p>
      </div>
    </div>
  </section>
);

export default SummitUrgencySection;
