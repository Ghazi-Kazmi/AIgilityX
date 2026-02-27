import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/hero/Hero";
import AboutSection from "../../components/about/about";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import GlobalAIExpertiseSection from "../../components/GlobalAIExpertiseSection/GlobalAIExpertiseSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import IndustriesMarqueeSection from "../../components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "../../components/Industries/Industries";
import ContactSection from "../../components/ContactSection/ContactSection";
import TestimonialSection from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";


const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "AIgilityX™: Sovereign AI & Digital twins & Transformation Solutions";
  }, []);

  return (
    <Fragment>
        <div className='ai-agency'>
          <div className="body_wrap o-clip">
            <div className="content-reveal-wrapper">
              <Header />
              <main>
                <HeroSection/>
                <AboutSection/>
                <ProjectSection/>
                <ServiceSection/>
                <GlobalAIExpertiseSection />
                <FeatureSection/>
                <IndustriesMarqueeSection/>
                <IndustriesSection/>
                {/* <TestimonialSection/>
                <BlogSection/> */}
                <ContactSection/>
              </main>
              <Scrollbar />
            </div>
            <Footer />
          </div>
        </div>
    </Fragment>
  );
};

export default HomePage;
