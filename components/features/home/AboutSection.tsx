"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { SectionTitle, GradientText } from "../../ui/Typography";
import { GlassCard } from "../../ui/GlassCard";
import { ScrollReveal } from "../../ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SkillIcon } from "./SkillIcons";

export function AboutSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "X", url: "https://twitter.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ];

  return (
    <section id="about" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle>{t.about.title}</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal delay={200} className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.about.name}</h3>
              <p className="leading-relaxed">
                {t.about.description1}
              </p>
            </div>
            <p className="leading-relaxed">
              {t.about.description2}
            </p>
            <div className="pt-4">
              <h3 className="mb-4 text-xl font-semibold text-white">{t.about.connect}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-white/10 hover:text-white hover:scale-110 border border-white/10"
                    aria-label={social.name}
                  >
                    <div className="h-6 w-6">
                      <SkillIcon name={social.name} className="h-full w-full" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <GlassCard className="flex items-center justify-center p-8 transition-all duration-1000 ease-out" hoverEffect>
              <div className="aspect-square w-full max-w-xs rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 p-1 shadow-2xl">
                <div className="h-full w-full rounded-full bg-gray-900/90 overflow-hidden relative">
                  {/* Image placeholder - Replace with actual Image component when ready */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                    Profile Image
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
