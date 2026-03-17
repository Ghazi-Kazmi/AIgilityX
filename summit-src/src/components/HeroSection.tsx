import { useEffect, useState } from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const TARGET_DATE = new Date("2026-06-18T14:00:00").getTime();

const HeroSection = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Fixed Gradient: Shifted from Green (HSL 160) to Dark Navy/Black */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.7) 0%, rgba(10, 15, 30, 0.9) 50%, rgba(0, 0, 0, 0.98) 100%)" 
        }} 
      />

      {/* Main Container: Removed text-center, added max-w to align everything left perfectly */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-32 max-w-6xl">
        
        {/* Top Badge Fixed */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-white/70 mb-8 uppercase">
          <span className="text-primary">#</span> SOVEREIGN AI SUMMIT 2026 · PAKISTAN
        </div>

        {/* Headings */}
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight">
          <span className="text-white block mb-2">AlgilityX</span>
          <span className="text-primary block mb-2">Sovereign AI</span>
          <div className="flex flex-wrap items-center gap-4">
            {/* Outline Text Trick */}
            <span 
              style={{ 
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.7)', 
                color: 'transparent' 
              }}
            >
              Summit 2026
            </span>
            <span className="text-white">— Pakistan</span>
          </div>
        </h1>

        <p className="text-primary font-heading font-semibold text-lg md:text-2xl mb-4 max-w-3xl">
          From Strategy to Scale: Building Pakistan's Sovereign AI Ecosystem
        </p>

        <p className="text-white/60 max-w-2xl text-sm md:text-base mb-10">
          A national leadership dialogue to architect Pakistan's AI sovereignty, security, innovation capacity, social impact, and digital independence.
        </p>

        {/* Info Pills: Changed justify-center to justify-start */}
        <div className="flex flex-wrap justify-start gap-3 mb-12">
          {[
            { icon: MapPin, text: "Serena Hotel, Islamabad" },
            { icon: Calendar, text: "18 June 2026 · Thursday" },
            { icon: Users, text: "100–150 National Leaders" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 text-white/80 text-sm">
              <Icon size={16} className="text-primary" /> {text}
            </span>
          ))}
        </div>

        {/* Countdown Area */}
        <p className="text-white/50 uppercase tracking-[0.2em] text-xs font-heading font-semibold mb-4">Summit Commences In</p>
        
        <div className="flex justify-start items-center gap-3 md:gap-4 mb-10">
          {[
            { val: pad(time.days), label: "Days" },
            { val: pad(time.hours), label: "Hours" },
            { val: pad(time.minutes), label: "Minutes" },
            { val: pad(time.seconds), label: "Seconds" },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-3 md:gap-4">
              {/* Lowered padding, changed numbers to primary color */}
              <div className="bg-black/40 border border-primary/20 px-4 py-2 md:px-5 md:py-3 min-w-[70px] md:min-w-[85px] rounded-xl text-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,210,255,0.05)]">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{val}</div>
                <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{label}</div>
              </div>
              {/* Made colons smaller and dimmer */}
              {i < 3 && <span className="text-primary/40 text-xl md:text-2xl font-bold -mt-4">:</span>}
            </div>
          ))}
        </div>

        {/* Buttons: Changed justify-center to justify-start */}
        <div className="flex flex-wrap justify-start gap-4">
          <a href="#cta" className="btn-primary glow-blue text-sm md:text-base px-8 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all">
            Reserve My Seat &rarr;
          </a>
          <a href="#partners" className="btn-outline-light text-sm md:text-base px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all">
            Become a Strategic Partner
          </a>
        </div>
      </div>

      {/* Bottom Slant Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
          <path d="M0 80L1440 80L1440 0L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;