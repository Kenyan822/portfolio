import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { worksData } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/Typography";
import { GlassCard } from "@/components/ui/GlassCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return worksData.map((work) => ({
    id: work.id,
  }));
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = worksData.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  return (
    <div className="py-24">
      <Container>
        <Link href="/#works" className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white">
          ← Back to Works
        </Link>
        
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <GradientText>{work.title}</GradientText>
          </h1>
          <p className="text-xl text-gray-300">{work.description}</p>
        </header>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="aspect-video w-full overflow-hidden flex items-center justify-center bg-gray-800">
              {/* Placeholder for actual image */}
              <span className="text-gray-500">Image Placeholder</span>
            </GlassCard>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {work.fullDescription || work.description}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <GlassCard className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Project Info</h3>
              <dl className="space-y-4">
                {work.role && (
                  <div>
                    <dt className="text-sm text-gray-400">Role</dt>
                    <dd className="text-white">{work.role}</dd>
                  </div>
                )}
                {work.techStack && (
                  <div>
                    <dt className="text-sm text-gray-400">Tech Stack</dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                      {work.techStack.map(tech => (
                        <span key={tech} className="rounded-full bg-white/10 px-2 py-1 text-xs text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
              
              <div className="mt-8 flex flex-col gap-3">
                {work.links?.demo && (
                  <Button href={work.links.demo} external variant="primary" className="w-full">
                    View Live Demo
                  </Button>
                )}
                {work.links?.repo && (
                  <Button href={work.links.repo} external variant="secondary" className="w-full">
                    View Code
                  </Button>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </div>
  );
}
