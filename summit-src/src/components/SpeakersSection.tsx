import { User } from "lucide-react";

const speakers = [
  { role: "KEYNOTE SPEAKER", name: "Federal Minister", title: "Minister of IT & Telecom", org: "Government of Pakistan" },
  { role: "PANELIST", name: "Chairman", title: "Chairman", org: "Pakistan Telecommunication Authority" },
  { role: "PANELIST", name: "Secretary IT", title: "Secretary", org: "Ministry of IT & Telecom" },
  { role: "ROUNDTABLE LEAD", name: "CEO", title: "Chief Executive Officer", org: "Leading Telecom Enterprise" },
  { role: "PANELIST", name: "Director General", title: "Director General", org: "National Center for AI (NUST)" },
  { role: "PANELIST", name: "CISO / CTO", title: "Chief Information Security Officer", org: "Strategic Institution" },
  { role: "ROUNDTABLE FACILITATOR", name: "AI Policy Expert", title: "Senior Advisor", org: "National AI Governance Body" },
  { role: "TALENT ROUNDTABLE LEAD", name: "CHRO", title: "Chief Human Resources Officer", org: "Enterprise — Financial Sector" },
  { role: "ACADEMIA PANELIST", name: "Rector", title: "Rector / Vice Chancellor", org: "Leading National University" },
];

const SpeakersSection = () => (
  <section id="speakers" className="section-dark dotted-pattern py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Who Will Be There</span>
        <h2 className="font-heading font-black text-3xl md:text-5xl mt-3 text-white">
          The Leaders Shaping Pakistan's{" "}
          <span className="text-primary">AI Future</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm">
          Ministers, enterprise CEOs, security leaders, academic directors, and policy strategists — united to architect Pakistan's sovereign AI future.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {speakers.map((s, i) => (
          <div key={i} className="glass-card p-6 hover:border-primary/40 transition-colors group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <User size={20} className="text-white/60" />
              </div>
              <div>
                <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mb-2">
                  {s.role}
                </span>
                <h3 className="font-heading font-bold text-white text-sm">{s.name}</h3>
                <p className="text-white/60 text-xs">{s.title}</p>
                <p className="text-white/40 text-xs">{s.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-white/40 text-center text-xs mt-8 italic">
        Speaker roster being finalised. Full confirmed list released prior to summit.
      </p>
    </div>
  </section>
);

export default SpeakersSection;
