"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/Typography";
import { WorkCard } from "../works/WorkCard";
import { Button } from "../../ui/Button";
import { worksData } from "@/lib/data";
import { ScrollReveal } from "../../ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WorksSection() {
  const { t, language } = useLanguage();
  
  // Filter works by language if needed, or assume data structure supports i18n
  // For now, we'll assume worksData is static but headers are translated
  
  // Only show first 3 items on home page
  const featuredWorks = worksData.slice(0, 3);

  return (
    <section id="works" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle>{t.works.title}</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredWorks.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 150}>
              <WorkCard {...work} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300} className="flex justify-center">
          <Button href="/works" variant="secondary" size="lg">
            {t.works.viewAll}
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
