import { TrendingUp, BarChart3, Users, X, Check } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$15.7T", desc: "Global AI economic impact by 2030" },
  { icon: BarChart3, value: "0.1%", desc: "Pakistan's current share of AI investment" },
  { icon: Users, value: "50M+", desc: "Jobs at risk without AI workforce strategy" },
];

const withoutItems = [
  { title: "National dependence increases", desc: "Reliance on foreign AI systems for critical decisions" },
  { title: "Data governance remains fragmented", desc: "No unified framework for data sovereignty" },
  { title: "Security vulnerabilities rise", desc: "AI-powered threats without sovereign defense capability" },
  { title: "Public services remain inefficient", desc: "Missed opportunity to transform citizen experience" },
  { title: "Innovation ecosystems lack alignment", desc: "Talent and capital leave for other markets" },
];

const withItems = [
  { title: "Digital independence strengthens", desc: "Pakistan controls its own AI infrastructure" },
  { title: "AI enhances national security", desc: "Sovereign systems protect critical assets" },
  { title: "Public services improve significantly", desc: "AI-driven efficiency across government" },
  { title: "Social impact accelerates at scale", desc: "Health, education, agriculture transformed" },
  { title: "Economic growth scales responsibly", desc: "Pakistan becomes an AI-enabled economy" },
];

const UrgencySection = () => (
  <section id="imperative" className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">The Urgency</span>
        <h2 className="font-heading font-black text-3xl md:text-5xl mt-3 text-foreground">
          AI Sovereignty Is Not Optional.{" "}
          <span className="text-primary">It Is Existential.</span>
        </h2>
        <p className="text-muted-foreground mt-4">Every nation that delays AI sovereignty cedes control — of its data, its security, and its future. Pakistan must act now.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map(({ icon: Icon, value, desc }) => (
          <div key={value} className="glass-card-light p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
            <Icon className="absolute top-4 right-4 text-primary/20" size={32} />
            <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-3">{value}</div>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="rounded-xl overflow-hidden border border-destructive/20">
          <div className="bg-destructive text-destructive-foreground font-heading font-bold px-6 py-3 text-sm uppercase tracking-wider">Without Sovereign AI</div>
          <div className="p-6 space-y-4">
            {withoutItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="text-destructive shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-foreground/90 text-sm font-semibold">{item.title}</p>
                  <p className="text-foreground/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-success/20">
          <div className="bg-success text-success-foreground font-heading font-bold px-6 py-3 text-sm uppercase tracking-wider">With Sovereign AI</div>
          <div className="p-6 space-y-4">
            {withItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="text-success shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-foreground/90 text-sm font-semibold">{item.title}</p>
                  <p className="text-foreground/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-2xl px-8 py-6 text-center max-w-3xl mx-auto">
        <p className="text-muted-foreground text-base md:text-lg italic">
          "This summit transitions Pakistan from AI dialogue to{" "}
          <span className="text-primary font-bold not-italic">AI execution</span>."
        </p>
      </div>
    </div>
  </section>
);

export default UrgencySection;
