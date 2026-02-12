"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import { HeartPulse, GraduationCap, Shield, Users, ArrowRight } from "lucide-react";

const initiatives = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Services",
    description: "Providing hospital volunteer services, public health support, and assisting needy patients with compassionate care.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    features: [
      "Hospital Volunteer Services",
      "Patient Assistance Programs",
      "Health Awareness Campaigns",
      "Medical Equipment Support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Skill Development",
    description: "Supporting government schools with special focus on girl students, encouraging discipline and confidence.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    features: [
      "Government School Support",
      "Focus on Girl Students",
      "Educational Materials",
      "Skill Development Programs",
    ],
  },
  {
    icon: Shield,
    title: "Women Empowerment",
    description: "Free martial arts training for girls in government schools, building confidence and self-defense skills.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    features: [
      "Free Martial Arts Training",
      "Self-Defense Skills",
      "Confidence Building",
      "Physical & Mental Strength",
    ],
  },
  {
    icon: Users,
    title: "Interfaith Harmony Initiatives",
    description: "Promoting unity and mutual respect among all religious communities through support and service.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    features: [
      "Hindu Temple Support",
      "Muslim Masjid Support",
      "Christian Church Support",
      "Interfaith Celebrations",
    ],
  },
];

export default function InitiativesPreview() {
  return (
    <section id="initiatives" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Initiatives"
          subtitle="Comprehensive programs designed to create lasting positive change in society"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 rounded-2xl border-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon className="h-6 w-6 text-blue-900" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {initiative.description}
                    </p>
                    <ul className="space-y-2">
                      {initiative.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      variant="ghost"
                      className="text-blue-900 hover:text-amber-500 hover:bg-blue-900/5 group"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-soft-2xl"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Us in Building a More Compassionate Society
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your support helps us expand our reach and create a lasting impact in more lives
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="#donate" variant="primary">
              Donate Now
            </CTAButton>
            <CTAButton href="#contact" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
              Volunteer With Us
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
