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
    title: "Ecosystem",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/",
  },
  {
    id: 3,
    title: "Expertise",
    link: "/",
  },
  {
    id: 4,
    title: "Education",
    link: "/",
  },
  {
    id: 5,
    title: "Research Insights",
    link: "/",
    submenu: [
      { id: 51, title: "Blogs", link: "/" },
      { id: 52, title: "Whitepapers", link: "/" },
      { id: 53, title: "Case Studies", link: "/" },
    ],
  },
  {
    id: 6,
    title: "Global Initiatives",
    link: "#",
    submenu: [
      { id: 61, title: "Sovereign AI Hackathon", link: "/hackathon" },
      { id: 62, title: "Global Sovereign AI Summit", link: "#" },
      { id: 63, title: "AI Leaders Fellowship", link: "#" },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    link: "/",
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
                if (menu.title === "Ecosystem") {
                  e.preventDefault();
                  scrollToSection("ecosystem");
                } else if (menu.title === "Services") {
                  e.preventDefault();
                  scrollToSection("services-section");
                } else if (menu.title === "Expertise") {
                  e.preventDefault();
                  scrollToSection("expertise");
                } else if (menu.title === "Contact Us") {
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
