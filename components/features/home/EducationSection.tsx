"use client";

import React from "react";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/Typography";
import { GlassCard } from "../../ui/GlassCard";
import { ScrollReveal } from "../../ui/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

const educationData = {
  en: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      period: "2019 - 2023",
      description: "Specialized in Software Engineering. Focused on web development and algorithms. Graduated with Honors.",
    },
    {
      school: "High School Name",
      degree: "Science and Mathematics Track",
      period: "2016 - 2019",
      description: "Active member of the Robotics Club. Participated in regional coding competitions.",
    },
  ],
  ja: [
    {
      school: "大学名",
      degree: "コンピュータサイエンス学士",
      period: "2019 - 2023",
      description: "ソフトウェアエンジニアリングを専攻。Web開発とアルゴリズムに注力。優秀な成績で卒業。",
    },
    {
      school: "高校名",
      degree: "理数科",
      period: "2016 - 2019",
      description: "ロボティクス部に所属。地域のプログラミングコンテストに参加。",
    },
  ]
};

export function EducationSection() {
  const { t, language } = useLanguage();
  const data = educationData[language];

  return (
    <section id="education" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle>{t.education.title}</SectionTitle>
        </ScrollReveal>
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Center Line (Visible on md and up) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:block" />
          
          {/* Vertical Left Line (Visible on sm and down) */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:hidden" />

          <div className="space-y-12">
            {data.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  <div className="h-full w-full animate-ping rounded-full bg-blue-500 opacity-20" />
                </div>

                {/* Content Side */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <ScrollReveal delay={index * 200}>
                    <GlassCard 
                      className="p-6 transition-all duration-1000 ease-out" 
                      hoverEffect
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-mono text-blue-300 border border-blue-500/20">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="mb-1 text-xl font-bold text-white">{item.school}</h3>
                      <h4 className="mb-3 text-base font-medium text-gray-300">{item.degree}</h4>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </GlassCard>
                  </ScrollReveal>
                </div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
