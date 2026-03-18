import React, { useState } from "react";
import "../css/one-pager.css";

import Header from "../components/Header/Header";
import HeroSection from "./components/HeroSection";
import ImperativeSection from "./components/ImperativeSection";
import DifferenceSection from "./components/DifferenceSection";
import TimelineSection from "./components/TimelineSection";
import ProgramSection from "./components/ProgramSection";
import CriteriaSection from "./components/CriteriaSection";
import ApplySection from "./components/ApplySection";
import MentorsSection from "./components/MentorsSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import PartnersSection from "./components/PartnersSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import SiteFooter from "./components/SiteFooter";
import BackToTop from "./components/BackToTop";
import PartnerFormModal from "./components/PartnerFormModal";

const OnePagerPage: React.FC = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <div className="op-hackathon-layout">
      <Header />
      <div className="op-root op-below-header min-h-screen bg-background text-foreground">
        <div className="op-content-below-sub">
          <HeroSection onPartnerClick={() => setPartnerModalOpen(true)} />
          <ImperativeSection />
          <DifferenceSection />
          <TimelineSection />
          <ProgramSection />
          <CriteriaSection />
          <ApplySection />
          <MentorsSection />
          <OpportunitiesSection />
          <PartnersSection onPartnerClick={() => setPartnerModalOpen(true)} />
          <FAQSection />
          <FinalCTA onPartnerClick={() => setPartnerModalOpen(true)} />
          <SiteFooter />
          <BackToTop />
        </div>
      </div>

      <PartnerFormModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
};

export default OnePagerPage;
