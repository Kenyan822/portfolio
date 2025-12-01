"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Header() {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { name: t.header.home, href: "/" },
    { name: t.header.about, href: "/about" },
    { name: t.header.education, href: "/education" },
    { name: t.header.works, href: "/works" },
    { name: t.header.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl transition-all supports-[backdrop-filter]:bg-black/20">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setLanguage(language === "en" ? "ja" : "en")}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            >
              {language === "en" ? "EN" : "JP"}
            </button>

            <button className="md:hidden text-white">
              {/* Mobile menu placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
