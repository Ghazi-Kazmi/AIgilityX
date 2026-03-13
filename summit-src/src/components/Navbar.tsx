import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Imperative", "Objectives", "Audience", "Agenda", "Speakers", "Impact", "Deliverables", "Partners"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-primary">AI</span>
          <span className="text-white">gilityX</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-primary text-sm font-medium transition-colors">
              {l}
            </a>
          ))}
        </div>

        <a href="#cta" className="hidden lg:inline-flex btn-outline text-sm py-2 px-5">
          Request Invitation
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-deep/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-white/70 hover:text-primary text-sm font-medium">
              {l}
            </a>
          ))}
          <a href="#cta" className="btn-outline text-sm py-2 px-5 inline-block mt-2">Request Invitation</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
