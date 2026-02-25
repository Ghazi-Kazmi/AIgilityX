import React from "react";
import { Link } from "react-router-dom";

// Use existing project hero image as visual placeholder
import heroVisual from "../../assets/hero/hero.png";

interface CardData {
  pillar: string;
  title: string;
  bullets: string[];
}

const cards: CardData[] = [
  {
    pillar: "Sovereign Strategy",
    title: "AI Readiness & Strategy",
    bullets: [
      "Roadmap your AI journey with the AIgile Mindset™ & 5E Framework",
      "Align executive initiatives with national priorities & governance",
    ],
  },
  {
    pillar: "Agentic Execution",
    title: "Agentic AI Factory™",
    bullets: [
      "Industrialize sovereign-ready AI agents with governed lifecycles",
      "Deploy production-grade guardrails from pilot to trusted execution",
    ],
  },
  {
    pillar: "Workforce Enablement",
    title: "AIgile Leadership & Workforce",
    bullets: [
      "Build AI-ready leaders via the AI Leadership Fellowship",
      "Develop one million AI-Ready Agile Leaders across sectors",
    ],
  },
  {
    pillar: "Enterprise & National Scale",
    title: "Sovereign AI Ecosystems",
    bullets: [
      "Operationalize trusted, governed AI aligned with national priorities",
      "Strengthen sovereignty & resilience through scalable AI",
    ],
  },
];

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffsetDesktop = 10;
    const headerOffsetMobile = 120;
    const isDesktop = window.innerWidth >= 992;
    const headerOffset = isDesktop ? headerOffsetDesktop : headerOffsetMobile;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section className="aigx-hero">
      <div className="aigx-container">
        {/* ================= HERO TOP ================= */}
        <div className="aigx-hero-grid">
          {/* LEFT CONTENT */}
          <div className="aigx-hero-content">
            <div className="aigx-kicker">
              Sovereign AI • National Resilience • Secure Execution
            </div>

            <h1 className="aigx-title">
              Building the World's First{" "}
              <span className="aigx-accent">Sovereign AI Ecosystem</span>
            </h1>

            <p className="aigx-sub">
              Through Ethical Intelligence, empowering nations, enterprises,
              SMEs, communities &amp; individuals.
            </p>

            <p className="aigx-desc">
              AIgilityX™ enables sovereign strategy, agentic execution,
              workforce enablement, and enterprise-scale AI aligned with
              national priorities, security, and long-term resilience.
            </p>

            <div className="aigx-actions">
              <Link
                to="/"
                className="aigx-btn aigx-btn-primary"
                onClick={(e) => handleNavScroll(e, "contact-section")}
              >
                Join the AIgile Leadership Movement
              </Link>
              <Link to="/" className="aigx-btn aigx-btn-ghost">
                Explore Sovereign AI Ecosystem™
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="aigx-visual">
            <img
              src={heroVisual}
              alt="Global Sovereign AI Ecosystem"
              loading="eager"
            />
          </div>
        </div>

        {/* ================= JOURNEY LINE ================= */}
        <div className="aigx-journey"></div>

        {/* ================= CARDS ================= */}
        <div className="aigx-cards">
          {cards.map((card, index) => (
            <div className="aigx-card" key={index}>
              <div className="aigx-pillar">{card.pillar}</div>
              <h3>{card.title}</h3>
              <ul className="aigx-card-bullets">
                {card.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
