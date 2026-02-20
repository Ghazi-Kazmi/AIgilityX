import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";

const SiteFooter = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={14} /> hackathon@aigilityx.ai</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +92 300 123 4567</li>
              <li className="flex items-center gap-2"><Globe size={14} /> Pakistan · Asia/Karachi timezone</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Follow & Share</h4>
            <div className="flex flex-wrap gap-3">
              {["LinkedIn", "X / Twitter", "Instagram", "Facebook"].map((s) => (
                <a key={s} href="#" className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full border border-border hover:border-primary transition-colors">
                  @AIgilityX — {s}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">#AIgilityXHackathon #SovereignAI</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">Get updates, announcements and blog posts.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                required
              />
              <button type="submit" className="bg-primary text-primary-foreground rounded-full p-2.5 hover:-translate-y-0.5 transition-transform" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 AIgilityX™ — All rights reserved. Sovereign Agentic AI Hackathon 2026</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
