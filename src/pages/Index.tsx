import CosmicBackground from "@/components/CosmicBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationExperienceSection from "@/components/EducationExperienceSection";

import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

// Build trigger for Vercel deployment update
const Index = () => {
  useScrollReveal();

  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationExperienceSection />

        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
