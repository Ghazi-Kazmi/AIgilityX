import { MapPin, Calendar, Clock, Star, Users, Navigation, Mail } from "lucide-react";

const VenueSection = () => (
  <section className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Venue</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-3">Serena Hotel<br />Islamabad</h2>
          <p className="text-muted-foreground mt-3 text-sm">Pakistan's premier venue for high-level national dialogue, government summits, and executive leadership events. Located in the heart of Islamabad's diplomatic enclave.</p>
          <div className="mt-4 space-y-2">
            <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Address</span><br />Serena Hotel, Khayaban-e-Suharwardy, Islamabad</p>
            <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Enquiries</span><br />summit@aigilityx.com</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground"><Calendar size={12} /> 3rd Week of June 2026</span>
            <span className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground"><Clock size={12} /> 14:00 – 20:00 PKT</span>
            <span className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground"><Users size={12} /> Invitation Only</span>
          </div>
        </div>
        <div className="bg-success rounded-2xl p-8 text-success-foreground">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-heading font-bold text-lg">Serena Hotel</span>
          </div>
          <p className="text-white font-heading font-semibold mb-1">Islamabad, Pakistan</p>
          <p className="text-white/70 text-sm mb-6">Pakistan's Premier Diplomatic Venue</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Users, label: "Capacity", value: "500+" },
              { icon: Star, label: "Stars", value: "5★" },
              { icon: Navigation, label: "Location", value: "Central" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/10 rounded-lg p-3 text-center">
                <Icon size={16} className="mx-auto mb-1 text-white/70" />
                <div className="text-white font-heading font-bold text-sm">{value}</div>
                <div className="text-white/50 text-[10px]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">About</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-3">
            AIgilityX<br />Sovereign AI Strategy & Execution
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            AIgilityX is a Sovereign AI Strategy & Execution platform supporting Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.
          </p>
          <div className="bg-success/10 border border-success/20 rounded-xl p-5 mt-6">
            <h4 className="font-heading font-bold text-success text-sm mb-2">Our Mission</h4>
            <p className="text-foreground/70 text-xs">Support Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.</p>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-widest mb-2">Core Capabilities</h4>
          {[
            "AI Strategy Architecture",
            "Governance & Risk Frameworks",
            "Agentic AI Operating Models",
            "Infrastructure Blueprinting",
            "AI Talent Transformation",
            "AIgile Mindset™ Leadership",
          ].map((cap, i) => (
            <div key={i} className="glass-card-light flex items-center gap-4 px-5 py-3">
              <span className="text-primary font-heading font-black text-lg w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-foreground font-medium text-sm">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VenueSection;
