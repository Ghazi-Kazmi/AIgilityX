import React, { MouseEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/AigilityX-Asset-2-scaled.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import {
  HeaderActionKey,
  HeaderCTA,
  HeaderMenuItem,
  getHeaderConfig,
  getHeaderVariant,
} from "./headerNavigation";

interface HeaderProps {
  onSummitInvitation?: () => void;
}

const HOME_PATH = "/";

const Header: React.FC<HeaderProps> = ({ onSummitInvitation }) => {
  const [mobileActive, setMobileActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const headerVariant = getHeaderVariant(location.pathname);
  const { links, cta } = getHeaderConfig(headerVariant);

  const normalizedPath = location.pathname.replace(/\/+$/, "") || HOME_PATH;

  const handleSubmit = (event: React.FormEvent) => event.preventDefault();
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleMobileMenu = () => setMobileActive((prev) => !prev);
  const closeMobileMenu = () => setMobileActive(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const desktopOffset = headerVariant === "home" ? 10 : 120;
    const mobileOffset = 120;
    const isDesktop = window.innerWidth >= 992;
    const headerOffset = isDesktop ? desktopOffset : mobileOffset;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const timeoutId = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [headerVariant, location.hash, location.pathname]);

  const handleAction = (actionKey?: HeaderActionKey) => {
    closeMobileMenu();

    if (actionKey === "summitInvitation") {
      if (headerVariant === "summit" && onSummitInvitation) {
        onSummitInvitation();
        return;
      }

      navigate("/summit#cta");
      return;
    }

    handleScrollTop();
  };

  const handleRouteLinkClick = (event: MouseEvent<HTMLAnchorElement>, path?: string) => {
    closeMobileMenu();

    if (!path || path === "#") {
      event.preventDefault();
      return;
    }

    if (normalizedPath === path) {
      event.preventDefault();
      handleScrollTop();
    }
  };

  const handleSectionLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: HeaderMenuItem | HeaderCTA,
  ) => {
    const path = item.path || normalizedPath;
    const sectionId = item.sectionId;

    if (!sectionId) {
      return;
    }

    closeMobileMenu();

    if (normalizedPath === path) {
      event.preventDefault();
      scrollToSection(sectionId);
      return;
    }

    event.preventDefault();
    navigate({
      pathname: path,
      hash: `#${sectionId}`,
    });
  };

  const renderDesktopLink = (item: HeaderMenuItem) => {
    if (item.submenu) {
      return (
        <li key={item.key} className="menu-item-has-children">
          <Link to={item.path || "#"} onClick={(event) => handleRouteLinkClick(event, item.path)}>
            <span>{item.label}</span>
          </Link>
          <ul className="submenu">
            {item.submenu.map((subItem) => (
              <li key={subItem.key}>
                {subItem.type === "action" ? (
                  <button
                    type="button"
                    className="header-submenu-button"
                    onClick={() => handleAction(subItem.actionKey)}
                  >
                    <span>{subItem.label}</span>
                  </button>
                ) : subItem.type === "section" ? (
                  <Link
                    to={subItem.path || HOME_PATH}
                    onClick={(event) => handleSectionLinkClick(event, subItem)}
                  >
                    <span>{subItem.label}</span>
                  </Link>
                ) : (
                  <Link
                    to={subItem.path || HOME_PATH}
                    onClick={(event) => handleRouteLinkClick(event, subItem.path)}
                  >
                    <span>{subItem.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </li>
      );
    }

    if (item.type === "action") {
      return (
        <li key={item.key}>
          <button type="button" className="header-menu-button" onClick={() => handleAction(item.actionKey)}>
            <span>{item.label}</span>
          </button>
        </li>
      );
    }

    if (item.type === "section") {
      return (
        <li key={item.key}>
          <Link to={item.path || HOME_PATH} onClick={(event) => handleSectionLinkClick(event, item)}>
            <span>{item.label}</span>
          </Link>
        </li>
      );
    }

    return (
      <li key={item.key}>
        <Link to={item.path || HOME_PATH} onClick={(event) => handleRouteLinkClick(event, item.path)}>
          <span>{item.label}</span>
        </Link>
      </li>
    );
  };

  const renderCTA = () => {
    if (cta.type === "action") {
      return (
        <button type="button" className="thm-btn header-cta-button" onClick={() => handleAction(cta.actionKey)}>
          {cta.label}
        </button>
      );
    }

    if (cta.type === "section") {
      return (
        <Link to={cta.path || HOME_PATH} className="thm-btn" onClick={(event) => handleSectionLinkClick(event, cta)}>
          {cta.label}
        </Link>
      );
    }

    return (
      <Link to={cta.path || HOME_PATH} className="thm-btn" onClick={(event) => handleRouteLinkClick(event, cta.path)}>
        {cta.label}
      </Link>
    );
  };

  const logoContainerStyle: React.CSSProperties = {
    height: "80px",
    width: "auto",
    maxWidth: "200px",
    minWidth: "120px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    flexShrink: 0,
  };

  const logoLinkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  const logoImageStyle: React.CSSProperties = {
    height: "50px",
    width: "auto",
    maxWidth: "100%",
    objectFit: "contain",
    transition: "opacity 0.3s ease",
  };

  const mobileLogoContainerStyle: React.CSSProperties = {
    padding: "1rem 0",
    textAlign: "center",
    maxHeight: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const mobileLogoImageStyle: React.CSSProperties = {
    height: "45px",
    width: "auto",
    maxWidth: "180px",
    objectFit: "contain",
    margin: "0 auto",
  };

  return (
    <header id="xb-header-area" className={`header-area header-style--one is-sticky header-variant-${headerVariant}`}>
      <div className="xb-header xb-sticky-stt xb-header-area-sticky xb-header-fixed">
        <div className="header-container-wrapper">
          <div className="header-glass-container">
            <div className="header__wrap ul_li_between">
              <div className="xb-header-logo" style={logoContainerStyle}>
                <Link to={HOME_PATH} className="logo1" onClick={handleScrollTop} style={logoLinkStyle}>
                  <img src={logo} alt="AigilityX Logo" style={logoImageStyle} />
                </Link>
              </div>

              <div className="main-menu__wrap navbar navbar-expand-lg p-0">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>{links.map(renderDesktopLink)}</ul>
                </nav>
              </div>

              <div className="header-btn">{renderCTA()}</div>

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
                <Link to={HOME_PATH} rel="home" onClick={closeMobileMenu}>
                  <img src={logo} alt="AigilityX Logo" style={mobileLogoImageStyle} />
                </Link>
              </div>

              <div className="xb-header-mobile-search xb-hide-xl">
                <form role="search" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Search..." name="s" className="search-field" aria-label="Search" />
                  <button className="search-submit" type="submit" aria-label="Submit search">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>

              <nav className="xb-header-nav">
                <MobileMenu
                  items={links}
                  onSectionClick={handleSectionLinkClick}
                  onRouteClick={(event, item) => handleRouteLinkClick(event, item.path)}
                  onActionClick={(item) => handleAction(item.actionKey)}
                />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                closeMobileMenu();
              }
            }}
          ></div>
        </div>
      </div>

      <style>{`
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

        .header-container-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

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

        .xb-header-logo {
          position: relative;
          z-index: 10;
        }

        .xb-header-logo img:hover {
          opacity: 0.85;
        }

        .header__wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          gap: 20px;
        }

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

        .main-menu ul li a,
        .header-menu-button {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 50px;
          transition: all 0.3s ease;
          display: inline-flex !important;
          align-items: center;
          gap: 6px;
          position: relative;
          background: transparent;
          border: 0;
        }

        .header-submenu-button {
          width: 100%;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          padding: 10px 20px;
          background: transparent;
          border: 0;
          text-align: left;
        }

        .main-menu ul li.menu-item-has-children > a span {
          display: inline !important;
        }

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

        .main-menu ul li.menu-item-has-children > a {
          position: relative !important;
        }

        .main-menu ul li a:hover,
        .main-menu ul li.active > a,
        .header-menu-button:hover,
        .header-submenu-button:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

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

        .header-variant-summit .header-btn .thm-btn {
          background: var(--color-primary);
          color: var(--color-secondary);
          border-color: var(--color-primary);
          box-shadow: none;
        }

        .header-variant-summit .header-btn .thm-btn:hover {
          background: var(--color-primary);
          color: var(--color-secondary);
          border-color: var(--color-primary);
          opacity: 0.92;
        }

        .header-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .header-bar-mobile {
          flex-shrink: 0;
        }

        .xb-header-area-sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 20px 0 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          animation: slideDown 0.3s ease;
        }

        #xb-header-area .xb-header-area-sticky.xb-header-fixed {
          background: transparent !important;
          box-shadow: none !important;
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

        .xb-header-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .xb-menu-close:hover {
          color: #000 !important;
        }

        @media (max-width: 1200px) {
          .header-container-wrapper {
            max-width: 100%;
            padding: 0 30px;
          }

          .header-glass-container {
            padding: 8px 25px;
          }

          .main-menu ul li a,
          .header-menu-button {
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

          .xb-header-area-sticky {
            padding-top: 15px !important;
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
