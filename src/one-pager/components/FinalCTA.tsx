import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenLine, BookOpen, Heart, Crown, X } from "lucide-react";

interface FinalCTAProps {
  onPartnerClick: () => void;
}

const APPLY_FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSeUd1C69SmfCWEfdt4OURj-MLqn5P1miAJVdfZDcalg2bhh_A/viewform?embedded=true";

const MENTOR_FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLScdzJp79Xpti4NriBQA-G0u5fhcbA18OrOZuSvwn-bVfbD4hA/viewform?embedded=true";

const FinalCTA = ({ onPartnerClick }: FinalCTAProps) => {
  const [activeModal, setActiveModal] = useState<"apply" | "mentor" | null>(null);

  const modalTitle = activeModal === "mentor" ? "Mentor Form" : "Application Form";
  const modalSrc = activeModal === "mentor" ? MENTOR_FORM_SRC : APPLY_FORM_SRC;

  return (
    <section id="apply" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/60 border-0 rounded-3xl p-10 text-center mb-16 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] cursor-pointer"
          style={{ backgroundImage: "radial-gradient(circle at 50% 30%, hsl(186 95% 73% / 0.04) 0%, transparent 50%)" }}
        >
          <Crown className="text-gold mx-auto mb-4" size={48} />
          <h2 className="font-display text-3xl font-bold mb-4">Why AIgilityXâ„¢</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Architecture-first AI transformation: Sovereign AI Readiness · Enterprise AI Factory Design · Agentic AI Governance · AIgile Leadership Enablement.
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
          <span className="inline-block bg-primary/15 text-primary px-5 py-2 rounded-full text-sm font-semibold border-0 mb-4">
            THE FUTURE BELONGS TO THOSE WHO ARCHITECT IT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mb-8">
            Become a Sovereign
            <br />
            Agentic AI Leader
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveModal("apply")}
              className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform animate-pulse-glow flex items-center gap-2 border-none cursor-pointer"
            >
              <PenLine size={20} /> Apply Now
            </button>

            <button
              onClick={() => setActiveModal("mentor")}
              className="bg-card border-0 text-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] flex items-center gap-2 cursor-pointer"
            >
              <BookOpen size={20} /> Become a Mentor
            </button>

            <button
              onClick={onPartnerClick}
              className="bg-card border-0 text-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_#0d97c9] flex items-center gap-2 cursor-pointer"
            >
              <Heart size={20} /> Become a Sponsor
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-gray-800 font-bold ml-2">{modalTitle}</h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 w-full bg-white overflow-hidden">
                <iframe
                  title={modalTitle}
                  src={modalSrc}
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

export default FinalCTA;
