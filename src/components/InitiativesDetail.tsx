"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, HeartPulse, GraduationCap, Building2, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

export default function InitiativesDetail() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleVideo = (src: string) => {
    if (playingVideo === src) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(src);
    }
  };

  const videos = [
    {
      title: "Hospital Volunteer Services in Action",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      description: "Watch our volunteers serving patients in hospitals with dedication and compassion",
    },
  ];

  return (
    <section id="initiatives-detail" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Initiatives in Detail"
          subtitle="Comprehensive programs designed to create lasting positive change in society"
        />

        {/* Healthcare & Medical Services */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center">
              <HeartPulse className="h-7 w-7 text-blue-900" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-blue-900">
              Healthcare & Medical Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Hospital Volunteer Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Deployment of trained volunteers in hospitals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Assisting patients and their families during treatment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Guiding the general public inside hospitals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supporting hospital staff during peak hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Public Health Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Continuous involvement in medical social service activities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supporting needy patients whenever possible</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Creating awareness on health, hygiene, and basic medical care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <Card className="shadow-soft-2xl rounded-2xl border-0 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Hospital Services in Action
                </h3>
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                  {playingVideo === videos[0].src ? (
                    <video
                      src={videos[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <img
                        src={videos[0].thumbnail}
                        alt={videos[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleVideo(videos[0].src)}
                          className="w-20 h-20 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                        >
                          <Play className="h-10 w-10 text-blue-900 ml-1" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education & Skill Development */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-amber-500" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-blue-900">
              Education & Skill Development
            </h2>
          </div>

          <Card className="shadow-soft-xl rounded-2xl border-0">
            <CardContent className="p-6">
              <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Support for Government Schools
                </h3>
              <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Active involvement in educational initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Special focus on girl students in government schools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Encouraging discipline, confidence, and physical fitness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
        </div>

        {/* Women Empowerment Initiative */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 bg-green-800/10 rounded-2xl flex items-center justify-center">
              <Users className="h-7 w-7 text-green-800" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-blue-900">
              Women Empowerment Initiative
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft-xl rounded-2xl border-0 lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Free Martial Arts Training for Girls
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conducted in Government Schools in Kakinada with appointment of a qualified Lady Martial Arts Trainer providing free self-defense and martial arts training.
                </p>
                
                <h4 className="font-semibold text-blue-900 mb-4 mt-6">Benefits for Girl Students:</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold font-serif text-amber-600 mb-2">💪</div>
                    <p className="text-sm text-muted-foreground">Increased Self-Confidence</p>
                  </div>
                  <div className="bg-green-800/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold font-serif text-green-800 mb-2">🛡️</div>
                    <p className="text-sm text-muted-foreground">Self-Protection Skills</p>
                  </div>
                  <div className="bg-blue-900/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold font-serif text-blue-900 mb-2">💪</div>
                    <p className="text-sm text-muted-foreground">Physical & Mental Strength</p>
                  </div>
                  <div className="bg-amber-500/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold font-serif text-amber-600 mb-2">🌟</div>
                    <p className="text-sm text-muted-foreground">Discipline and Leadership Qualities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-amber-50/10">
                <p className="text-muted-foreground italic mb-4">
                  "This initiative has positively impacted many girl students and continues to inspire courage and confidence."
                </p>
                <p className="text-sm text-blue-900 font-medium">
                  Malladi Ramarao Trust
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interfaith Harmony */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center">
              <Building2 className="h-7 w-7 text-blue-900" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-blue-900">
              Interfaith Harmony & Community Services
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-900/5 to-green-900/5 p-6 rounded-2xl mb-8">
            <p className="text-xl font-serif italic text-white text-center mb-6">
              "Service to Humanity is Service to God."
            </p>
            <p className="text-center text-blue-100">
              — Our Guiding Principle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hindu Community */}
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">🛕️</div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4 text-center">
                  Hindu Community Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Financial and material support for temple construction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Donations for renovation and reconstruction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Providing musical and ritual instruments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supporting temple maintenance and development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Muslim Community */}
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">☪️</div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4 text-center">
                  Muslim Community Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Installation of CCTV surveillance systems in Masjids</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Providing in-sound & public address systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supporting safety, communication, and community needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Christian Community */}
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">⛪</div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4 text-center">
                  Christian Community Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Organizing Christmas celebrations every December</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Conducting Christian Maha Sabhas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Food distribution during Christmas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supporting unity-focused gatherings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Harmony Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Promoting Peace & Unity
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Promote peace and unity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Strengthen social bonds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Encourage mutual respect</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Our Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through interfaith initiatives, the Trust works to promote peace, unity, and harmony among all communities. We ensure that service has no religion and reaches everyone with equal dignity and respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
