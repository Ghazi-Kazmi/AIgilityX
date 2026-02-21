import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// Tailwind CSS (must be first so legacy CSS can override if needed)
import "./tailwind.css";
// Header fix - ensures header renders correctly with Tailwind
import "./css/header-fix.css";
// Image container fixes - ensures images adapt to container size
import "./css/image-containers.css";
import "./css/contact-section.css";
// Mobile menu fixes - improved responsive design and hamburger button
import "./css/mobile-menu-fix.css";
// Legacy/third-party CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/fontawesome.css";
import "./css/themify-icons.css";
import "./css/animate.css";
import "./css/mousecursor.css";
import "./css/imageRevealHover.css";
import "./css/custom-fonts.css";
import "./css/main.css";
import App from "./main-component/App/App";

// Reset scroll position immediately on page load (before React renders)
if (typeof window !== "undefined") {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Prevent scroll restoration from browser history
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
