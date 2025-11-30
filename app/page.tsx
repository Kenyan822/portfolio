/**
 * Home Page Component
 * 
 * 技術スタック: Next.js App Router, React, TypeScript, Tailwind CSS
 * 
 * このファイルは、ポートフォリオサイトのトップページです。
 * - ヒーローセクション: 最初に表示される目立つセクション
 * - 各セクションコンポーネントの統合
 * - スムーズスクロール対応のため、各セクションにIDを設定
 * 
 * 実装のポイント:
 * - Next.jsのApp Routerを使用
 * - 各セクションを個別のコンポーネントに分離（保守性向上）
 * - セクションIDを設定し、ナビゲーションからのスクロールに対応
 * - ヒーローセクションのボタンはクライアントコンポーネントとして実装
 */

"use client";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            ポートフォリオサイト
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            Next.jsとTailwind CSSで構築されたモダンなポートフォリオサイト
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              プロジェクトを見る
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* 各セクション */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
