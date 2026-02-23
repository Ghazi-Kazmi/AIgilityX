import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    submenu: [
      { id: 11, title: "AI Agency", link: "/" },
      { id: 12, title: "AI Marketing", link: "/ai-marketing" },
      { id: 13, title: "AI Chatbot", link: "/ai-chatbot" },
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Pages",
    link: "#",
    submenu: [
      { id: 31, title: "Services", link: "/service" },
      { id: 32, title: "Service Details", link: "/service-details" },
      { id: 33, title: "Career", link: "/career" },
      { id: 34, title: "Career Details", link: "/career-details" },
      { id: 35, title: "Projects", link: "/project" },
      { id: 36, title: "Project Details", link: "/project-details" },
      { id: 37, title: "Team", link: "/team" },
    ],
  },
  {
    id: 4,
    title: "Services",
    link: "/",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    submenu: [
      { id: 51, title: "Blog", link: "/blog" },
      { id: 52, title: "Blog Details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    title: "Global Initiatives",
    link: "#",
    submenu: [
      { id: 61, title: "Sovereign AI Hackathon", link: "/hackathon" },
      { id: 62, title: "Global AI Summit", link: "#" },
      { id: 63, title: "AI Leaders Fellowship", link: "#" },
    ],
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={
                    openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                  }
                ></i>
              </p>

              {/* MUI Collapse for smooth animation */}
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {menu.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link to={sub.link} onClick={handleClick}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link
              to={menu.link}
              onClick={(e) => {
                if (menu.title === "About") {
                  e.preventDefault();
                  scrollToSection("about-section");
                } else if (menu.title === "Services") {
                  e.preventDefault();
                  scrollToSection("services-section");
                } else if (menu.title === "Contact") {
                  e.preventDefault();
                  scrollToSection("contact-section");
                } else {
                  handleClick();
                }
              }}
            >
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
