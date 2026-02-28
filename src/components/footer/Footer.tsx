import React from "react";
import { Link } from "react-router-dom";

// Image imports
import footerBg from "../../images/bg/footer-bg.png";
import emailIcon from "../../images/icon/email-icon.svg";
import locationIcon from "../../images/icon/location-icon.svg";
import callIcon from "../../images/icon/call-icon.svg";
import mapBg from "../../assets/footer/map.png";

const Footer: React.FC = () => {
  const arrowIcon = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.06641"
        y="19.2783"
        width="20.5712"
        height="2.61221"
        transform="rotate(-40.2798 5.06641 19.2783)"
        fill="white"
      />
      <rect
        x="7.97144"
        y="6.54443"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 7.97144 6.54443)"
        fill="white"
      />
      <rect
        x="11.6528"
        y="6.84814"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 11.6528 6.84814)"
        fill="white"
      />
      <rect
        x="15.3345"
        y="7.15186"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 15.3345 7.15186)"
        fill="white"
      />
      <rect
        x="18.7124"
        y="11.1372"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.7124 11.1372)"
        fill="white"
      />
      <rect
        x="18.4089"
        y="14.8198"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.4089 14.8198)"
        fill="white"
      />
      <rect
        x="18.1045"
        y="18.501"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.1045 18.501)"
        fill="white"
      />
    </svg>
  );

  // ONLY YOUR ORIGINAL 4 SOCIALS
  const socials = [
    {
      icon: <i className="fa-brands fa-facebook"></i>,
      name: "Facebook",
      url: "https://www.facebook.com/AIgilityX",
    },
    {
      icon: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.46973 0C14.6996 0 18.9395 4.25357 18.9395 9.5C18.9394 14.7464 14.6996 19 9.46973 19C4.24002 18.9998 8.74258e-05 14.7463 0 9.5C0 4.25366 4.23997 0.000150177 9.46973 0ZM8.27441 10.1201L4.02344 15.0771H4.98438L8.70117 10.7422L11.6709 15.0771H14.9131L10.5039 8.64062L14.5586 3.91309H13.5977L10.0771 8.01758L7.26562 3.91309H4.02344L8.27441 10.1201ZM13.5977 14.3848H12.1221L5.33008 4.63867H6.80566L13.5977 14.3848Z"
            fill="#FFF"
          />
        </svg>
      ),
      name: "Twitter",
      url: "https://x.com/aigilityx/",
    },
    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/aigilityx/",
    },
    {
      icon: <i className="fa-brands fa-square-youtube"></i>,
      name: "YouTube",
      url: "https://www.youtube.com/@AIgilityX",
    },
  ];

  return (
    <>
      <footer
        className="footer footer-style-one footer-sticky-reveal pt-145 bg_img"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="xb-footer-wrap">
        {/* Global Offices Section with Map Background */}
        <div className="xb-footer-offices" style={{ 
          backgroundImage: `url(${mapBg})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0',
          marginBottom: '0',
          position: 'relative'
        }}>
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderRadius: '0'
          }}></div>
          <div className="offices-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '60px 40px',
            position: 'relative',
            zIndex: 1
          }}>
            {/* USA */}
            <div className="office-item">
              <h3 className="office-title" style={{
                color: '#fff',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '20px'
              }}>AIgilityX LLC, USA</h3>
              <div className="office-info" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '3px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.5' }}>Richmond, TX, 77407, USA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>+1-713-925-634-7</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0d97c9"/>
                  </svg>
                  <a href="mailto:info@aigilityx.com" style={{ color: '#0d97c9', fontSize: '15px', textDecoration: 'none' }}>info@aigilityx.com</a>
                </div>
              </div>
            </div>

            {/* UAE */}
            <div className="office-item">
              <h3 className="office-title" style={{
                color: '#fff',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '20px'
              }}>AIgilityX Arabia LLC FZ</h3>
              <div className="office-info" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '3px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.5' }}>Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>+971-506-680-767</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0d97c9"/>
                  </svg>
                  <a href="mailto:info@aigilityx.com" style={{ color: '#0d97c9', fontSize: '15px', textDecoration: 'none' }}>info@aigilityx.com</a>
                </div>
              </div>
            </div>

            {/* Asia */}
            <div className="office-item">
              <h3 className="office-title" style={{
                color: '#fff',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '20px'
              }}>AIgilityX Asia</h3>
              <div className="office-info" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '3px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.5' }}>Coco Buisness Center, I-10 Markaz, Islamabad, Pakistan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" fill="#0d97c9"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>+92-320-855-400-0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0d97c9"/>
                  </svg>
                  <a href="mailto:info@aigilityx.com" style={{ color: '#0d97c9', fontSize: '15px', textDecoration: 'none' }}>info@aigilityx.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Footer Navigation */}
        {/* <div className="xb-footer-nav">
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we do?</span>
            <h2 className="title">
              <Link to="/service">Services</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Who we are?</span>
            <h2 className="title">
              <Link to="/about">About us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">How we deliver</span>
            <h2 className="title">
              <Link to="/contact">Contact us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we're good at?</span>
            <h2 className="title">
              <Link to="/project">Our project</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">News?</span>
            <h2 className="title">
              <Link to="/blog">News</Link>
            </h2>
          </div>
        </div> */}

        {/* Social Media Section */}
        <div className="xb-social-media-wrap">
          {socials.map((social, idx) => (
            <div className="xb-social-media-item ul_li_between" key={idx}>
              <div className="xb-item--holder ul_li">
                <div className="xb-item--icon">{social.icon}</div>
                <span className="xb-item--name">{social.name}</span>
              </div>

              <span className="xb-item--arrow">{arrowIcon}</span>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name} 
                className="xb-overlay"
              ></a>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <img src={locationIcon} alt="location" />
            <span className="contact-method">Richmond TX, 77407, USA</span>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © 2026 <Link to="/">AIgilityX</Link>, All rights reserved.
            </p>
          </div>

          <div className="contact-item">
            <a href="tel:+112304528597">
              <img src={callIcon} alt="call" />
            </a>
            <a className="contact-method" href="tel:+112304528597">
              +(1)713 925 6347
            </a>
          </div>
        </div>
        </div>
      </footer>

      <style>{`
        .footer-sticky-reveal {
          position: sticky;
          bottom: 0;
          z-index: 1;
        }

        .content-reveal-wrapper {
          position: relative;
          z-index: 2;
          background: #00020f; /* matches site body background */
          min-height: 100vh;
        }

        .content-reveal-wrapper::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: 0;
          right: 0;
          height: 50px;
          background: inherit;
          border-radius: 0 0 50px 50px;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: no-preference) {
          .footer-sticky-reveal,
          .content-reveal-wrapper {
            transition: transform 0.1s ease-out;
          }
        }

        /* Responsive styles for offices grid */
        @media (max-width: 992px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .offices-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;