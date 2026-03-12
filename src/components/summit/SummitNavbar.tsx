import React, { useState } from "react";
import aigilityxLogo from "../../assets/AigilityX-Asset-2-scaled.png";

const navLinks = ["Imperative", "Objectives", "Audience", "Agenda", "Speakers", "Impact", "Deliverables", "Partners"];

interface SummitNavbarProps {
  onRequestInvitation: () => void;
}

const SummitNavbar: React.FC<SummitNavbarProps> = ({ onRequestInvitation }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="summit-navbar">
      <div className="summit-navbar-inner">
        <a href="#top" className="summit-navbar-logo">
          <img src={aigilityxLogo} alt="AIgilityX Logo" style={{ height: "40px", width: "auto" }} />
        </a>

        <div className="summit-navbar-links">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>

        <button 
          onClick={onRequestInvitation} 
          className="summit-btn-outline summit-navbar-cta" 
          style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
        >
          Request Invitation
        </button>

        <button onClick={() => setOpen(!open)} className="summit-navbar-toggle" aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="summit-navbar-mobile">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <button 
            onClick={() => { onRequestInvitation(); setOpen(false); }} 
            className="summit-btn-outline" 
            style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem", width: "100%", textAlign: "center", background: "none", cursor: "pointer" }}
          >
            Request Invitation
          </button>
        </div>
      )}
    </nav>
  );
};

export default SummitNavbar;
