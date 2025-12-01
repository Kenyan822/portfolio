import { HeroSection } from "@/components/features/home/HeroSection";
import { AboutSection } from "@/components/features/home/AboutSection";
import { EducationSection } from "@/components/features/home/EducationSection";
import { SkillsSection } from "@/components/features/home/SkillsSection";
import { WorksSection } from "@/components/features/home/WorksSection";
import { ContactSection } from "@/components/features/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
