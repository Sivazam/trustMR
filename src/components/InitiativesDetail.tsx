"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import { HeartPulse, GraduationCap, Shield, Star, MapPin, Users, CheckCircle } from "lucide-react";

const healthcareServices = [
  {
    title: "Hospital Volunteer Services",
    items: [
      "Deployment of trained volunteers in hospitals",
      "Assisting patients and their families during treatment",
      "Guiding the general public inside hospitals",
      "Supporting hospital staff during peak hours",
    ],
  },
  {
    title: "Public Health Support",
    items: [
      "Continuous involvement in medical social service activities",
      "Supporting needy patients whenever possible",
      "Creating awareness on health, hygiene, and basic medical care",
    ],
  },
];

const educationServices = [
  {
    title: "Support for Government Schools",
    items: [
      "Active involvement in educational initiatives",
      "Special focus on girl students",
      "Encouraging discipline, confidence, and physical fitness",
    ],
  },
];

const womenEmpowermentBenefits = [
  { icon: CheckCircle, text: "Increased self-confidence" },
  { icon: CheckCircle, text: "Self-protection skills" },
  { icon: CheckCircle, text: "Physical and mental strength" },
  { icon: CheckCircle, text: "Discipline and leadership qualities" },
];

const interfaithSupport = [
  {
    community: "Hindu Community Support",
    icon: "🕉️",
    services: [
      "Financial and material support for temple construction",
      "Renovation and reconstruction support",
      "Providing musical and ritual instruments",
      "Supporting temple development",
    ],
  },
  {
    community: "Muslim Community Support",
    icon: "☪️",
    services: [
      "Installation of CCTV surveillance systems in Masjids",
      "Providing public address systems",
      "Supporting safety and communication needs",
    ],
  },
  {
    community: "Christian Community Support",
    icon: "✝️",
    services: [
      "Organizing Christmas celebrations every December",
      "Conducting Christian Maha Sabhas",
      "Food distribution during Christmas",
      "Supporting unity-focused gatherings",
    ],
  },
];

export default function InitiativesDetail() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Initiatives in Detail"
          subtitle="Deep dive into our comprehensive programs serving diverse community needs"
        />

        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center">
                <HeartPulse className="h-7 w-7 text-blue-900" />
              </div>
              <div>
                <Badge className="bg-blue-900 text-white mb-2">Healthcare</Badge>
                <h2 className="font-serif text-3xl font-bold text-blue-900">
                  Healthcare & Medical Services
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthcareServices.map((service, index) => (
                <Card key={service.title} className="shadow-soft-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-amber-500" />
              </div>
              <div>
                <Badge className="bg-amber-500 text-white mb-2">Education</Badge>
                <h2 className="font-serif text-3xl font-bold text-blue-900">
                  Education & Skill Development
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-soft-xl rounded-2xl border-0">
                <CardContent className="p-6">
                  {educationServices.map((service) => (
                    <div key={service.title}>
                      <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                        {service.title}
                      </h3>
                      <ul className="space-y-3">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                  alt="Education"
                  className="rounded-2xl shadow-soft-2xl w-full h-64 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6" />
                    <span className="font-semibold">Focus on Girls</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-green-800/10 rounded-2xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-green-800" />
              </div>
              <div>
                <Badge className="bg-green-800 text-white mb-2">Empowerment</Badge>
                <h2 className="font-serif text-3xl font-bold text-blue-900">
                  Women Empowerment Initiative
                </h2>
              </div>
            </div>

            <Card className="shadow-soft-xl rounded-2xl border-0 mb-8">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Free Martial Arts Training for Girls
                </h3>
                <div className="flex items-center space-x-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>Conducted in Government Schools in Kakinada</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <Users className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                    <p className="text-sm font-medium">Qualified Lady Trainer</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <HeartPulse className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Free Training</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <Star className="h-8 w-8 text-green-800 mx-auto mb-2" />
                    <p className="text-sm font-medium">Government Schools</p>
                  </div>
                </div>

                <p className="text-muted-foreground italic bg-muted/30 p-4 rounded-xl">
                  This initiative has positively impacted many girl students and continues to inspire courage and confidence.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {womenEmpowermentBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.text} className="shadow-lg rounded-xl border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-5 w-5 text-amber-500" />
                      </div>
                      <p className="text-sm font-medium">{benefit.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-blue-900" />
              </div>
              <div>
                <Badge className="bg-blue-900 text-white mb-2">Harmony</Badge>
                <h2 className="font-serif text-3xl font-bold text-blue-900">
                  Interfaith Harmony & Community Services
                </h2>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/5 to-amber-500/5 rounded-2xl p-8 mb-8">
              <p className="text-2xl font-serif text-center text-blue-900 italic mb-2">
                "Service to Humanity is Service to God."
              </p>
              <p className="text-center text-muted-foreground">— Our Guiding Principle</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interfaithSupport.map((community) => (
                <Card key={community.community} className="shadow-soft-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{community.icon}</div>
                    <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                      {community.community}
                    </h3>
                    <ul className="space-y-3">
                      {community.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
