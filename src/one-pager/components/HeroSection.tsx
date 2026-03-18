import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Handshake, X } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const heroBgUrl =
  typeof process !== "undefined" && process.env?.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/one-pager/hero-bg.jpg`
    : "/one-pager/hero-bg.jpg";

interface HeroSectionProps {
  onPartnerClick: () => void;
}

const HeroSection = ({ onPartnerClick }: HeroSectionProps) => {
  const [activeModal, setActiveModal] = useState<"apply" | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBgUrl})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary font-semibold text-lg mb-4 tracking-widest uppercase">AIgilityX™ presents</p>
          <h1 className="text-gradient font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
            Pakistan&apos;s First Sovereign Agentic AI Hackathon 2026
          </h1>
          <p className="text-primary text-xl sm:text-2xl font-medium mb-2">Build Local. Run Sovereign. Scale Global.</p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Pakistan&apos;s Architecture-Driven Agentic AI Hackathon - activating the next generation of Sovereign AI leaders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card rounded-full px-6 py-4 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium mb-10"
        >
          <span>Fellowship Onsite: 3 April</span>
          <span>Remote Build: 4 & 5 April</span>
          <span>Evaluation: 5 April</span>
          <span>Grand Finale: 6 April</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-widest">Fellowship Starts In</p>
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => setActiveModal("apply")}
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform flex items-center gap-2"
          >
            <ArrowRight size={20} /> Apply Now
          </button>
          <button
            onClick={onPartnerClick}
            className="bg-transparent border border-primary text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Handshake size={20} /> Become a Partner
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[90vh] max-h-[900px]"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 relative">
                <h3 className="text-gray-800 font-bold ml-2">Hackathon Application</h3>

                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 transition-colors absolute top-4 right-4"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 w-full bg-white overflow-hidden">
                <iframe
                  title="Hackathon Application Form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeUd1C69SmfCWEfdt4OURj-MLqn5P1miAJVdfZDcalg2bhh_A/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                >
                  Loading...
                </iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
