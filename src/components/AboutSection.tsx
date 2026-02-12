"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Heart, GraduationCap, Shield, Users, Handshake } from "lucide-react";

const focusAreas = [
  {
    icon: Heart,
    title: "Healthcare Services",
    description: "Providing medical support and hospital volunteer services to those in need",
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    description: "Supporting government schools with special focus on girl students",
  },
  {
    icon: Shield,
    title: "Women Empowerment",
    description: "Free martial arts training for self-defense and confidence building",
  },
  {
    icon: Users,
    title: "Volunteer Services",
    description: "Dedicated volunteers serving communities across Kakinada",
  },
  {
    icon: Handshake,
    title: "Interfaith Harmony",
    description: "Promoting unity and mutual respect among all religious communities",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Us"
          subtitle="Malladi Ramarao Trust is a registered charitable and social service organization established in 2015 with the sole objective of serving society selflessly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 rounded-2xl border-0">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-blue-900" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-blue-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="font-serif text-3xl font-bold text-blue-900">
              Our Foundation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              True development is possible only when health, education, and social harmony go hand in hand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Trust operates with transparency, accountability, and a humanitarian approach, ensuring that services reach those who truly need them.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="font-medium text-blue-900">Registered Trust – Reg. No: 29/2015</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="font-medium text-blue-900">10+ Years of Selfless Service</span>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
              alt="Community Service"
              className="rounded-2xl shadow-soft-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-amber-500 text-white p-4 lg:p-6 rounded-2xl shadow-soft-xl">
              <div className="text-3xl lg:text-4xl font-bold font-serif">10+</div>
              <div className="text-xs lg:text-sm">Years of Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
