"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Users, Building2, HeartPulse, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MediaItem {
  type: "video" | "image";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  span: string;
  category: string;
}

const mediaItems: MediaItem[] = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    title: "Healthcare Services",
    description: "Providing compassionate care to those in need",
    span: "col-span-2 row-span-2",
    category: "Healthcare",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    title: "Community Service",
    description: "Serving society selflessly since 2015",
    span: "col-span-1 row-span-1",
    category: "Service",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    title: "Martial Arts Training",
    description: "Empowering girls through self-defense training",
    span: "col-span-1 row-span-2",
    category: "Empowerment",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    title: "Interfaith Programs",
    description: "Promoting harmony among all communities",
    span: "col-span-1 row-span-1",
    category: "Harmony",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    title: "Volunteer Network",
    description: "Dedicated volunteers serving communities",
    span: "col-span-1 row-span-1",
    category: "Volunteer",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1509062522246-3b594d25ecdb?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3b594d25ecdb?w=800&q=80",
    title: "Education Support",
    description: "Supporting government schools",
    span: "col-span-1 row-span-1",
    category: "Education",
  },
];

export default function ImpactSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const stats = [
    { icon: Calendar, value: "10+", label: "Years of Service" },
    { icon: Users, value: "Thousands", label: "Beneficiaries" },
    { icon: Building2, value: "Multiple", label: "Religious Institutions" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-950 to-green-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            10 Years of Service & Social Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Creating meaningful change in communities through dedicated service and compassion
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <Icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <div className="text-3xl font-bold font-serif mb-2 text-white">
                  {stat.value}
                </div>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 mb-12"
        >
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${item.span} relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group`}
              style={{ gridRow: item.span.includes('row-span-2') ? 'span 2' : 'span 1' }}
            >
              <div className="relative aspect-[4/3] bg-black">
                {item.type === "video" ? (
                  <>
                    {playingVideo === item.src ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onPause={() => setPlayingVideo(null)}
                      />
                    ) : (
                      <>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setPlayingVideo(item.src)}
                            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                          >
                            <Play className="h-6 w-6 text-blue-900 ml-1" />
                          </button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-2xl font-serif italic text-blue-50">
            "Service to Humanity is Service to God"
          </p>
          <p className="text-amber-400 mt-4 font-medium">— Our Guiding Principle</p>
        </motion.div>
      </div>
    </section>
  );
}
