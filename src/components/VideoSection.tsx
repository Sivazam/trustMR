"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize, Minimize, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Healthcare Services",
    description: "Volunteers providing compassionate care...",
    thumbnail: "/media/thumb1.jpg", // optional if local
    color: "from-blue-900/90 to-blue-800/90",
    src: "/media/v1.webm"
  },
  {
    id: 2,
    title: "Women Empowerment",
    description: "Building confidence and strength...",
    thumbnail: "/media/thumb2.jpg",
    color: "from-amber-600/90 to-amber-500/90",
    src: "/media/v2.webm"
  },
  {
    id: 3,
    title: "Community Service",
    description: "Selfless service bringing hope...",
    thumbnail: "/media/thumb3.jpg",
    color: "from-green-800/90 to-green-700/90",
    src: "/media/v3.webm"
  },
  {
    id: 4,
    title: "Educational Support",
    description: "Empowering the next generation...",
    thumbnail: "/media/thumb4.jpg",
    color: "from-purple-900/90 to-purple-800/90",
    src: "/media/v4.webm"
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedVideoData = selectedVideo !== null ? videos.find(v => v.id === selectedVideo) : null;

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (selectedVideo === null) {
      setIsPlaying(false);
      setIsMuted(false);
    }
  }, [selectedVideo]);

  const openVideoPlayer = (id: number) => {
    setSelectedVideo(id);
    setIsPlaying(true);
  };

  const closeVideoPlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
    setIsMuted(false);
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        await videoRef.current.pause();
        setIsPlaying(false);
      } else {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      // Handle AbortError gracefully
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Play request was interrupted');
      } else {
        console.error('Error playing video:', error);
      }
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error('Error entering fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedVideo === null) return;
    if (e.key === 'Escape') closeVideoPlayer();
    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      togglePlay();
    }
    if (e.key === 'f') toggleFullscreen();
    if (e.key === 'm') toggleMute();
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
              className="group relative cursor-pointer"
              onClick={() => openVideoPlayer(video.id)}
            >
              <div className="relative aspect-[3/4] sm:aspect-video rounded-2xl overflow-hidden shadow-lg sm:shadow-soft-2xl bg-gray-900">
                {/* <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata" 
                  autoPlay
                />

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
                    size="lg"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform bg-white/90 hover:bg-white text-blue-900"
                  >
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-1" />
                  </Button>
                </div>

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

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && selectedVideoData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
              onClick={closeVideoPlayer}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl max-h-[90vh]"
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  onClick={closeVideoPlayer}
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Video Container */}
                <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                  {/* <video
                    ref={videoRef}
                    src={selectedVideoData.src}
                    className="w-full max-h-[80vh] object-contain"
                    onClick={togglePlay}
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  /> */}

                  <video
                    ref={videoRef}
                    src={selectedVideoData.src}
                    className="w-full max-h-[80vh] object-contain"
                    onClick={togglePlay}
                    playsInline
                    preload="metadata"
                    controls={false}
                    autoPlay
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {/* Video Controls */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-white font-serif font-bold text-xl mb-4">
                        {selectedVideoData.title}
                      </h3>

                      {/* Control Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* Play/Pause Button */}
                          <Button
                            onClick={togglePlay}
                            variant="ghost"
                            size="icon"
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full h-10 w-10"
                          >
                            {isPlaying ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <Play className="w-5 h-5 ml-0.5" />
                            )}
                          </Button>

                          {/* Mute/Unmute Button */}
                          <Button
                            onClick={toggleMute}
                            variant="ghost"
                            size="icon"
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full h-10 w-10"
                          >
                            {isMuted ? (
                              <VolumeX className="w-5 h-5" />
                            ) : (
                              <Volume2 className="w-5 h-5" />
                            )}
                          </Button>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Fullscreen Button */}
                          <Button
                            onClick={toggleFullscreen}
                            variant="ghost"
                            size="icon"
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full h-10 w-10"
                          >
                            {isFullscreen ? (
                              <Minimize className="w-5 h-5" />
                            ) : (
                              <Maximize className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Hints */}
                <div className="text-center mt-4 text-white/60 text-sm">
                  Press <kbd className="px-2 py-1 bg-white/10 rounded mx-1">Space</kbd> to play/pause • 
                  <kbd className="px-2 py-1 bg-white/10 rounded mx-1">F</kbd> for fullscreen • 
                  <kbd className="px-2 py-1 bg-white/10 rounded mx-1">M</kbd> to mute • 
                  <kbd className="px-2 py-1 bg-white/10 rounded mx-1">Esc</kbd> to close
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
