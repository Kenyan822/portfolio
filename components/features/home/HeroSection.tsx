"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { GradientText } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20">
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          <GradientText>{t.hero.title}</GradientText>
          <br />
          <span className="text-white">{t.hero.subtitle}</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
          {t.hero.description}
        </p>
        <div className="flex gap-4">
          <Button size="lg" variant="primary" href="/works">{t.hero.viewWorks}</Button>
          <Button size="lg" variant="secondary" href="#contact">{t.hero.contactMe}</Button>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
