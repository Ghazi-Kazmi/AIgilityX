import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import "./FAQSection.css"; // Ensure you import the CSS file

const faqs = [
  {
    q: "Who is eligible to participate?",
    a: "Final‑year students in AI, CS, Data or Cybersecurity, young professionals with 1–5 years of experience, AI/ML engineers, system architects, product designers and governance & policy thinkers.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Participation in the AIgilityX™ Sovereign Agentic AI Hackathon 2026 is free of charge.",
  },
  {
    q: "How are teams formed?",
    a: "Teams are formed during the Phase 1 Fellowship onsite event on 26 March. You may also register with a pre‑formed team of up to 5 members.",
  },
  {
    q: "What should we build?",
    a: "Teams must deliver a working prototype, a Sovereign AI Architecture Blueprint, an Agentic Decision Workflow and an Enterprise Governance Mapping — all following the AIgilityX™ Sovereign AI Framework.",
  },
  {
    q: "What are the award categories?",
    a: "Most Sovereign Design, Best Enterprise‑Ready Architecture, Most Scalable Agentic System, Greatest Social Impact and People's Choice Award.",
  },
  {
    q: "Is the hackathon fully remote?",
    a: "It's hybrid. The Fellowship (Phase 1) and Grand Finale (Phase 4) are onsite in Pakistan. The Build Sprint (Phase 2) is fully remote, and voting (Phase 3) happens online.",
  },
  {
    q: "What do participants gain?",
    a: "Architecture‑first AI capability, enterprise transformation exposure, recognition aligned with AIgilityX USA standards, strategic positioning for GCC & global markets, and a network of mentors & ecosystem builders.",
  },
  {
    q: "How are submissions judged?",
    a: "Architecture Depth (35%), Agentic Autonomy (25%), Governance (20%) and Scalability (20%). Tooltips with full criteria details are available in the Selection Criteria section.",
  },
];

const FAQSection = () => (
  <section id="faq" className="faq-section">
    <div className="faq-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="faq-heading"
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="faq-accordion">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="faq-item"
          >
            <AccordionTrigger className="faq-trigger">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="faq-content">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;