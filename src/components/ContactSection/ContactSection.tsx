import React from "react";
import contactBg from "../../assets/contact/contact.jpg";
import ContactForm from "../ContactFrom/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-section"
      className="contact-section contact-section--fullbg pt-150 pb-140 bg_img"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-section__overlay" aria-hidden />
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="sec-title contact-section__sec-title text-center mb-50">
              <span className="sub-title">Get in Touch</span>
              <h2 className="title">We&apos;d love to hear from you</h2>
              <div className="contact-section__underline" aria-hidden />
            </div>
          </div>
        </div>
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-10 col-xl-7">
            <div className="xb-contact-form xb-contact-form--right contact-section__form-card">
              <div className="form-heading text-center mb-30">
                <h3 className="title">Ready to collaborate with us?</h3>
                <p className="sub-title">
                  Who knows where a single message might lead you.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
