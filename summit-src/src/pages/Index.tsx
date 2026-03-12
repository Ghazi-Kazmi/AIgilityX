import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UrgencySection from "@/components/UrgencySection";
import SpeakersSection from "@/components/SpeakersSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import AgendaSection from "@/components/AgendaSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import AudienceSection from "@/components/AudienceSection";
import PartnersSection from "@/components/PartnersSection";
import VenueSection from "@/components/VenueSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <UrgencySection />
    <SpeakersSection />
    <ObjectivesSection />
    <AgendaSection />
    <DeliverablesSection />
    <AudienceSection />
    <PartnersSection />
    <VenueSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
