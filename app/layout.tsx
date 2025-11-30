/**
 * Root Layout Component
 * 
 * 技術スタック: Next.js App Router, TypeScript, Tailwind CSS
 * 
 * このファイルは、Next.js App Routerのルートレイアウトです。
 * - 全ページで共通のメタデータを設定
 * - フォントの読み込みと設定（Geist Sans, Geist Mono）
 * - ナビゲーションとフッターを全ページに適用
 * 
 * 実装のポイント:
 * - Next.jsのMetadata APIを使用してSEOを最適化
 * - next/fontを使用してフォントを最適化（自動的な自己ホスト）
 * - スムーズスクロールを有効化するため、htmlタグにscroll-smoothクラスを追加
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | ポートフォリオサイト",
  description: "エンジニアのポートフォリオサイトです。プロジェクト、スキル、経歴などを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
