import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Clock } from "lucide-react";

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

const typeColors: Record<string, string> = {
  Networking: "bg-primary/10 text-primary",
  Plenary: "bg-success/10 text-success",
  Roundtable: "bg-accent/10 text-accent-foreground",
  Break: "bg-muted text-muted-foreground",
  Spotlight: "bg-yellow-500/10 text-yellow-600",
  "Executive Dinner": "bg-primary/10 text-primary",
};

const AgendaSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="agenda" className="section-light py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Summit Programme</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl mt-3 text-foreground">
            One Afternoon. Seven Outcomes.
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Every session is outcome-driven — no panels, no passive listening. Only strategic dialogue that produces national-level action.</p>
          <div className="flex justify-center gap-3 mt-4">
            <span className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground">
              <Calendar size={12} /> Thursday · 3rd Week of June 2026
            </span>
            <span className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground">
              <Clock size={12} /> 14:00 – 20:00 PKT
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {agenda.map((item, i) => (
            <div key={i} className="glass-card-light overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-muted-foreground text-xs font-mono shrink-0 w-28">{item.time}</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shrink-0 ${typeColors[item.type] || "bg-muted text-muted-foreground"}`}>{item.type}</span>
                <span className="font-heading font-semibold text-foreground text-sm flex-1">{item.title}</span>
                {open === i ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
