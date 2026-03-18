import React from "react";
import female from "../../assets/avatars-summit/female.jpg";
import female1 from "../../assets/avatars-summit/female1.jpg";
import female2 from "../../assets/avatars-summit/female2.jpg";
import male from "../../assets/avatars-summit/male.jpg";
import male1 from "../../assets/avatars-summit/male1.jpg";
import male2 from "../../assets/avatars-summit/male2.jpg";
import male3 from "../../assets/avatars-summit/male3.jpg";
import vicky from "../../assets/avatars-summit/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

const speakers = [
  { role: "KEYNOTE SPEAKER", name: "Federal Minister", title: "Minister of IT & Telecom", org: "Government of Pakistan", image: male },
  { role: "PANELIST", name: "Chairman", title: "Chairman", org: "Pakistan Telecommunication Authority", image: female },
  { role: "PANELIST", name: "Secretary IT", title: "Secretary", org: "Ministry of IT & Telecom", image: male1 },
  { role: "ROUNDTABLE LEAD", name: "CEO", title: "Chief Executive Officer", org: "Leading Telecom Enterprise", image: female1 },
  { role: "PANELIST", name: "Director General", title: "Director General", org: "National Center for AI (NUST)", image: male2 },
  { role: "PANELIST", name: "CISO / CTO", title: "Chief Information Security Officer", org: "Strategic Institution", image: female2 },
  { role: "ROUNDTABLE FACILITATOR", name: "AI Policy Expert", title: "Senior Advisor", org: "National AI Governance Body", image: male3 },
  { role: "TALENT ROUNDTABLE LEAD", name: "CHRO", title: "Chief Human Resources Officer", org: "Enterprise - Financial Sector", image: vicky },
];

const SummitSpeakersSection: React.FC = () => (
  <section id="speakers" className="summit-speakers-section summit-section-dark summit-dotted-pattern summit-section-padding">
    <div className="summit-vertical-text">
      {"ㅤSPEAKERS".split("").map((char, i) => <span key={i}>{char}</span>)}
    </div>
    <div className="summit-container summit-speakers-container">
      <div className="summit-section-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="summit-section-label" style={{ display: "block", marginBottom: "1rem" }}>WHO WILL BE THERE</span>
        <h2 className="summit-section-title white">
          The Leaders Shaping <span className="primary">Pakistan&apos;s AI Future</span>
        </h2>
        <p className="summit-section-desc white" style={{ margin: "1.5rem auto 0", maxWidth: "45rem" }}>
          Ministers, enterprise CEOs, security leaders, academic directors, and policy strategists - united to architect Pakistan&apos;s sovereign AI future.
        </p>
      </div>

      <div className="summit-speakers-grid">
        {speakers.map((speaker, i) => (
          <div key={i} className="summit-speaker-card">
            <div className="summit-speaker-media">
              <img src={speaker.image} alt={speaker.name} className="summit-speaker-photo" />
            </div>

            <div className="summit-speaker-body">
              <span className="summit-speaker-role">{speaker.role}</span>
              <h3 className="summit-speaker-name">{speaker.name}</h3>
              <p className="summit-speaker-title">{speaker.title}</p>
              <p className="summit-speaker-org">{speaker.org}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="summit-speaker-note">
        Speaker roster being finalised. Full confirmed list released prior to summit.
      </p>
    </div>
  </section>
);

export default SummitSpeakersSection;
