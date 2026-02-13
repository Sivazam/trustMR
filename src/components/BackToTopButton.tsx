"use client";

import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 z-[9999] h-14 w-14 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      type="button"
    >
      <ArrowUp className="h-7 w-7" />
    </button>
  );
}
