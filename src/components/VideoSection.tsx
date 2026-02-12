"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            10 Years of Service & Social Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our journey of compassion, service, and community transformation
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-soft-2xl">
            {!isPlaying ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1280&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="lg"
                    className="w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-soft-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-medium">
                    A Decade of Making a Difference
                  </p>
                  <p className="text-blue-200 text-sm">
                    Watch our story of hope, compassion, and service
                  </p>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-amber-500" />
                  </div>
                  <p className="text-white text-xl font-semibold mb-2">
                    Video Coming Soon
                  </p>
                  <p className="text-gray-400">
                    We are preparing a special video showcasing our 10-year journey
                  </p>
                  <Button
                    onClick={() => setIsPlaying(false)}
                    variant="outline"
                    className="mt-6 border-white/20 text-white hover:bg-white/10"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
