import React, { useEffect, useState } from "react";
import aboutBg from "../../images/bg/service-bg.png";
import { Link } from "react-router-dom";
import gif from "../../images/icon/b10c3e43e836d32554bf.gif";
import arrowIcon from "../../images/icon/rotate-arrow-black.svg";

// Service images
import img01 from "../../assets/services/11.png";
import img02 from "../../assets/services/22.png";
import img03 from "../../assets/services/33.png";
import img04 from "../../assets/services/44.png";
import img05 from "../../assets/services/55.png";
import img06 from "../../assets/services/66.png";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "AIgilityX Sovereign AI Engine™",
    desc: "SovereignX Engine reference designs, data residency patterns, trust boundaries and security controls for national and sectoral AI fabrics.",
    img: img01,
    link: "/service-details",
  },
  {
    id: 2,
    title: "The AIgilityX AI Factory™",
    desc: "Your Sovereign Production Line for Intelligence - End-to-end AI operating models covering intake, experimentation, evaluation, deployment and monitoring.",
    img: img02,
    link: "/service-details",
  },
  {
    id: 3,
    title: "AIgilityX Global AI Hub",
    desc: "Partner network of solutions providers, system integrators, startups and industry experts who implement the blueprints under shared governance and standards.",
    img: img03,
    link: "/service-details",
  },
  {
    id: 4,
    title: "AIgilityX AI Executive Academy™",
    desc: "Partner network of solutions providers, system integrators, startups and industry experts who implement the blueprints under shared governance and standards.",
    img: img04,
    link: "/service-details",
  },
  {
    id: 5,
    title: "AIgilityX AI Infrastructure Services (AAaaS)",
    desc: "Telecom-backed, integrated AI infrastructure enabling secure, sovereign-scale national AI operations.",
    img: img05,
    link: "/service-details",
  },
  {
    id: 6,
    title: "AIgilityX Research & Innovation Labs™",
    desc: "Sandboxes and labs co-partner with governments, telcos and universities to test GenAI, Agentic AI and domain-specific SLMs.",
    img: img06,
    link: "/service-details",
  },
];

const ServiceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-service-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  return (
    <section id="ecosystem" className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding text-center">
              <span className="sub-title">AIgilityX™ Ecosystem</span>
              <h2 className="title">
                {/* <span className="round-img"> */}
                  {/* <img src={gif} alt="gif" /> */}
                {/* </span> */}
                Explore Ecosystem Pillars Powering Sovereign, Scalable AI
              </h2>
              {/* <div className="xb-heading-btn d-inline">
                <Link className="thm-btn agency-btn" to="/service">
                  <span className="text">view more services</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
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

                      <svg
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
                    </span>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Service Boxes */}
      <div className="xb-service-wrap bg_img">
        {services.map((service) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${activeId === service.id ? "active" : ""
              }`}
            onMouseEnter={() => setActiveId(service.id)}
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <Link className="xb-item--icon" to={service.link}>
                    <img src={arrowIcon} alt="arrow" />
                  </Link>
                </div>
                <p className="xb-item--content">{service.desc}</p>
                <div className="service-card-img-effect">
                  <div className="xb-item--img xb-img">
                    {/* <Link to={service.link}> */}
                      <img src={service.img} alt={service.title} />
                    {/* </Link> */}
                  </div>
                </div>
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <Link to={service.link}>{service.title}</Link>
                </h3>
                <Link className="xb-icon" to="/service-details">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.28979"
                      y="21.4111"
                      width="22.36"
                      height="2.83936"
                      transform="rotate(-40.2798 6.28979 21.4111)"
                      fill="white"
                    />
                    <rect
                      x="9.44751"
                      y="7.57031"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 9.44751 7.57031)"
                      fill="white"
                    />
                    <rect
                      x="13.449"
                      y="7.90015"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 13.449 7.90015)"
                      fill="white"
                    />
                    <rect
                      x="17.4507"
                      y="8.23047"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 17.4507 8.23047)"
                      fill="white"
                    />
                    <rect
                      x="21.1223"
                      y="12.5627"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 21.1223 12.5627)"
                      fill="white"
                    />
                    <rect
                      x="20.7925"
                      y="16.5649"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.7925 16.5649)"
                      fill="white"
                    />
                    <rect
                      x="20.4617"
                      y="20.5667"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.4617 20.5667)"
                      fill="white"
                    />
                  </svg>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
