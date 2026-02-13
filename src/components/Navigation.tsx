"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        const navElement = document.querySelector('nav');
        if (navElement && !navElement.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Videos", href: "#videos" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft-xl" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center space-x-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <img
              src="/logo.png"
              alt="Malladi Ramarao Trust Logo"
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="block">
              <span className={`block font-serif font-bold text-base ${scrolled ? "text-blue-900" : "text-white"} group-hover:text-amber-500 transition-colors`}>
                Malladi Ramarao
              </span>
              <span className={`block text-xs ${scrolled ? "text-muted-foreground" : "text-blue-200"}`}>Trust</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#donate")}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl shadow-soft-xl hover:scale-105 transition-all"
            >
              Donate Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b w-full shadow-lg"
            style={{ zIndex: 60, position: 'absolute', top: '100%', left: 0, right: 0 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-3 w-full">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-foreground hover:text-amber-500 font-medium py-3 text-base transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#donate")}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-2xl mt-4"
              >
                Donate Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
