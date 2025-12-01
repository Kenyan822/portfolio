import React from "react";
import { ContactSection } from "@/components/features/home/ContactSection";

export const metadata = {
  title: "Contact - My Portfolio",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  );
}
