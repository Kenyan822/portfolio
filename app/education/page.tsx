import React from "react";
import { EducationSection } from "@/components/features/home/EducationSection";

export const metadata = {
  title: "Education - My Portfolio",
  description: "My academic background and qualifications.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <EducationSection />
    </div>
  );
}
