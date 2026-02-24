import React from "react";
import { Link } from "react-router-dom";

// Use existing project hero image as visual placeholder
import heroVisual from "../../images/hero/hero-img01.png";

interface CardData {
  pillar: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    pillar: "Sovereign Strategy",
    title: "AI Readiness & Strategy",
    description:
      "Assess, prioritize, and roadmap your enterprise AI journey using the AIgilityX AIgile Mindset™ and 5E Framework. Gain board-level maturity visibility, define executive roadmaps, and align initiatives with national priorities and governance objectives.",
  },
  {
    pillar: "Agentic Execution",
    title: "Agentic AI Factory™",
    description:
      "Design, build, and industrialize sovereign-ready AI agents through the AIgilityX Agentic AI Factory™. Establish governed lifecycles, enable enterprise orchestration, and deploy production-grade guardrails that move initiatives from pilot to trusted execution.",
  },
  {
    pillar: "Workforce Enablement",
    title: "AIgile Leadership & Workforce",
    description:
      "Build AI-ready leaders and future-proof teams through the AIgilityX AI Leadership Fellowship and capability pathways. Advance the mission of developing one million AI-Ready Agile Leaders across sectors, domains, and national talent ecosystems.",
  },
  {
    pillar: "Enterprise & National Scale",
    title: "Sovereign AI Ecosystems",
    description:
      "Operationalize trusted, secure, and governed AI ecosystems aligned with enterprise strategy and national priorities. Strengthen sovereignty, regulatory confidence, and long-term resilience through scalable, future-ready AI platforms.",
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
                Explore Agentic AI Factory™
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
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
