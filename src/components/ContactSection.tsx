"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with us to learn more about our work or to volunteer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-soft-2xl rounded-2xl border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-blue-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 9848037766"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="rounded-xl mt-1 resize-none"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Location</p>
                      <p className="text-muted-foreground">Kakinada, Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Phone</p>
                      <p className="text-muted-foreground">+91 9848037766</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Email</p>
                      <p className="text-muted-foreground">malladiramaraotrust@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-blue-900 mb-4">
                  Trust Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Registration Number</p>
                      <p className="text-muted-foreground">29/2015</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-800/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-green-800" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Established</p>
                      <p className="text-muted-foreground">2015 (10+ Years of Service)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="w-full h-80 bg-gradient-to-br from-blue-900/5 to-amber-500/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <p className="text-blue-900 font-semibold text-xl">
                Kakinada, Andhra Pradesh
              </p>
              <p className="text-muted-foreground mt-2">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
