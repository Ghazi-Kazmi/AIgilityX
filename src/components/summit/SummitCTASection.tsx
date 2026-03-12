import React from "react";

const SummitCTASection: React.FC = () => (
  <section id="cta" className="summit-section-dark summit-dotted-pattern summit-cta">
    <div className="summit-container" style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <span className="summit-pill-badge" style={{ fontSize: "0.75rem" }}>SEATS ARE LIMITED</span>
      </div>
      <h2 className="summit-cta-title">
        Pakistan's AI Future Won't Wait.{" "}
        <span className="primary">Will You?</span>
      </h2>
      <p className="summit-cta-desc">
        The AIgilityX Sovereign AI Summit 2026 is Pakistan's definitive national platform for turning AI strategy into sovereign execution. 100–150 leaders. One afternoon. Seven outcomes.
      </p>
      <div className="summit-cta-buttons">
        <a href="#" className="summit-btn-primary summit-glow-blue summit-pulse-glow" style={{ fontSize: "0.875rem" }}>
          Request an Invitation →
        </a>
        <a href="#partners" className="summit-btn-outline-light" style={{ fontSize: "0.875rem" }}>
          Become a Strategic Partner
        </a>
      </div>
    </div>
  </section>
);

export default SummitCTASection;
