"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import TrustBadge from "@/components/TrustBadge";

const slides = [
  {
    title: "Service to Humanity is Service to God.",
    subtitle: "Serving Society Selflessly Since 2015",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80",
    overlay: "from-black/80 via-black/70 to-black/60",
    category: "Community Service",
  },
  {
    title: "Healthcare Volunteer Services",
    subtitle: "Bringing Compassionate Care to Those in Need",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
    overlay: "from-black/80 via-black/70 to-black/60",
    category: "Healthcare",
  },
  {
    title: "Empowering Girls Through Martial Arts",
    subtitle: "Building Confidence, Strength, and Self-Defense Skills",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&q=80",
    overlay: "from-black/80 via-black/70 to-black/60",
    category: "Women Empowerment",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-black w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slides[currentSlide].overlay}`} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6 sm:mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-6 leading-relaxed">
              {slides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 sm:mb-8 font-light leading-relaxed px-2">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 mb-8 sm:mb-6">
              <CTAButton href="#donate" variant="primary" className="w-full sm:w-auto text-sm py-2.5 sm:py-3 px-5 sm:px-6">
                Donate Now
              </CTAButton>
              <CTAButton href="#contact" variant="secondary" className="hidden sm:block w-full sm:w-auto text-sm py-2.5 sm:py-3 px-5 sm:px-6">
                Become a Volunteer
              </CTAButton>
            </div>

            <div className="hidden sm:block">
              <TrustBadge />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-amber-500 w-8 shadow-lg shadow-amber-500/50"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
}
