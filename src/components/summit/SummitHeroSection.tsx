import React, { useEffect, useState } from "react";
import { MapPin, CalendarDays, Users } from "lucide-react";
import heroBg from "../../assets/hero-bg.jpg";

const TARGET_DATE = new Date("2026-06-18T14:00:00").getTime();

const SummitHeroSection: React.FC = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const metaItems = [
    { icon: <MapPin size={16} strokeWidth={2.5} />, text: "Serena Hotel, Islamabad" },
    { icon: <CalendarDays size={16} strokeWidth={2.5} />, text: "18 June 2026 - Thursday" },
    { icon: <Users size={16} strokeWidth={2.5} />, text: "100–150 National Leaders" },
  ];

  const countdownUnits = [
    { val: pad(time.days), label: "Days" },
    { val: pad(time.hours), label: "Hours" },
    { val: pad(time.minutes), label: "Minutes" },
    { val: pad(time.seconds), label: "Seconds" },
  ];

  return (
    <section className="summit-hero" id="top">
      <img src={heroBg} alt="" className="summit-hero-bg" />
      <div className="summit-hero-overlay" />

      <div className="summit-hero-content">
        <h1>
          <div><span className="algilityx">AlgilityX</span></div>
          <div><span className="primary">Sovereign AI</span></div>
          <div style={{ marginTop: "0" }}>
            <span className="faded">Summit 2026</span>
            <span className="white-inline"> — Pakistan</span>
          </div>
        </h1>

        <p className="summit-hero-subtitle">
          From Strategy to Scale: Building Pakistan's Sovereign AI Ecosystem
        </p>

        <p className="summit-hero-desc">
          A national leadership dialogue to architect Pakistan's AI sovereignty, security, innovation capacity, social impact, and digital independence.
        </p>

        <div className="summit-hero-meta">
          {metaItems.map(({ icon, text }, i) => (
            <span key={i} className="summit-hero-meta-item">
              <span className="meta-icon">{icon}</span> {text}
            </span>
          ))}
        </div>

        <p className="summit-countdown-label">Summit Commences In</p>
        <div className="summit-countdown">
          {countdownUnits.map(({ val, label }, i) => (
            <React.Fragment key={label}>
              <div className="summit-countdown-group">
                <div className="summit-countdown-box">
                  <div className="value">{val}</div>
                </div>
                <span className="label">{label}</span>
              </div>
              {i < 3 && <span className="summit-countdown-sep">:</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="summit-hero-cta">
          <a href="#cta" className="summit-btn-primary" style={{ fontSize: "0.875rem", borderRadius: "2rem" }}>
            Reserve My Seat →
          </a>
          <a href="#partners" className="summit-btn-outline-light" style={{ fontSize: "0.875rem", borderRadius: "2rem" }}>
            Become a Strategic Partner
          </a>
        </div>
      </div>

      <div className="summit-hero-wave">
        <svg viewBox="0 0 1440 80" fill="none">
          <path d="M0 80L1440 80L1440 0L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default SummitHeroSection;
