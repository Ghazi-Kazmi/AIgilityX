import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import AllRoute from "../router";
import ErrorBoundary from "./ErrorBoundary";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App: React.FC = () => {
  // ======================
  // 🌀 Lenis + GSAP Setup
  // ======================
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  // ======================
  // ✂️ SplitText Reveal
  // ======================
  useEffect(() => {
    const applySplitTextReveal = () => {
      const elements = document.querySelectorAll<HTMLElement>(".xb-text-reveal");
      if (!elements.length) return;

      elements.forEach((el) => {
        if (el.dataset.splitApplied === "true") return;
        el.dataset.splitApplied = "true";

        try {
          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });

          gsap.set(split.chars, {
            opacity: 0.3,
            x: -7,
          });

          gsap.to(split.chars, {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
            opacity: 1,
            x: 0,
            stagger: 0.03,
            ease: "power2.out",
          });
        } catch (err) {
          console.warn("SplitText failed:", err);
        }
      });
    };

    // Initial run after render
    const timeout = setTimeout(applySplitTextReveal, 300);

    // Watch SPA route changes
    const observer = new MutationObserver(() => {
      requestAnimationFrame(applySplitTextReveal);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // ======================
  // Render
  // ======================
  return (
    <div className="App">
      {/* TAILWIND TEST - Remove after verification */}
      <div className="bg-red-500 text-yellow-400 p-8 text-2xl rotate-3">
        TAILWIND TEST
      </div>
      
      <ErrorBoundary>
        <AllRoute />
      </ErrorBoundary>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;