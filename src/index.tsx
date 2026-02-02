import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// Tailwind CSS (must be first so legacy CSS can override if needed)
import "./tailwind.css";
// Header fix - ensures header renders correctly with Tailwind
import "./css/header-fix.css";
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

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
