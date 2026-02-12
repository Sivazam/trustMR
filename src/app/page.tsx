// Main page component for Malladi Ramarao Trust website
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ImpactSection from "@/components/ImpactSection";
import VideoSection from "@/components/VideoSection";
import InitiativesPreview from "@/components/InitiativesPreview";
import InitiativesDetail from "@/components/InitiativesDetail";
import GallerySection from "@/components/GallerySection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ImpactSection />
        <VideoSection />
        <InitiativesPreview />
        <InitiativesDetail />
        <GallerySection />
        <DonateSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
