import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ImpactSection from "@/components/ImpactSection";
import VideoSection from "@/components/VideoSection";
import InitiativesPreview from "@/components/InitiativesPreview";
import GallerySection from "@/components/GallerySection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background w-full">
      <Navigation />
      <div className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ImpactSection />
        <VideoSection />
        <InitiativesPreview />
        <GallerySection />
        <DonateSection />
        <ContactSection />
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
