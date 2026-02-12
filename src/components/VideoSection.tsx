"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Healthcare Services",
    description: "Volunteers providing compassionate care and medical support to communities in need",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    color: "from-blue-900/90 to-blue-800/90"
  },
  {
    id: 2,
    title: "Women Empowerment",
    description: "Building confidence and strength through martial arts training programs",
    thumbnail: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    color: "from-amber-600/90 to-amber-500/90"
  },
  {
    id: 3,
    title: "Community Service",
    description: "Selfless service bringing hope and joy to families across Kakinada",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    color: "from-green-800/90 to-green-700/90"
  },
  {
    id: 4,
    title: "Educational Support",
    description: "Empowering the next generation through education and learning opportunities",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    color: "from-purple-900/90 to-purple-800/90"
  },
];

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideo, setMutedVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    if (playingVideo === id) {
      // Pause current video
      if (videoRefs.current[id]) {
        videoRefs.current[id]?.pause();
        setPlayingVideo(null);
        setMutedVideo(null);
      }
    } else {
      // Pause any currently playing video
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }
      // Play new video
      setPlayingVideo(id);
      setMutedVideo(id);
      setTimeout(() => {
        if (videoRefs.current[id]) {
          videoRefs.current[id]?.play().catch(console.error);
        }
      }, 100);
    }
  };

  const toggleMute = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (videoRefs.current[id]) {
      const video = videoRefs.current[id];
      if (video) {
        video.muted = !video.muted;
        if (!video.muted) {
          setMutedVideo(null);
        } else {
          setMutedVideo(id);
        }
      }
    }
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-blue-50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {/* Our Journey in Action */}
            10 Years of Service & Social Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Watch inspiring stories of compassion, service, and community transformation
          </p>
          <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] sm:aspect-video rounded-2xl overflow-hidden shadow-lg sm:shadow-soft-2xl bg-gray-900">
                {playingVideo === video.id ? (
                  <video
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted={mutedVideo === video.id}
                    onClick={() => togglePlay(video.id)}
                  >
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${video.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6`}
                >
                  <h3 className="text-white font-serif font-bold text-lg sm:text-xl mb-2">
                    {video.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>

                {/* Play Button - Always Visible */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  <Button
                    onClick={() => togglePlay(video.id)}
                    size="lg"
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform ${
                      playingVideo === video.id
                        ? 'bg-amber-500 hover:bg-amber-600'
                        : 'bg-white/90 hover:bg-white text-blue-900'
                    }`}
                  >
                    {playingVideo === video.id ? (
                      <Pause className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Mute Button - When Playing */}
                {playingVideo === video.id && (
                  <Button
                    onClick={(e) => toggleMute(e, video.id)}
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-blue-900 rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow-lg"
                  >
                    {mutedVideo === video.id ? (
                      <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </Button>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Watch
                </div>
              </div>

              {/* Title Below Card - Mobile Optimized */}
              <div className="mt-4 px-1">
                <h3 className="font-serif font-semibold text-blue-900 text-base sm:text-lg mb-1 line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-soft-2xl max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Your support helps us continue making a difference in thousands of lives. Join us in our mission to serve humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "#donate")}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                Donate Now
              </Button>
              <Button
                onClick={() => (window.location.href = "#contact")}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                Become a Volunteer
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
