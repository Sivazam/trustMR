"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

type Category = "all" | "healthcare" | "martial-arts" | "volunteer" | "interfaith" | "community";

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
  title: string;
  description: string;
}

// const galleryImages: GalleryImage[] = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
//     category: "healthcare",
//     title: "Healthcare Activities",
//     description: "Volunteers providing care and support",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
//     category: "martial-arts",
//     title: "Martial Arts Training",
//     description: "Girls learning self-defense skills",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
//     category: "volunteer",
//     title: "Volunteer Services",
//     description: "Team working together for the community",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
//     category: "interfaith",
//     title: "Interfaith Programs",
//     description: "Celebrating unity in diversity",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
//     category: "community",
//     title: "Community Celebrations",
//     description: "Festivals and cultural events",
//   },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
//     category: "healthcare",
//     title: "Medical Camp",
//     description: "Free health checkup camp",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
//     category: "martial-arts",
//     title: "Training Session",
//     description: "Intensive martial arts practice",
//   },
//   {
//     id: 8,
//     src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
//     category: "volunteer",
//     title: "Volunteer Team",
//     description: "Dedicated team members",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
//     category: "community",
//     title: "Community Event",
//     description: "Annual gathering and celebration",
//   },
//   {
//     id: 10,
//     src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
//     category: "interfaith",
//     title: "Religious Harmony",
//     description: "Supporting all faith communities",
//   },
//   {
//     id: 11,
//     src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
//     category: "martial-arts",
//     title: "Empowerment Workshop",
//     description: "Building confidence through sports",
//   },
//   {
//     id: 12,
//     src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
//     category: "healthcare",
//     title: "Health Awareness",
//     description: "Educational health programs",
//   },
// ];


const galleryImages: GalleryImage[] = [
  { id: 1, src: "/media/i1.jpeg", category: "healthcare", title: "Healthcare Activities", description: "Volunteers providing care and support" },
  { id: 2, src: "/media/i2.jpeg", category: "martial-arts", title: "Martial Arts Training", description: "Girls learning self-defense skills" },
  { id: 3, src: "/media/i3.jpeg", category: "volunteer", title: "Volunteer Services", description: "Team working together for the community" },
  { id: 4, src: "/media/i4.jpeg", category: "interfaith", title: "Interfaith Programs", description: "Celebrating unity in diversity" },
  { id: 5, src: "/media/i5.jpeg", category: "community", title: "Community Celebrations", description: "Festivals and cultural events" },
  { id: 6, src: "/media/i6.jpeg", category: "healthcare", title: "Medical Camp", description: "Free health checkup camp" },
  { id: 7, src: "/media/i7.jpeg", category: "martial-arts", title: "Training Session", description: "Intensive martial arts practice" },
  { id: 8, src: "/media/i8.jpeg", category: "volunteer", title: "Volunteer Team", description: "Dedicated team members" },
  { id: 9, src: "/media/i9.jpeg", category: "community", title: "Community Event", description: "Annual gathering and celebration" },
  { id: 10, src: "/media/i10.jpeg", category: "interfaith", title: "Religious Harmony", description: "Supporting all faith communities" },
  { id: 11, src: "/media/i11.jpeg", category: "martial-arts", title: "Empowerment Workshop", description: "Building confidence through sports" },
  { id: 12, src: "/media/i12.jpeg", category: "healthcare", title: "Health Awareness", description: "Educational health programs" },
  { id: 13, src: "/media/i13.jpeg", category: "community", title: "Community Outreach", description: "Serving with compassion and unity" },
];


const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "healthcare", label: "Healthcare" },
  { value: "martial-arts", label: "Martial Arts" },
  { value: "volunteer", label: "Volunteer" },
  { value: "interfaith", label: "Interfaith" },
  { value: "community", label: "Community" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < filteredImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (selectedIndex !== null) {
      setSelectedIndex(0); // Loop back to first image
    }
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex !== null) {
      setSelectedIndex(filteredImages.length - 1); // Loop to last image
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") goToNext(e as any);
    if (e.key === "ArrowLeft") goToPrevious(e as any);
    if (e.key === "Escape") setSelectedIndex(null);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Gallery"
          subtitle="Visual stories of our journey, impact, and the lives we've touched"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.value);
                setSelectedIndex(null);
              }}
              className={`rounded-full transition-all ${
                selectedCategory === category.value
                  ? "bg-blue-900 text-white hover:bg-blue-900/90"
                  : "hover:bg-blue-900 hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedIndex(null)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close Button */}
              <Button
                onClick={() => setSelectedIndex(null)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              <Button
                onClick={goToPrevious}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Next Button */}
              <Button
                onClick={goToNext}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-lg"
                />

                {/* Image Counter */}
                {filteredImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {selectedIndex! + 1} / {filteredImages.length}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
