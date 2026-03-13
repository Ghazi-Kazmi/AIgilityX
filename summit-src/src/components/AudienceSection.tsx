import { Landmark, Building, GraduationCap, Shield, Globe, Briefcase, Users, Award, UserCheck, Heart, Check } from "lucide-react";

const audiences = [
  { icon: Landmark, title: "Federal & Provincial Government Leaders" },
  { icon: Shield, title: "Strategic & Security Institutions" },
  { icon: Building, title: "CIOs, CTOs, CISOs" },
  { icon: Globe, title: "Telecom & Infrastructure Leaders" },
  { icon: Briefcase, title: "Defense & Public Sector Technology Heads" },
  { icon: GraduationCap, title: "Academia & Research Directors" },
  { icon: Users, title: "AI Policy Experts" },
  { icon: Award, title: "Enterprise Transformation Leaders" },
  { icon: UserCheck, title: "Board Members & C-Suite Executives" },
  { icon: Heart, title: "Development Sector & Social Impact Institutions" },
];

const mainFeatures = [
  "Full access Day 1 (14:00 – 20:00)",
  "Executive dinner & networking",
  "Ministerial keynote & roundtables",
  "Signature launches & playbook",
  "Invitation-only delegate list",
];

const premiumFeatures = [
  "Everything in Main Summit",
  "Day 2 Board & C-Suite Workshop (30–40 seats)",
  "Chatham House boardroom session",
  "Islamabad Accord drafting",
  "Fellowship founding cohort recognition",
  "Post-summit peer community",
];

const AudienceSection = () => (
  <section id="audience" className="section-dark dotted-pattern py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Not a Conference. A Convening.</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mt-3">
            100–150 Decision Makers.{" "}
            <span className="text-primary">One Execution Agenda.</span>
          </h2>
          <p className="text-white/60 mt-4 text-sm">This is not a public tech conference. The summit convenes Pakistan's most senior decision-makers to align on a sovereign AI execution agenda. Every seat at the table carries institutional weight.</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/70">100–150 Participants</span>
            <span className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/70">Invitation Only</span>
            <span className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/70">Multi-Sector Leadership</span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {audiences.map(({ icon: Icon, title }, i) => (
            <div key={i} className="glass-card p-4 text-center hover:border-primary/40 transition-colors">
              <Icon size={20} className="text-primary mx-auto mb-2" />
              <p className="text-white/80 text-xs font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Join the Summit</span>
        <h2 className="font-heading font-black text-3xl md:text-4xl text-white mt-3">Select Your Participation</h2>
        <p className="text-white/60 mt-3 text-sm">Choose the main summit only, or the premium package with the exclusive Day 2 workshop (strictly limited to 40 board-level executives).</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <h3 className="font-heading font-bold text-white text-lg mb-1">Main Summit</h3>
          <div className="font-heading font-black text-3xl text-white mb-6">PKR 150,000<span className="text-white/50 text-sm font-normal">+ tax</span></div>
          <div className="space-y-3 mb-8">
            {mainFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <a href="#cta" className="block text-center bg-white/10 text-white font-semibold py-3 rounded-lg hover:bg-white/20 transition-colors text-sm">
            Register for Summit
          </a>
        </div>

        <div className="glass-card p-8 glow-border border-primary/50 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Best Value
          </span>
          <h3 className="font-heading font-bold text-white text-lg mb-1">Premium Package</h3>
          <div className="font-heading font-black text-3xl text-primary mb-6">PKR 225,000<span className="text-white/50 text-sm font-normal">+ tax</span></div>
          <div className="space-y-3 mb-8">
            {premiumFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <a href="#cta" className="btn-primary block text-center text-sm">
            Register for Premium
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AudienceSection;
