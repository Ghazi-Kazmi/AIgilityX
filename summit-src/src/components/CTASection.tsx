const CTASection = () => (
  <section id="cta" className="section-dark dotted-pattern py-24 md:py-36">
    <div className="container mx-auto px-6 text-center">
      <span className="pill-badge mb-6 inline-block text-xs">SEATS ARE LIMITED</span>
      <h2 className="font-heading font-black text-4xl md:text-6xl text-white leading-tight max-w-4xl mx-auto">
        Pakistan's AI Future Won't Wait.{" "}
        <span className="text-primary">Will You?</span>
      </h2>
      <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm md:text-base">
        The AIgilityX Sovereign AI Summit 2026 is Pakistan's definitive national platform for turning AI strategy into sovereign execution. 100–150 leaders. One afternoon. Seven outcomes.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a href="#" className="btn-primary glow-blue animate-pulse-glow text-sm md:text-base">Request an Invitation →</a>
        <a href="#partners" className="btn-outline-light text-sm md:text-base">Become a Strategic Partner</a>
      </div>
    </div>
  </section>
);

export default CTASection;
