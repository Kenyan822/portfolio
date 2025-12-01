"use client";

import React from "react";
import { Container } from "../ui/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-black/50 py-12 backdrop-blur-lg">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Portfolio. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            {/* Social links placeholders */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
