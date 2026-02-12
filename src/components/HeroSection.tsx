"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  },
  {
    title: "Healthcare Volunteer Services",
    subtitle: "Bringing Compassionate Care to Those in Need",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
    overlay: "from-black/80 via-black/70 to-black/60",
  },
  {
    title: "Empowering Girls Through Martial Arts",
    subtitle: "Building Confidence, Strength, and Self-Defense Skills",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&q=80",
    overlay: "from-black/80 via-black/70 to-black/60",
  },
];

// Hero slider component with smooth transitions

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIdx, setPrevSlideIdx] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlideIdx(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Background Slide */}
      <motion.img
        key={currentSlide}
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        initial={prevSlideIdx !== currentSlide ? { scale: 1.1, x: 100, opacity: 0 } : false}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <motion.div
        key={`overlay-${currentSlide}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].overlay}`}
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-amber-500" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTAButton href="#donate" variant="primary">
                Donate Now
              </CTAButton>
              <CTAButton href="#contact" variant="secondary">
                Become a Volunteer
              </CTAButton>
            </div>

            <TrustBadge />
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
                  ? "bg-amber-500 w-8"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={goPrevSlide}
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
