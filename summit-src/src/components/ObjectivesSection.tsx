import { Shield, Database, Cpu, GraduationCap, Globe, Scale, Landmark } from "lucide-react";

const objectives = [
  { num: "01", icon: Shield, title: "Define Pakistan's Sovereign AI Execution Roadmap", desc: "Establish a concrete national AI roadmap with execution milestones and institutional ownership." },
  { num: "02", icon: Database, title: "Align Public Sector, Industry, Academia & Security", desc: "Bring key stakeholders into unified strategic alignment across sectors." },
  { num: "03", icon: Cpu, title: "Identify Infrastructure & Compute Requirements", desc: "Map Pakistan's compute gaps and infrastructure priorities for AI sovereignty." },
  { num: "04", icon: Scale, title: "Establish Governance & Ethical Frameworks", desc: "Draft AI governance principles, regulatory guardrails, and ethical deployment standards." },
  { num: "05", icon: GraduationCap, title: "Design National AI Talent Strategy", desc: "Develop a national plan for AI curriculum reform, reskilling, and executive literacy." },
  { num: "06", icon: Globe, title: "Enable AI for Social Goods & Public Impact", desc: "Ensure AI serves citizens in health, education, agriculture, and disaster response." },
  { num: "07", icon: Landmark, title: "Announce Structured Working Groups", desc: "Formalize actionable working groups with institutional mandates and timelines." },
];

const ObjectivesSection = () => (
  <section id="objectives" className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">What We Will Achieve</span>
        <h2 className="font-heading font-black text-3xl md:text-5xl mt-3 text-foreground">
          Seven Pillars. One National Agenda.
        </h2>
        <p className="text-muted-foreground mt-4 text-sm">Each objective is designed to produce a tangible, institutional-level outcome within 90 days of the summit.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {objectives.map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="glass-card-light p-6 relative overflow-hidden group hover:shadow-xl transition-shadow">
            <span className="absolute top-3 right-4 text-6xl font-heading font-black text-muted/80 select-none">{num}</span>
            <Icon size={24} className="text-primary mb-4 relative z-10" />
            <h3 className="font-heading font-bold text-foreground text-sm mb-2 relative z-10">{title}</h3>
            <p className="text-muted-foreground text-xs relative z-10">{desc}</p>
          </div>
        ))}
        <div className="glass-card-light p-6 flex items-center justify-center bg-primary/5 border-primary/20">
          <p className="text-primary font-heading font-semibold text-sm text-center italic">
            "Pakistan's AI sovereign future is not a distant aspiration — it is an execution challenge."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
