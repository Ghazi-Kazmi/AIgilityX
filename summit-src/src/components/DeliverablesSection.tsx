import { FileText, Target, Handshake, BookOpen, Award, Briefcase, Rocket, Zap, Shield, Globe, Database, Users } from "lucide-react";

const deliverables = [
  { icon: FileText, title: "Sovereign AI Summit Whitepaper", desc: "Comprehensive post-summit document capturing consensus, frameworks, and execution priorities." },
  { icon: Target, title: "National AI Ecosystem Alignment Framework", desc: "A structured framework for aligning public, private, and academic institutions around AI sovereignty." },
  { icon: Handshake, title: "AI Risk & Governance Principles Document", desc: "Principles for responsible AI governance, cybersecurity integration, and risk management." },
  { icon: BookOpen, title: "AI Talent Acceleration Outline", desc: "A national blueprint for building Pakistan's AI talent pipeline from education to executive level." },
  { icon: Award, title: "Sovereign AI for Social Impact Framework", desc: "A framework for deploying AI responsibly across health, education, agriculture, and disaster response." },
  { icon: Briefcase, title: "Working Group Charters", desc: "Formal charters for each working group with defined mandates, members, and timelines." },
];

const launches = [
  { icon: Rocket, text: "Sovereign AI Working Group" },
  { icon: Zap, text: "Pakistan AI Capability Framework" },
  { icon: Shield, text: "National AI Governance Draft Initiative" },
  { icon: Globe, text: "AI Talent Acceleration Taskforce" },
  { icon: Database, text: "Sovereign AI for Social Impact Working Group" },
  { icon: Users, text: "AIgilityX Sovereign AI Leadership Fellowship" },
];

const DeliverablesSection = () => (
  <section id="deliverables" className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Post-Summit Outputs</span>
        <h2 className="font-heading font-black text-3xl md:text-5xl mt-3 text-foreground">Strategic Deliverables</h2>
        <p className="text-muted-foreground mt-3 text-sm">Every summit session is designed to produce tangible, actionable outputs for national AI progress.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {deliverables.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="glass-card-light p-6 hover:shadow-xl transition-shadow">
            <Icon size={22} className="text-success mb-4" />
            <h3 className="font-heading font-bold text-foreground text-sm mb-2">{title}</h3>
            <p className="text-muted-foreground text-xs">{desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-secondary rounded-3xl p-8 md:p-12">
        <div className="text-center mb-8">
          <span className="text-primary/80 font-heading font-semibold text-xs uppercase tracking-widest">Signature Announcements</span>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mt-2">Proposed Summit Launches</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {launches.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-full px-5 py-3 border border-glass">
              <Icon size={16} className="text-primary shrink-0" />
              <span className="text-white text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
