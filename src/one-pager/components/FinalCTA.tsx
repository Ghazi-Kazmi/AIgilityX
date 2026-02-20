import { motion } from "framer-motion";
import { PenLine, BookOpen, Heart, Crown } from "lucide-react";

const FinalCTA = () => (
  <section id="apply" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card/60 border border-border rounded-3xl p-10 text-center mb-16"
        style={{ backgroundImage: "radial-gradient(circle at 50% 30%, hsl(186 95% 73% / 0.04) 0%, transparent 50%)" }}
      >
        <Crown className="text-gold mx-auto mb-4" size={48} />
        <h2 className="font-display text-3xl font-bold mb-4">Why AIgilityX™</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Architecture‑first AI transformation: Sovereign AI Readiness · Enterprise AI Factory Design · Agentic AI Governance · AIgile Leadership Enablement.
          <br />
          <span className="text-foreground font-semibold">Explore. Experiment. Execute. Elevate. Expand.</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="inline-block bg-primary/15 text-primary px-5 py-2 rounded-full text-sm font-semibold border border-primary/30 mb-4">
          ⚡ THE FUTURE BELONGS TO THOSE WHO ARCHITECT IT
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-black mb-8">
          Become a Sovereign
          <br />
          Agentic AI Leader
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform animate-pulse-glow flex items-center gap-2">
            <PenLine size={20} /> Apply Now
          </a>
          <a href="#" className="border border-primary text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2">
            <BookOpen size={20} /> Become a Mentor
          </a>
          <a href="#" className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors flex items-center gap-2">
            <Heart size={20} /> Become a Sponsor
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
