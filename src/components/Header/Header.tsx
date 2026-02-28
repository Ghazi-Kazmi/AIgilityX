import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/AigilityX-Asset-2-scaled.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();
  const toggleMobileMenu = () => setMobileActive((prev) => !prev);
  const closeMobileMenu = () => setMobileActive(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffsetDesktop = 10;
    const headerOffsetMobile = 120;
    const isDesktop = window.innerWidth >= 992;
    const headerOffset = isDesktop ? headerOffsetDesktop : headerOffsetMobile;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavScroll = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Inline styles for logo container
  const logoContainerStyle: React.CSSProperties = {
    height: '80px',
    width: 'auto',
    maxWidth: '200px',
    minWidth: '120px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const logoLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  };

  const logoImageStyle: React.CSSProperties = {
    height: '50px',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
    transition: 'opacity 0.3s ease',
  };

  const mobileLogoContainerStyle: React.CSSProperties = {
    padding: '1rem 0',
    textAlign: 'center',
    maxHeight: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mobileLogoImageStyle: React.CSSProperties = {
    height: '45px',
    width: 'auto',
    maxWidth: '180px',
    objectFit: 'contain',
    margin: '0 auto',
  };


  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one is-sticky"
    >
      <div className="xb-header xb-sticky-stt xb-header-area-sticky xb-header-fixed">
        <div className="header-container-wrapper">
          <div className="header-glass-container">
            <div className="header__wrap ul_li_between">
              {/* Logo */}
              <div className="xb-header-logo" style={logoContainerStyle}>
                <Link 
                  to="/" 
                  className="logo1" 
                  onClick={handleClick}
                  style={logoLinkStyle}
                >
                  <img
                    src={logo}
                    alt="AigilityX Logo"
                    style={logoImageStyle}
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="main-menu__wrap navbar navbar-expand-lg p-0">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    {/* <li>  */}
                      {/* //className="menu-item-has-children active" */}
                      {/* <Link to="/" onClick={handleClick}>
                        <span>Home</span>
                      </Link> */}
                      {/* <ul className="submenu">
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Ai Agency</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Ai Marketing</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Ai Chatbot</span>
                          </Link>
                        </li>
                      </ul> */}
                    {/* </li> */}
                    
                    <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "about-section")}
                      >
                        <span>About Us</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "ecosystem")}
                      >
                        <span>Ecosystem</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "about-section")}
                      >
                        <span>About Us</span>
                      </Link>
                    </li> */}


                    {/* <li className="menu-item-has-children megamenu">
                      <Link to="#" onClick={handleClick}>
                        <span>Pages</span>
                      </Link>
                      <MegaMenu1 />
                    </li> */}

                    <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "services-section")}
                      >
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "expertise")}
                      >
                        <span>Expertise</span>
                      </Link>
                    </li>

                    

                    <li className="menu-item-has-children">
                      <Link to="/" onClick={handleClick}>
                        <span>Research Insights</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Blogs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Whitepapers</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={handleClick}>
                            <span>Case Studies</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* <li className="menu-item-has-children">
                      <Link to="/blog" onClick={handleClick}>
                        <span>Blog</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/blog" onClick={handleClick}>
                            <span>Blog</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" onClick={handleClick}>
                            <span>Blog Details</span>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    
                    <li className="menu-item-has-children">
                      <Link to="#" onClick={handleClick}>
                        <span>Global Initiatives</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/hackathon" onClick={handleClick}>
                            <span>Sovereign AI Hackathon</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={handleClick}>
                            <span>Global Sovereign AI Summit</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={handleClick}>
                            <span>AI Leaders Fellowship</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        to="/"
                        onClick={(e) => handleNavScroll(e, "contact-section")}
                      >
                        <span>Contact Us</span>
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
           
              
              {/* CTA Button */}
              <div className="header-btn">
                <Link to="/contact" className="thm-btn" onClick={handleClick}>
                  Global AI Hub
                </Link>
              </div>

              {/* Mobile Toggle */}
              <div className="header-bar-mobile side-menu d-lg-none">
                <button
                  className="xb-nav-mobile"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileActive}
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="xb-header-wrap">
          <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <button
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <i className="far fa-times"></i>
              </button>

              <div className="xb-logo-mobile xb-hide-xl" style={mobileLogoContainerStyle}>
                <Link to="/" rel="home" onClick={closeMobileMenu}>
                  <img 
                    src={logo} 
                    alt="AigilityX Logo"
                    style={mobileLogoImageStyle}
                  />
                </Link>
              </div>

              <div className="xb-header-mobile-search xb-hide-xl">
                <form role="search" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    name="s"
                    className="search-field"
                    aria-label="Search"
                  />
                  <button 
                    className="search-submit" 
                    type="submit"
                    aria-label="Submit search"
                  >
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>

              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div 
            className="xb-header-menu-backdrop"
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                closeMobileMenu();
              }
            }}
          ></div>
        </div>
      </div>

      {/* Glassmorphism CSS Styles */}
      <style>{`
        /* Header Base - Transparent */
        .header-area {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: transparent;
          padding: 20px 0;
        }

        .xb-header {
          background: transparent;
        }

        /* Container Wrapper - Centers the glass container */
        .header-container-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Glassmorphism Container */
        .header-glass-container {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
          padding: 8px 30px;
          transition: all 0.3s ease;
        }

        .header-glass-container:hover {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* Logo Container Styles */
        .xb-header-logo {
          position: relative;
          z-index: 10;
        }

        .xb-header-logo img:hover {
          opacity: 0.85;
        }

        /* Header Wrapper */
        .header__wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          gap: 20px;
        }

        /* Desktop Menu Styling */
        .main-menu__wrap {
          flex: 1;
          display: flex;
          justify-content: center;
          margin: 0 20px;
        }

        .main-menu ul {
          display: flex;
          gap: 5px;
          margin: 0;
          padding: 0;
          list-style: none;
          align-items: center;
        }

        .main-menu ul li {
          position: relative;
        }

        .main-menu ul li a {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 50px;
          transition: all 0.3s ease;
          display: inline-flex !important;
          align-items: center;
          gap: 6px;
          position: relative;
        }
        
        /* Ensure arrows don't break to new line */
        .main-menu ul li.menu-item-has-children > a span {
          display: inline !important;
        }

        /* Fix dropdown arrows - override main.css absolute positioning */
        .header-style--one .main-menu > ul > li.menu-item-has-children > a span::after {
          position: relative !important;
          margin: 0 0 0 8px !important;
          bottom: auto !important;
          left: auto !important;
          top: auto !important;
          right: auto !important;
          height: 16px !important;
          width: 16px !important;
          font-size: 10px !important;
          font-weight: 600 !important;
          padding-top: 0 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 100px !important;
          background: rgba(255, 255, 255, 0.2) !important;
          color: rgba(255, 255, 255, 0.95) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          vertical-align: middle !important;
        }
        
        .header-style--one .main-menu > ul > li:hover > a > span::after, 
        .header-style--one .main-menu > ul > li.active > a > span::after {
          background: rgba(255, 255, 255, 0.35) !important;
          color: #ffffff !important;
        }
        
        /* Remove any pseudo-element positioning from parent */
        .main-menu ul li.menu-item-has-children > a {
          position: relative !important;
        }

        .main-menu ul li a:hover,
        .main-menu ul li.active > a {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        /* Header Button */
        .header-btn {
          flex-shrink: 0;
        }

        .header-btn .thm-btn {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .header-btn .thm-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Mobile Menu Toggle */
        .header-bar-mobile {
          flex-shrink: 0;
        }

        /* Hamburger button styles are now in mobile-menu-fix.css for better mobile responsiveness */

        /* Sticky Header - flush to top to avoid empty space above */
        .xb-header-area-sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          animation: slideDown 0.3s ease;
        }

        .xb-header-area-sticky .header-glass-container {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .xb-header-fixed {
          transform: translateY(0);
          opacity: 1;
        }

        /* Mobile Menu Backdrop */
        .xb-header-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 998;
        }

        .xb-header-menu.active ~ .xb-header-menu-backdrop {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile Menu Glass Effect */
        .xb-header-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Close Button Hover */
        .xb-menu-close:hover {
          color: #000 !important;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .header-container-wrapper {
            max-width: 100%;
            padding: 0 30px;
          }

          .header-glass-container {
            padding: 8px 25px;
          }

          .main-menu ul li a {
            padding: 10px 15px;
            font-size: 14px;
          }
        }

        @media (max-width: 991px) {
          .header-container-wrapper {
            padding: 0 20px;
          }

          .header-glass-container {
            padding: 10px 20px;
            border-radius: 80px;
          }

          .xb-header-logo {
            height: 60px !important;
            max-width: 160px !important;
          }

          .xb-header-logo img {
            height: 45px !important;
          }

          .main-menu__wrap {
            display: none;
          }

          .header-btn {
            margin-left: auto;
            margin-right: 10px;
          }

          .header-btn .thm-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 767px) {
          .header-area {
            padding: 15px 0;
          }

          .header-container-wrapper {
            padding: 0 15px;
          }

          .header-glass-container {
            padding: 8px 15px;
            border-radius: 60px;
          }

          .xb-header-logo {
            height: 50px !important;
            max-width: 120px !important;
          }

          .xb-header-logo img {
            height: 38px !important;
          }

          .header-btn .thm-btn {
            padding: 8px 16px;
            font-size: 13px;
          }

          .xb-nav-mobile {
            padding: 8px 12px;
            font-size: 14px;
          }
        }

        @media (max-width: 479px) {
          .header-glass-container {
            padding: 6px 12px;
            border-radius: 50px;
          }

          .xb-header-logo {
            height: 45px !important;
            max-width: 100px !important;
          }

          .xb-header-logo img {
            height: 32px !important;
          }

          .header-btn .thm-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
        }

        /* Performance Optimizations */
        .xb-header,
        .xb-header-logo img,
        .xb-header-menu,
        .header-glass-container {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </header>
  );
};

export default Header;