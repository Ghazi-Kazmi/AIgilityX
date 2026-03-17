import { useState } from "react";

const tiers = ["All Partners", "Strategic Sponsor", "Knowledge Partner", "Institutional Partner"];

const partners = [
  { name: "National AI Authority", tier: "Gold", display: "★ Gold Tier" },
  { name: "Digital Pakistan Ventures", tier: "Gold", display: "★ Gold Tier" },
  { name: "NUST — AI Research Centre", tier: "Silver", display: "Silver Tier" },
  { name: "PTA — Digital Infrastructure", tier: "Silver", display: "Silver Tier" },
  { name: "NCCS — Cybersecurity", tier: "Silver", display: "Silver Tier" },
  { name: "AI Policy Institute", tier: "Bronze", display: "Bronze Tier" },
  { name: "e-Government AI Division", tier: "Bronze", display: "Bronze Tier" },
  { name: "Ignite National Tech Fund", tier: "Bronze", display: "Bronze Tier" },
  { name: "COMSATS AI Lab", tier: "Bronze", display: "Bronze Tier" },
];

const tierColors: Record<string, string> = {
  Gold: "border-yellow-500/40 text-yellow-400",
  Silver: "border-gray-400/40 text-gray-300",
  Bronze: "border-amber-700/40 text-amber-600",
};

const PartnersSection = () => {
  const [filter, setFilter] = useState("All Partners");
  const filtered = filter === "All Partners" ? partners : partners;

  return (
    <section id="partners" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Summit Partners</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mt-3">
            Institutions Shaping Pakistan's Sovereign AI Future
          </h2>
          <p className="text-white/60 mt-3 text-sm">Strategic partners, knowledge institutions, and sovereign AI champions committed to Pakistan's national AI transformation agenda.</p>
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  filter === t ? "bg-primary border-primary text-primary-foreground" : "border-white/20 text-white/60 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filtered.map((p, i) => (
            <div key={i} className={`glass-card p-5 border ${tierColors[p.tier]?.split(" ")[0]} hover:border-primary/40 transition-colors`}>
              <span className={`text-[10px] uppercase tracking-wider font-bold ${tierColors[p.tier]?.split(" ")[1]}`}>{p.display}</span>
              <div className="w-full h-16 bg-white/10 rounded-md mt-3 mb-3 flex items-center justify-center">
                <span className="text-white/30 text-xs">Logo</span>
              </div>
              <p className="text-white font-heading font-semibold text-sm">{p.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/40 text-sm mb-4 italic">Partnership slots are limited. Your logo could be here.</p>
          <a href="#cta" className="btn-outline-light text-sm">Become a Strategic Partner</a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
