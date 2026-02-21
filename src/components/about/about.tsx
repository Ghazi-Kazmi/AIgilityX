import React from "react";
import { Link } from "react-router-dom";

const FEATURE_LIST = [
  "Sovereign AI systems with full data control",
  "Ethical & responsible AI by design",
  "Global reach with local expertise",
  "Zero vendor lock-in architecture",
  "100+ Algile innovators network",
  "Proven enterprise transformation",
];

const CARDS = [
  {
    title: "Global Reach",
    subtitle: "Operations across 15+ countries",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="12" ry="20" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 24h40M24 4v40" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 10c4 6 8 6 12 0M12 38c4-6 8-6 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Human-Centered",
    subtitle: "Technology that enhances humanity",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="18" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="30" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 38c0-5.5 4.5-10 10-10s10 4.5 10 10M26 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 24h12v6H18z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Policy Architects",
    subtitle: "Drafted national AI regulations",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M24 4L8 12v12c0 8 8 14 16 18 8-4 16-10 16-18V12L24 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 20h24M12 26h24M12 32h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Researchers",
    subtitle: "Solving formidable AI challenges",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M24 8v32M16 16l8-8 8 8M16 40l8-8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 30l-6 8h24l-6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Solution Builders",
    subtitle: "Launched successful AI products",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M24 4l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12l4-12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 36v8M20 42h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Transformation Leaders",
    subtitle: "Certified in Algile methodologies",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="about pt-140 pb-140"
      style={{ backgroundColor: "var(--color-body)" }}
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left column: content */}
          <div className="col-lg-6">
            <span className="xb-about-subtitle d-inline-block text-uppercase mb-3 fw-medium">
              About Us
            </span>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--color-heading)",
              }}
            >
              AlgilityX™ — The Global{" "}
              <span style={{ color: "var(--color-primary)" }}>Algile Movement</span>
            </h2>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-gray)",
              }}
            >
              AlgilityX™ is a sovereign AI ecosystem designed for national resilience, enterprise
              competitiveness, and strategic innovation. We empower governments, telcos, and large
              enterprises with end-to-end AI transformation.
            </p>
            <p
              className="mb-4 mb-md-5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-gray)",
              }}
            >
              Through the unique symbiosis of AI, Agile principles, and human collaboration, we turn
              bold visions into tangible market disruption — all powered by Ethical & Responsible AI.
            </p>
            <ul className="list-unstyled row g-3 mb-4 mb-md-5">
              {FEATURE_LIST.map((text, i) => (
                <li key={i} className="col-md-6 d-flex align-items-start gap-3">
                  <span
                    className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "2px solid var(--color-primary)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6l3 3 5-6" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      lineHeight: 1.5,
                      color: "var(--color-gray)",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            {/* <div className="d-flex flex-wrap gap-3">
              <Link
                to="/about"
                className="thm-btn agency-btn text-decoration-none d-inline-flex align-items-center"
              >
                <span className="text">Learn More About Us</span>
                <span className="arrow">
                  <span className="arrow-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16L16 4M16 4h-8M16 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              </Link>
              <Link
                to="/company-profile"
                className="xb-about-outline-btn text-decoration-none d-inline-flex align-items-center justify-content-center rounded-pill px-4 py-3 fw-medium"
              >
                Download Company Profile
              </Link>
            </div> */}
          </div>

          {/* Right column: cards grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              {CARDS.map((card, i) => (
                <div key={i} className="col-md-6 col-12">
                  <div className="xb-about-card h-100 rounded-3 p-4 d-flex flex-column">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mb-3 flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <span style={{ width: "26px", height: "26px", display: "block" }}>{card.icon}</span>
                    </div>
                    <h3
                      className="mb-2 fw-bold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "18px",
                        color: "var(--color-heading)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        lineHeight: 1.5,
                        color: "var(--color-gray)",
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
