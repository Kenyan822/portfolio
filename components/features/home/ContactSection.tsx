"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/Typography";
import { GlassCard } from "../../ui/GlassCard";
import { Button } from "../../ui/Button";
import { ScrollReveal } from "../../ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();

  const inputClasses = `
    w-full rounded-xl border border-white/10 
    bg-white/5 px-4 py-3 text-white placeholder-gray-500
    backdrop-blur-sm
    transition-all duration-300
    focus:border-white/30 focus:bg-white/10 
    focus:outline-none focus:ring-2 focus:ring-white/10
    focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
    hover:border-white/20 hover:bg-white/[0.07]
  `;

  return (
    <section id="contact" className="py-24">
      <Container max-w="4xl">
        <ScrollReveal>
          <SectionTitle>{t.contact.title}</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <GlassCard className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">{t.contact.name}</label>
                  <input
                    type="text"
                    id="name"
                    className={inputClasses}
                    placeholder={t.contact.placeholders.name}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">{t.contact.email}</label>
                  <input
                    type="email"
                    id="email"
                    className={inputClasses}
                    placeholder={t.contact.placeholders.email}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">{t.contact.message}</label>
                <textarea
                  id="message"
                  rows={4}
                  className={inputClasses}
                  placeholder={t.contact.placeholders.message}
                />
              </div>
              <Button className="w-full md:w-auto">{t.contact.send}</Button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
