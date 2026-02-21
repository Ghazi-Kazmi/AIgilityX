import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // On first load, scroll immediately without animation
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      
      // Reset scroll position immediately
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Use Lenis if available
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: true });
      }
    } else {
      // On route changes, use smooth scroll
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
