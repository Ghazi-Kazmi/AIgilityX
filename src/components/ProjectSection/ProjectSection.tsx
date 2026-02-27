import React, { useEffect } from "react";

// ✅ Import images
import projectBg from "../../images/bg/project-bg.png";
// import gifRound from "../../images/icon/b10c3e43e836d32554bf.gif";
import projectImg01 from "../../assets/featured-services/11.png";
import projectImg02 from "../../assets/featured-services/22.png";
import projectImg03 from "../../assets/featured-services/33.png";
import projectImg04 from "../../assets/featured-services/44.png";
import projectImg05 from "../../assets/featured-services/55.png";
import projectImg06 from "../../assets/featured-services/66.png";

// import { Link } from "react-router-dom";

// ✅ TypeScript Interface added for strict typing
interface ProjectItem {
  img: string;
  title: string;
  desc: string;
  industry?: string; 
  country: string;
}

const PROJECTS: ProjectItem[] = [
 {
    img: projectImg01,
    title: "AIgilityX Sovereign AI Suite™",
        desc: 
    `<strong>Sovereign intelligence stack—architecture + production line for trusted AI at scale.</strong>
    Combine <strong>AIgilityX Sovereign AI Engine™</strong> "and" <strong>AIgilityX AI Factory™</strong> into one flagship suite:
    reference architectures, data residency patterns, security controls, and an end-to-end operating model for intake, experimentation, evaluation, deployment, and monitoring of agentic AI."
      <span style ="color: #0d97c9;">
      • Sovereign reference designs & trust boundaries
      • Agentic AI lifecycle: build → govern → deploy → observe
      • Production-grade standards, controls, and telemetry </span>`,
    industry: "Strategy & Transformation",
    country: "Global",
  },
  {
    img: projectImg02,
    title: "AIgilityX Global AI Hub™",
    desc: `<strong>Governed partner ecosystem that executes sovereign AI blueprints reliably.</strong>
    A curated network of system integrators, solutions providers, startups, and industry experts aligned to AIgilityX standards.
    <span style ="color: #0d97c9;">  
    • Vetted delivery partners & integration capability
      • Shared playbooks, standards, and assurance
      • Cross-sector execution at speed</style>`,
    industry: "Governance & Compliance",
    country: "Global",
  },
  {
    img: projectImg03,
    title: "AIgilityX AI Executive Academy™",
    desc: `<strong>Building the 1 Million AI Leadership Pipeline through Fellowship Programs.</strong>
    Executive-grade capability building that turns leaders into sovereign AI decision-makers through AI Leaders Fellowship Programs for:
    <span style ="color: #0d97c9;">  
    • AIgile leadership & sovereign execution mindset
      • Board/CxO readiness and policy-to-execution alignment
      • Train-the-Trainer pipelines for scale,</style>`,
    country: "Global",
  },
 {
    img: projectImg04,
    title: "AIgilityX AI Infrastructure Services ",
    desc: `<strong>Telecom-backed sovereign compute, platforms, and secure AI environments.</strong>
    Integrated infrastructure services enabling secure, resilient, and scalable sovereign AI operations:
    <span style ="color: #0d97c9;">  
    • Secure AI environments & sovereign deployment patterns
      • Telco edge readiness for latency-sensitive use cases
      • Zero lock-in architecture with measurable performance</style>`,
    country: "Global",
  },
  {
    img: projectImg05,
    title: "AIgilityX Research & Innovation Labs™",
    desc: `<strong>Sandbox-to-production labs for GenAI, Agentic AI, and domain SLMs.</strong>
    Co-innovation labs co-partnering with governments, telcos, and universities to:
    <span style ="color: #0d97c9;">  
    • Prototype agentic systems and domain copilots
      • Validate safety, governance, and performance
      • Convert experiments into production candidates</style>`,
    country: "Global",
  },
  {
    img: projectImg06,
    title: "AIgilityX Venture & Solutions Studio™",
    desc: `<strong> Where sovereign AI use cases become shipped products and national outcomes.</strong>
    <p class ="tagline"> A venture-building and solution-incubation engine that runs Sovereign Agentic AI Hackathons.</p>
    <span style ="color: #0d97c9;">  
    • Sovereign Agentic AI Hackathon program
      • Use-case portfolio: national & global problem-solving
      • Incubation → partnerships → deployment pathways</style>`,
    country: "Global",
  },
];

const ProjectSection: React.FC = () => {
  useEffect(() => {
    // ✅ Set dynamic background image
    const bgElement = document.querySelector<HTMLElement>(".project.bg_img");
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${projectBg})`;
    }

    // ✅ Scroll activation logic
    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(
      ".xb-project-pagination li"
    );

    if (!items.length || !paginations.length) return;

    items.forEach((item) => {
      item.style.transition = "opacity 0.6s ease";
      item.style.opacity = "1";
    });

    const updateActive = () => {
      let indexToActivate = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          indexToActivate = index;
        }
      });

      paginations.forEach((el) => el.classList.remove("active"));
      if (paginations[indexToActivate]) {
        paginations[indexToActivate].classList.add("active");
      }

      items.forEach((item, i) => {
        if (i === indexToActivate) {
          item.style.opacity = "1";
        } else if (i < indexToActivate) {
          item.style.opacity = "0.3";
        } else {
          item.style.opacity = "1";
        }
      });
    };

    // Listen to both native scroll and Lenis custom scroll events
    window.addEventListener("scroll", updateActive);
    window.addEventListener("lenis-scroll" as any, updateActive as any);
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("lenis-scroll" as any, updateActive as any);
    };
  }, []);

  return (
    <section id="ecosystem" className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">AIgilityX™ Ecosystem Pillars</span>
          <h2 className="title">
          Explore AIgilityX Sovereign AI Ecosystem </h2>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">
          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              {PROJECTS.map((_, index) => (
                <li key={index} className={index === 0 ? "active" : ""}>
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>

          {/* Project items */}
          <div className="xb-project-inner">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    
                    {/* ✅ PRESERVES YOUR EXACT MULTI-LINE TEXT AND BULLETS */}
                    <p 
                      className="xb-item--content" 
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{ __html: project.desc }} 
                    />
                    
                    {/* <ul className="xb-item--list ul_li">
                      {project.industry && (
                        <li>
                          Industry: <span>{project.industry}</span>
                        </li>
                      )}
                      <li>
                        Country: <span>{project.country}</span>
                      </li>
                    </ul> */}
                    <div className="xb-item--technologie ul_li"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;