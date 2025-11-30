/**
 * Skills Data
 * 
 * 技術スタック: TypeScript
 * 
 * このファイルは、スキルデータを定義しています。
 * - 型安全性: types.tsで定義したSkill型を使用
 * - データの一元管理: スキル情報を一箇所で管理
 * - カテゴリ別の分類: フロントエンド、バックエンドなどで整理
 * 
 * 実装のポイント:
 * - 配列として定義し、後でフィルタリングやソートが可能
 * - 習熟度は1-5の数値で表現（5が最高）
 */

import { Skill } from "./types";

export const skills: Skill[] = [
  // フロントエンド
  {
    name: "React",
    category: "frontend",
    proficiency: 4,
    description: "コンポーネントベースのUI開発",
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 4,
    description: "Reactフレームワーク、SSR/SSG対応",
  },
  {
    name: "TypeScript",
    category: "language",
    proficiency: 4,
    description: "型安全なJavaScript開発",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 5,
    description: "ユーティリティファーストのCSSフレームワーク",
  },
  {
    name: "JavaScript",
    category: "language",
    proficiency: 4,
    description: "モダンなJavaScript開発",
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    proficiency: 5,
    description: "基本的なマークアップとスタイリング",
  },
  // バックエンド
  {
    name: "Node.js",
    category: "backend",
    proficiency: 3,
    description: "サーバーサイドJavaScript",
  },
  {
    name: "Python",
    category: "language",
    proficiency: 3,
    description: "汎用プログラミング言語",
  },
  // データベース
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: 3,
    description: "リレーショナルデータベース",
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: 2,
    description: "NoSQLデータベース",
  },
  // ツール
  {
    name: "Git",
    category: "tool",
    proficiency: 4,
    description: "バージョン管理システム",
  },
  {
    name: "Docker",
    category: "tool",
    proficiency: 2,
    description: "コンテナ仮想化技術",
  },
  {
    name: "VS Code",
    category: "tool",
    proficiency: 5,
    description: "コードエディタ",
  },
];
