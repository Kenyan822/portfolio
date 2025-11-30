/**
 * About Section Component
 * 
 * 技術スタック: Next.js, React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、自己紹介・プロフィールセクションを表示します。
 * - プロフィール画像と名前の表示
 * - 自己紹介文の表示
 * - 技術バッジによる技術スタックの可視化
 * - レスポンシブデザイン対応
 * 
 * 実装のポイント:
 * - Next.jsのImageコンポーネントを使用して画像を最適化
 * - セクションIDを設定し、ナビゲーションからのスクロールに対応
 * - アニメーション効果で視覚的な魅力を向上
 */

import Image from "next/image";
import TechBadge from "@/components/ui/TechBadge";

export default function About() {
  // 主要な技術スタックを表示（例）
  const mainTechnologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* プロフィール画像 */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg">
              {/* プレースホルダー画像 - 実際のプロジェクトでは画像を追加 */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 flex items-center justify-center">
                <span className="text-6xl md:text-8xl text-zinc-500 dark:text-zinc-400 font-bold">
                  P
                </span>
              </div>
            </div>
          </div>

          {/* プロフィール情報 */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              こんにちは、私はエンジニアです
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              フロントエンド開発を中心に、モダンなWebアプリケーションの開発に携わっています。
              <br />
              Next.jsとReactを使用した開発が得意で、ユーザー体験を重視したUI/UXデザインを心がけています。
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              コードの品質と保守性を重視し、型安全性やテストを意識した開発を行っています。
              新しい技術を学ぶことが好きで、常に最新のトレンドをキャッチアップしています。
            </p>

            {/* 技術スタックバッジ */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {mainTechnologies.map((tech) => (
                <TechBadge
                  key={tech}
                  name={tech}
                  category="frontend"
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
