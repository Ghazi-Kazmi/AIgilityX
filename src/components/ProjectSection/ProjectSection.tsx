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

// // ✅ Import icons
// import icon01 from "../../images/icon/project-icon01.svg";
// import icon02 from "../../images/icon/project-icon02.svg";
// import icon03 from "../../images/icon/project-icon03.svg";
// import icon08 from "../../images/icon/project-icon08.svg";
// import icon09 from "../../images/icon/project-icon09.svg";
// import icon10 from "../../images/icon/project-icon10.svg";
// import icon11 from "../../images/icon/project-icon11.svg";
// import icon12 from "../../images/icon/project-icon12.svg";
// import icon13 from "../../images/icon/project-icon13.svg";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    img: projectImg01,
    title: "AI Strategy & Transformation",
    desc: "Vision‑led strategies and actionable roadmaps to accelerate AI adoption, aligning your business objectives with cutting edge technology and agile operating models",
    industry: "Strategy & Transformation",
    country: "Global",
    // techs: [icon01, icon02, icon03],
  },
  {
    img: projectImg02,
    title: "AI Governance & Ethics",
    desc: "Tailored frameworks for responsible AI, ensuring compliance, transparency and trust. Transform risk management into a competitive advantage with rigorous GRC.",
    industry: "Governance & Compliance",
    country: "Global",
    // techs: [icon01, icon08, icon09],
  },
  {
    img: projectImg03,
    title: "AI Technology & Delivery",
    desc: "End‑to‑end implementation guardian of production‑grade AI, intelligent automation and digital twins – turning proofs-of-concept into reliable, ROI‑delivering solutions.",
    industry: "Technology & Delivery",
    country: "Global",
    // techs: [icon10, icon11, icon01],
  },
  {
    img: projectImg04,
    title: "AI Model Testing & Assurance Lab",
    desc: "Our independent AI assurance lab tests models, agents, and pipelines for safety, bias, resilience, and compliance, delivering trusted validation before rollout.",
    industry: "AI Assurance",
    country: "Global",
    // techs: [icon08, icon12, icon13],
  },
  {
    img: projectImg05,
    title: "Digital Twin Intelligence",
    desc: "We provide a protected space to explore human-AI teaming, scenario simulations, and future governance models, enabling advanced leadership through deep psychometrics.",
    industry: "Digital Twins",
    country: "Global",
    // techs: [icon01, icon02, icon09],
  },
  {
    img: projectImg06,
    title: "AI Skills & Leadership",
    desc: "Future‑ready academies and upskilling programs that build AI‑literate leaders and teams. Develop the talent pipeline needed to make AI stick and scale sustainably.",
    industry: "Skills & Leadership",
    country: "Global",
    // techs: [icon10, icon11, icon03],
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
    <section id="services-section" className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">Featured Services</span>
          <h2 className="title">
            {/* <span className="round-img">
              <img src={gifRound} alt="animation" />
            </span>{" "} */}
            Let's Co-Create Sovereign AI Solutions with AIgilityX Frameworks
          </h2>
          {/* <div className="xb-heading-btn d-inline">
            <Link className="thm-btn agency-btn" to="/project">
              <span className="text">view more projects</span>
              <span className="arrow">
                <span className="arrow-icon">
                  {/* Double SVG arrow *
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5.06592"
                        y="19.9785"
                        width="20.5712"
                        height="2.61221"
                        transform="rotate(-40.2798 5.06592 19.9785)"
                        fill="white"
                      />
                      <rect
                        x="7.97095"
                        y="7.24463"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 7.97095 7.24463)"
                        fill="white"
                      />
                      <rect
                        x="11.6523"
                        y="7.54834"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 11.6523 7.54834)"
                        fill="white"
                      />
                      <rect
                        x="15.334"
                        y="7.85205"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 15.334 7.85205)"
                        fill="white"
                      />
                      <rect
                        x="18.7119"
                        y="11.8374"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.7119 11.8374)"
                        fill="white"
                      />
                      <rect
                        x="18.4084"
                        y="15.52"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.4084 15.52)"
                        fill="white"
                      />
                      <rect
                        x="18.104"
                        y="19.2012"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.104 19.2012)"
                        fill="white"
                      />
                    </svg>
                  ))}
                </span>
              </span>
            </Link>
          </div> */}
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
                    <p className="xb-item--content">{project.desc}</p>
                    <ul className="xb-item--list ul_li">
                      <li>
                        Industry: <span>{project.industry}</span>
                      </li>
                      <li>
                        Country: <span>{project.country}</span>
                      </li>
                    </ul>
                    <div className="xb-item--technologie ul_li">
                      {/* <span>Core Technologies:</span>
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((icon, i) => (
                          <li key={i}>
                            <img src={icon} alt="icon" />
                          </li>
                        ))}
                      </ul> */}
                    </div>
                    {/* <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" to="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            {[...Array(2)].map((_, i) => (
                              <svg
                                key={i}
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.06592"
                                  y="19.9785"
                                  width="20.5712"
                                  height="2.61221"
                                  transform="rotate(-40.2798 5.06592 19.9785)"
                                  fill="white"
                                />
                                <rect
                                  x="7.97095"
                                  y="7.24463"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 7.97095 7.24463)"
                                  fill="white"
                                />
                                <rect
                                  x="11.6523"
                                  y="7.54834"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 11.6523 7.54834)"
                                  fill="white"
                                />
                                <rect
                                  x="15.334"
                                  y="7.85205"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 15.334 7.85205)"
                                  fill="white"
                                />
                                <rect
                                  x="18.7119"
                                  y="11.8374"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.7119 11.8374)"
                                  fill="white"
                                />
                                <rect
                                  x="18.4084"
                                  y="15.52"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.4084 15.52)"
                                  fill="white"
                                />
                                <rect
                                  x="18.104"
                                  y="19.2012"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.104 19.2012)"
                                  fill="white"
                                />
                              </svg>
                            ))}
                          </span>
                        </span>
                      </Link>
                    </div> */}
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
