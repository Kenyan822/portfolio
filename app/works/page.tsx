"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/Typography";
import { WorkCard } from "@/components/features/works/WorkCard";
import { worksData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function WorksPage() {
  const { t } = useLanguage();

  return (
    <div className="py-24">
      <Container>
        <ScrollReveal>
          <header className="mb-16 text-center">
            <SectionTitle>{t.works.allWorksTitle}</SectionTitle>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              {t.works.allWorksDesc}
            </p>
          </header>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {worksData.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 100}>
              <WorkCard {...work} />
            </ScrollReveal>
          ))}
          
          <ScrollReveal delay={worksData.length * 100}>
            {/* Placeholder for future works or "Coming Soon" */}
            <GlassCard className="flex min-h-[300px] items-center justify-center p-6 text-center">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-500">{t.works.comingSoon}</h3>
                <p className="text-gray-600">{t.works.comingSoonDesc}</p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}
