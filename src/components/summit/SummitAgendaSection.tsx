import React, { useState } from "react";

const agenda = [
  { time: "14:00 – 14:30", type: "Networking", title: "Registration & Strategic Networking" },
  { time: "14:30 – 15:15", type: "Plenary", title: "Opening Plenary — Ministerial Keynote & Strategic Dialogue" },
  { time: "15:15 – 15:25", type: "Break", title: "Strategic Networking Break" },
  { time: "15:25 – 16:05", type: "Roundtable", title: "Roundtable 1 — Building Pakistan's Sovereign AI Ecosystem" },
  { time: "16:05 – 16:15", type: "Spotlight", title: "Strategic Spotlight (Gold Sponsor)" },
  { time: "16:15 – 16:50", type: "Roundtable", title: "Roundtable 2 — AI & National Security in an Agentic Era" },
  { time: "16:50 – 17:20", type: "Roundtable", title: "Roundtable 3 — Sovereign AI & Talent Strategy" },
  { time: "17:20 – 17:50", type: "Roundtable", title: "Roundtable 4 — Sovereign AI for Social Goods & National Impact" },
  { time: "17:50 – 18:10", type: "Plenary", title: "Closing Plenary & Signature Announcements" },
  { time: "18:10 – 20:00", type: "Executive Dinner", title: "Executive Dinner (Invitation Only)" },
];

const SummitAgendaSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="agenda" className="summit-section-light summit-section-padding summit-border-top">
      <div className="summit-container">
        <div className="summit-section-header">
          <span className="summit-section-label">Summit Programme</span>
          <h2 className="summit-section-title">
            One Afternoon. Seven Outcomes.
          </h2>
          <p className="summit-section-desc">
            Every session is outcome-driven — no panels, no passive listening. Only strategic dialogue that produces national-level action.
          </p>
          <div className="summit-agenda-meta">
            <span className="summit-agenda-meta-pill">
              📅 Thursday · 3rd Week of June 2026
            </span>
            <span className="summit-agenda-meta-pill">
              🕒 14:00 – 20:00 PKT
            </span>
          </div>
        </div>

        <div className="summit-agenda-list">
          {agenda.map((item, i) => {
            const typeClass = item.type.toLowerCase().replace(" ", "-");
            return (
              <div key={i} className="summit-glass-card-light summit-agenda-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="summit-agenda-btn"
                >
                  <span className="summit-agenda-time">{item.time}</span>
                  <span className={`summit-agenda-type ${typeClass}`}>{item.type}</span>
                  <span className="summit-agenda-title">{item.title}</span>
                  <span className="summit-agenda-chevron">
                    {open === i ? "▲" : "▼"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SummitAgendaSection;
