import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ProjectSection from "./ProjectSection";

const ProjectPage: React.FC = () => {
  return (
    <Fragment>
      <div className='service-page inner-page'>
        <div className="body_wrap o-clip">
          <div className="content-reveal-wrapper">
            <Header />
            <main>
              <PageTitle pageTitle="Our projects" pagesub="Our projects" />
              <ProjectSection />
            </main>
            <Scrollbar />
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectPage;
