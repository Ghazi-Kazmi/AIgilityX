import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "The Imperative", href: "#imperative" },
  { label: "Timeline", href: "#timeline" },
  { label: "Program", href: "#program" },
  { label: "Mentors", href: "#mentors" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="op-sub-header">
      <div className="container flex items-center justify-between h-12 min-h-[3rem]">
        <a href="#" className="font-display text-xl font-extrabold text-primary tracking-wide">
          AIgilityX™
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#apply" className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition-transform">
            Apply Now
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground font-medium py-2">
                  {l.label}
                </a>
              ))}
              <a href="#apply" onClick={() => setOpen(false)} className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full text-center font-semibold">
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
