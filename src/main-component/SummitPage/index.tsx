import React, { useEffect } from "react";
import "../../css/summit.css";

import SummitNavbar from "../../components/summit/SummitNavbar";
import SummitInvitationModal from "../../components/summit/SummitInvitationModal";
import SummitHeroSection from "../../components/summit/SummitHeroSection";
import SummitUrgencySection from "../../components/summit/SummitUrgencySection";
import SummitSpeakersSection from "../../components/summit/SummitSpeakersSection";
import SummitObjectivesSection from "../../components/summit/SummitObjectivesSection";
import SummitAgendaSection from "../../components/summit/SummitAgendaSection";
import SummitDeliverablesSection from "../../components/summit/SummitDeliverablesSection";
import SummitAudienceSection from "../../components/summit/SummitAudienceSection";
import SummitPartnersSection from "../../components/summit/SummitPartnersSection";
import SummitVenueSection from "../../components/summit/SummitVenueSection";
import SummitCTASection from "../../components/summit/SummitCTASection";
import SummitFooter from "../../components/summit/SummitFooter";

const SummitPage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  
  useEffect(() => {
    // Basic setup for the page to ensure smooth scrolling to hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    // Trigger on mount if there's a hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="summit-page">
      <SummitNavbar onRequestInvitation={() => setModalOpen(true)} />
      <SummitHeroSection />
      <SummitUrgencySection />
      <SummitSpeakersSection />
      <SummitObjectivesSection />
      <SummitAgendaSection />
      <SummitDeliverablesSection />
      <SummitAudienceSection />
      <SummitPartnersSection />
      <SummitVenueSection />
      <SummitCTASection />
      <SummitFooter />
      
      <SummitInvitationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
};

export default SummitPage;
