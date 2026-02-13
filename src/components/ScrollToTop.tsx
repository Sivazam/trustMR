"use client";

import { animateScroll } from "react-scroll";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '1.5rem',
        zIndex: 2147483647,
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: '#F59E0B',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '4px solid #DC2626',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#D97706';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#F59E0B';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="Scroll to top"
      type="button"
    >
      <ArrowUp style={{ width: '1.75rem', height: '1.75rem' }} />
    </button>
  );
}
