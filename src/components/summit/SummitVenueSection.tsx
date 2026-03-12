import React from "react";

const SummitVenueSection: React.FC = () => (
  <section className="summit-section-light summit-section-padding">
    <div className="summit-container">
      <div className="summit-venue-grid">
        <div>
          <span className="summit-section-label">Venue</span>
          <h2 className="summit-venue-title">Serena Hotel<br />Islamabad</h2>
          <p className="summit-venue-text">
            Pakistan's premier venue for high-level national dialogue, government summits, and executive leadership events. Located in the heart of Islamabad's diplomatic enclave.
          </p>
          <div className="summit-venue-details">
            <p className="summit-venue-text">
              <span className="summit-venue-detail-label">Address</span><br />
              Serena Hotel, Khayaban-e-Suharwardy, Islamabad
            </p>
            <p className="summit-venue-text">
              <span className="summit-venue-detail-label">Enquiries</span><br />
              summit@aigilityx.com
            </p>
          </div>
          <div className="summit-venue-tags">
            <span className="summit-venue-tag">📅 3rd Week of June 2026</span>
            <span className="summit-venue-tag">🕒 14:00 – 20:00 PKT</span>
            <span className="summit-venue-tag">👥 Invitation Only</span>
          </div>
        </div>

        <div className="summit-venue-card">
          <div className="summit-venue-card-name">Serena Hotel</div>
          <p className="summit-venue-card-city">Islamabad, Pakistan</p>
          <p className="summit-venue-card-subtitle">Pakistan's Premier Diplomatic Venue</p>
          <div className="summit-venue-card-stats">
            <div className="summit-venue-stat">
              <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>👥</div>
              <div className="val">500+</div>
              <div className="lbl">Capacity</div>
            </div>
            <div className="summit-venue-stat">
              <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>⭐</div>
              <div className="val">5★</div>
              <div className="lbl">Stars</div>
            </div>
            <div className="summit-venue-stat">
              <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>📍</div>
              <div className="val">Central</div>
              <div className="lbl">Location</div>
            </div>
          </div>
        </div>
      </div>

      <div className="summit-venue-grid">
        <div>
          <span className="summit-section-label">About</span>
          <h2 className="summit-venue-title">
            AIgilityX<br />Sovereign AI Strategy & Execution
          </h2>
          <p className="summit-venue-text">
            AIgilityX is a Sovereign AI Strategy & Execution platform supporting Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.
          </p>
          <div className="summit-about-mission">
            <h4>Our Mission</h4>
            <p>Support Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.</p>
          </div>
        </div>

        <div className="summit-capabilities">
          <h4 className="summit-capabilities-label">Core Capabilities</h4>
          {[
            "AI Strategy Architecture",
            "Governance & Risk Frameworks",
            "Agentic AI Operating Models",
            "Infrastructure Blueprinting",
            "AI Talent Transformation",
            "AIgile Mindset™ Leadership",
          ].map((cap, i) => (
            <div key={i} className="summit-glass-card-light summit-capability-item">
              <span className="summit-capability-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="summit-capability-text">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SummitVenueSection;
