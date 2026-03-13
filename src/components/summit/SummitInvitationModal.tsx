import React, { useState } from "react";
import { X, Check, Users, Send } from "lucide-react";

interface SummitInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  {
    id: "summit-only",
    title: "Summit Only — Main Summit Access",
    price: "PKR 150,000",
    desc: "excl. tax / per delegate",
    features: [
      "Full afternoon programme (14:00 – 20:00)",
      "Ministerial keynote & all roundtables",
      "Signature launches & whitepaper",
      "Executive dinner & networking",
    ],
  },
  {
    id: "group-reservation",
    title: "Group / Table Reservation",
    badge: "GROUP DISCOUNT",
    price: "PKR 450,000",
    desc: "4 delegates - pay for 3",
    saveText: "Save PKR 150,000 — 1 delegate attends free",
    features: [
      "Reserved table of 4 delegates from your organisation",
      "All Summit Only benefits for each delegate",
      "Institutional branding on reserved delegate table",
      "Dedicated group networking session slot",
      "Priority seating in the keynote plenary hall",
    ],
    note: "Delegate details for all 4 attendees will be collected after confirmation.",
  },
  {
    id: "premium-bundle",
    title: "Premium Bundle — Summit + Workshop",
    badge: "BEST VALUE",
    price: "PKR 250,000",
    desc: "excl. tax / per delegate",
    saveText: "Save PKR 50,000 vs. purchasing separately",
    features: [
      "Everything in Summit Only",
      "Day 2: Board & C-Suite Workshop (30–40 seats)",
      "Chatham House boardroom session",
      "Islamabad Accord drafting",
      "Fellowship founding cohort recognition",
    ],
    actionText: "View Workshop Agenda",
  },
];

const SummitInvitationModal: React.FC<SummitInvitationModalProps> = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0].id);

  if (!isOpen) return null;

  return (
    <div className="summit-modal-overlay">
      <div className="summit-modal-content">
        <div className="summit-modal-header">
          <div>
            <span className="summit-modal-subtitle">BY INVITATION ONLY</span>
            <h2 className="summit-modal-title">Request an Invitation</h2>
          </div>
          <button className="summit-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="summit-modal-body">
          <div className="summit-modal-section">
            <h3 className="summit-modal-section-title">
              SELECT PACKAGE <span className="primary">*</span>
            </h3>
            
            <div className="summit-package-list">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`summit-package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="summit-package-header">
                    <div className="summit-package-radio">
                      <div className={`summit-radio-circle ${selectedPackage === pkg.id ? 'active' : ''}`} />
                    </div>
                    <div className="summit-package-title-group">
                      <div className="summit-package-title-row">
                        <h4>{pkg.title}</h4>
                        {pkg.badge && <span className="summit-package-badge">{pkg.badge}</span>}
                      </div>
                      {pkg.saveText && <p className="summit-package-save">{pkg.saveText}</p>}
                    </div>
                    <div className="summit-package-price-group">
                      <div className="summit-package-price">{pkg.price}</div>
                      <div className="summit-package-desc">{pkg.desc}</div>
                    </div>
                  </div>

                  <ul className="summit-package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={14} className="feature-icon" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                    {pkg.actionText && (
                      <li className="action-link">
                        <span className="toggle-icon">v</span> {pkg.actionText}
                      </li>
                    )}
                  </ul>
                  
                  {pkg.note && (
                    <div className="summit-package-note">
                      <Users size={14} /> {pkg.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="summit-modal-subtext">* Government & academic rates available on request.</p>
          </div>

          <div className="summit-modal-section summit-form-grid">
            <div className="summit-form-group">
              <label>FULL NAME <span className="primary">*</span></label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="summit-form-group">
              <label>DESIGNATION / TITLE <span className="primary">*</span></label>
              <input type="text" placeholder="e.g. CEO, Director General" />
            </div>
            <div className="summit-form-group full-width">
              <label>ORGANISATION / INSTITUTION <span className="primary">*</span></label>
              <input type="text" placeholder="Ministry, company or institution" />
            </div>
            <div className="summit-form-group">
              <label>EMAIL ADDRESS <span className="primary">*</span></label>
              <input type="email" placeholder="your@organisation.com" />
            </div>
            <div className="summit-form-group">
              <label>CONTACT NUMBER <span className="primary">*</span></label>
              <input type="tel" placeholder="+92 xxx xxxx xxx" />
            </div>
            <div className="summit-form-group full-width">
              <label>SECTOR / DOMAIN</label>
              <select defaultValue="">
                <option value="" disabled>Select your sector</option>
                <option value="tech">Technology</option>
                <option value="gov">Government</option>
                <option value="edu">Education / Academia</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="summit-form-group full-width">
              <label>WHY DO YOU WISH TO ATTEND? <span className="optional">(OPTIONAL)</span></label>
              <textarea 
                placeholder="Briefly describe your interest and what you hope to contribute or gain..."
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="summit-modal-footer">
          <button className="summit-modal-submit">
            <Send size={16} /> Submit Invitation Request
          </button>
          <p className="summit-modal-disclaimer">
            Participation is by invitation only and subject to vetting and approval by the AIgilityX team.
          </p>
        </div>
      </div>
    </div>
  );
};



export default SummitInvitationModal;
