"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
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

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    category: "healthcare",
    title: "Healthcare Activities",
    description: "Volunteers providing care and support",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    category: "martial-arts",
    title: "Martial Arts Training",
    description: "Girls learning self-defense skills",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    category: "volunteer",
    title: "Volunteer Services",
    description: "Team working together for the community",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    category: "interfaith",
    title: "Interfaith Programs",
    description: "Celebrating unity in diversity",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    category: "community",
    title: "Community Celebrations",
    description: "Festivals and cultural events",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    category: "healthcare",
    title: "Medical Camp",
    description: "Free health checkup camp",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    category: "martial-arts",
    title: "Training Session",
    description: "Intensive martial arts practice",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    category: "volunteer",
    title: "Volunteer Team",
    description: "Dedicated team members",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    category: "community",
    title: "Community Event",
    description: "Annual gathering and celebration",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
    category: "interfaith",
    title: "Religious Harmony",
    description: "Supporting all faith communities",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    category: "martial-arts",
    title: "Empowerment Workshop",
    description: "Building confidence through sports",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    category: "healthcare",
    title: "Health Awareness",
    description: "Educational health programs",
  },
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
              onClick={() => setSelectedCategory(category.value)}
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
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-blue-100 text-sm">{image.description}</p>
                    <div className="mt-3 flex items-center space-x-2 text-amber-500">
                      <ZoomIn className="h-4 w-4" />
                      <span className="text-sm">View Larger</span>
                    </div>
                  </div>
                </div>
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
              className="lightbox-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  onClick={() => setSelectedImage(null)}
                  variant="ghost"
                  size="icon"
                  className="absolute -top-4 -right-4 bg-white text-blue-900 hover:bg-gray-100 rounded-full shadow-lg z-10"
                >
                  <X className="h-6 w-6" />
                </Button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="lightbox-image rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-blue-200">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
