import React from "react";
import "./style.css";

const Scrollbar: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <a
              href="#"
              aria-label="Scroll to top"
              className="scroll-to-top"
              onClick={handleScrollToTop}
            >
              <i className="ti-arrow-up" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
