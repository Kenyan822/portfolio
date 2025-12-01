"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/Typography";
import { GlassCard } from "../../ui/GlassCard";
import { SkillIcon } from "./SkillIcons";
import { ScrollReveal } from "../../ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

const skills = [
  { category: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "backend", items: ["Node.js", "Python", "SQL", "Supabase"] },
  { category: "tools", items: ["Git", "Docker", "VS Code", "Figma"] },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle>{t.skills.title}</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={skillGroup.category} delay={index * 150}>
              <GlassCard className="p-6 transition-all duration-1000 ease-out" hoverEffect>
                <h3 className="mb-6 text-xl font-bold text-white border-b border-white/10 pb-2">
                  {t.skills.categories[skillGroup.category as keyof typeof t.skills.categories]}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="flex flex-col items-center justify-center gap-3 p-3">
                      <div className="h-10 w-10 text-gray-300">
                        <SkillIcon name={item} className="h-full w-full" />
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
