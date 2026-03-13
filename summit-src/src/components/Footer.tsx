import { MapPin, Calendar, Clock, Users, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-deep pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#" className="font-heading text-2xl font-bold tracking-tight">
            <span className="text-primary">AI</span>
            <span className="text-white">gilityX</span>
          </a>
          <p className="text-white/40 text-sm mt-3 max-w-xs">Supporting Pakistan's transition from AI adoption to AI sovereignty — across security, economy, and social impact.</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Summit 2026</h4>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: "Serena Hotel, Islamabad" },
              { icon: Calendar, text: "Third Week of June 2026" },
              { icon: Clock, text: "14:00 – 20:00 PKT" },
              { icon: Users, text: "Invitation Only · 100–150 Leaders" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                <Icon size={14} className="text-primary" /> {text}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
            <Mail size={14} className="text-primary" /> summit@aigilityx.com
          </div>
          <p className="text-white/40 text-xs">For invitations, partnerships &amp; institutional enquiries</p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">© 2026 AIgilityX. All rights reserved.</p>
        <p className="text-white/30 text-xs text-center md:text-right">AIgilityX Sovereign AI Summit 2026 – Pakistan · From Strategy to Scale</p>
      </div>
    </div>
  </footer>
);

export default Footer;
