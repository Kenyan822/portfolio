import React from "react";
import { AboutSection } from "@/components/features/home/AboutSection";

export const metadata = {
  title: "About - My Portfolio",
  description: "Learn more about me and my background.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
    </div>
  );
}
