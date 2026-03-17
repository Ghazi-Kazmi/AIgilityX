import React from "react";

const SummitFooter: React.FC = () => (
  <footer className="summit-footer">
    <div className="summit-container">
      <div className="summit-footer-grid">
        <div>
          <a href="#top" className="summit-footer-logo">
            <span className="primary">AI</span>
            <span className="white">gilityX</span>
          </a>
          <p className="summit-footer-tagline">
            Supporting Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.
          </p>
        </div>

        <div className="summit-footer-col">
          <h4>Summit 2026</h4>
          <div className="summit-footer-info">
            <div className="summit-footer-info-item">
              <span style={{ fontSize: "14px" }}>📍</span> Serena Hotel, Islamabad
            </div>
            <div className="summit-footer-info-item">
              <span style={{ fontSize: "14px" }}>📅</span> Third Week of June 2026
            </div>
            <div className="summit-footer-info-item">
              <span style={{ fontSize: "14px" }}>🕒</span> 14:00 – 20:00 PKT
            </div>
            <div className="summit-footer-info-item">
              <span style={{ fontSize: "14px" }}>👥</span> Invitation Only · 100–150 Leaders
            </div>
          </div>
        </div>

        <div className="summit-footer-col">
          <h4>Contact</h4>
          <div className="summit-footer-info">
            <div className="summit-footer-info-item" style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "14px" }}>✉️</span> summit@aigilityx.com
            </div>
            <p className="summit-footer-contact-note">
              For invitations, partnerships &amp; institutional enquiries
            </p>
          </div>
        </div>
      </div>

      <div className="summit-footer-bottom">
        <p>© 2026 AIgilityX. All rights reserved.</p>
        <p>AIgilityX Sovereign AI Summit 2026 – Pakistan · From Strategy to Scale</p>
      </div>
    </div>
  </footer>
);

export default SummitFooter;
