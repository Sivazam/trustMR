"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Eye, Target, Star, Heart, Shield, Globe } from "lucide-react";

const visionPoints = [
  "Healthcare and education are accessible to all",
  "Women and girls are empowered and confident",
  "People of all religions live with mutual respect and harmony",
  "Social service becomes a shared responsibility",
];

const missionPoints = [
  "Provide continuous healthcare and medical support services",
  "Strengthen education and skill development, especially for girls",
  "Empower women through free self-defense and martial arts training",
  "Promote interfaith unity and communal harmony",
  "Encourage volunteerism and public service",
];

const coreValues = [
  {
    icon: Heart,
    title: "Humanity Above All",
    description: "Putting people and their well-being first in everything we do",
  },
  {
    icon: Globe,
    title: "Equality & Inclusiveness",
    description: "Treating everyone with equal respect and dignity regardless of background",
  },
  {
    icon: Star,
    title: "Respect for All Religions",
    description: "Embracing diversity and fostering interfaith harmony",
  },
  {
    icon: Shield,
    title: "Service with Integrity",
    description: "Maintaining transparency and accountability in all operations",
  },
  {
    icon: Target,
    title: "Long-term Impact",
    description: "Focusing on sustainable solutions that create lasting change",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Vision & Mission"
          subtitle="Committed to creating a more compassionate and equitable society through dedicated service"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-soft-xl rounded-2xl border-0 h-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                </div>
                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-blue-50">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-soft-xl rounded-2xl border-0 h-full bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-blue-900">Our Mission</h3>
                </div>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-3xl font-bold text-blue-900 text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 rounded-2xl border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-blue-900" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-blue-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
