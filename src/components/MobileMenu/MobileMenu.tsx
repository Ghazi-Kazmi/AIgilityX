import React, { Fragment, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { getHeaderConfig, HeaderMenuItem } from "../Header/headerNavigation";
import "./style.css";

interface MobileMenuProps {
  items?: HeaderMenuItem[];
  onSectionClick?: (event: MouseEvent<HTMLAnchorElement>, item: HeaderMenuItem) => void;
  onRouteClick?: (event: MouseEvent<HTMLAnchorElement>, item: HeaderMenuItem) => void;
  onActionClick?: (item: HeaderMenuItem) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  items = getHeaderConfig("home").links,
  onSectionClick,
  onRouteClick,
  onActionClick,
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  const renderLink = (item: HeaderMenuItem) => {
    if (item.type === "action") {
      return (
        <button type="button" onClick={() => onActionClick?.(item)} className="mobile-menu-button">
          {item.label}
        </button>
      );
    }

    if (item.type === "section" && item.sectionId) {
      return (
        <Link to={item.path || "/"} onClick={(event) => onSectionClick?.(event, item)}>
          {item.label}
        </Link>
      );
    }

    return (
      <Link to={item.path || "/"} onClick={(event) => onRouteClick?.(event, item)}>
        {item.label}
      </Link>
    );
  };

  return (
    <ul className="responsivemenu">
      {items.map((item) => (
        <li key={item.key} className={openId === item.key ? "active" : ""}>
          {item.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(item.key)}>
                {item.label}
                <i className={openId === item.key ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
              </p>

              <Collapse in={openId === item.key} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.key}>{renderLink(subItem)}</li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            renderLink(item)
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
