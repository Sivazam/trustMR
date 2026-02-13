import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white mt-auto w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Malladi Ramarao Trust Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <span className="block font-serif font-bold text-lg">Malladi Ramarao</span>
                <span className="block text-xs text-blue-200">Trust</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Serving society selflessly since 2015. Our mission is to create a more compassionate and equitable society through healthcare, education, and community service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#initiatives" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Our Initiatives</a>
              </li>
              <li>
                <a href="#gallery" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Gallery</a>
              </li>
              <li>
                <a href="#donate" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Donate</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Our Initiatives</h3>
            <ul className="space-y-3">
              <li>
                <a href="#initiatives" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Healthcare Services</a>
              </li>
              <li>
                <a href="#initiatives" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Education Support</a>
              </li>
              <li>
                <a href="#initiatives" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Women Empowerment</a>
              </li>
              <li>
                <a href="#initiatives" className="text-blue-100 hover:text-amber-500 transition-colors text-sm">Interfaith Harmony</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Kakinada, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-blue-100 text-sm">+91 9848037766</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-blue-100 text-sm">malladiramaraotrust@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Malladi Ramarao Trust. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm text-center md:text-right">
              Reg. No: 29/2015 | Serving since 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
