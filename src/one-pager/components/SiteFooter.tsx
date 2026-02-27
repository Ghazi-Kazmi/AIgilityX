import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";
import "./SiteFooter.css"; 

// 1. Define your social platforms as objects with individual URLs
const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/aigilityx/posts/?feedView=all" },
  { name: "X / Twitter", url: "https://x.com/aigilityx/" },
  { name: "Youtube ", url: "https://www.youtube.com/@AIgilityX" },
  { name: "Facebook", url: "https://www.facebook.com/AIgilityX" }
];

const SiteFooter = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="contact-list">
              <li className="contact-item"><Mail size={14} />  info@aigilityX.com</li>
              <li className="contact-item"><Phone size={14} />   +17139256347</li>
              <li className="contact-item"><Globe size={14} /> Pakistan · Asia/Karachi timezone</li>
              <li className="contact-item"><Globe size={14} />  Richmond TX, 77407, USA</li>
            </ul>
            
          </div>

          {/* Social Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Follow & Share</h4>
            <div className="social-tags">
              {/* 2. Map over the objects and use social.url for the href */}
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-tag"
                >
                  @AIgilityX — {social.name}
                </a>
              ))}
            </div>
            <p className="social-hashtag">#AIgilityXHackathon #SovereignAI</p>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Get updates, announcements and blog posts.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="newsletter-form"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom / Legal */}
        <div className="footer-bottom">
          <p className="copyright-text">© 2026 AIgilityX™ — All rights reserved. Sovereign Agentic AI Hackathon 2026</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/conduct">Code of Conduct</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;