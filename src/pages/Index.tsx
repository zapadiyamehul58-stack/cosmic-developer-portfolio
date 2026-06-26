import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CosmicBackground from "@/components/CosmicBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import useScrollReveal from "@/hooks/useScrollReveal";

// Build trigger for Vercel deployment update
const Index = () => {
  useScrollReveal();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash screen is visible
    document.body.style.overflow = "hidden";
    
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "unset";
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <CosmicBackground />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
