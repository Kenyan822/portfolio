/**
 * Projects Data
 * 
 * 技術スタック: TypeScript
 * 
 * このファイルは、プロジェクトデータを定義しています。
 * - 型安全性: types.tsで定義したProject型を使用
 * - プロジェクト情報の一元管理
 * - 日付形式: ISO 8601形式（YYYY-MM-DD）で統一
 * 
 * 実装のポイント:
 * - 各プロジェクトに一意のIDを付与
 * - 技術スタックを配列で管理し、TechBadgeコンポーネントで表示可能に
 * - ハイライトでプロジェクトの特徴を強調
 */

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "ポートフォリオサイト",
    description: "Next.jsとTailwind CSSを使用したモダンなポートフォリオサイト",
    longDescription:
      "このポートフォリオサイトは、Next.js 16のApp RouterとTailwind CSS 4を使用して構築されました。レスポンシブデザインとダークモードに対応し、スムーズなスクロールアニメーションを実装しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/example/portfolio",
    demoUrl: "https://portfolio.example.com",
    startDate: "2024-01-01",
    highlights: [
      "Next.js App Routerを使用したモダンな構成",
      "Tailwind CSSによる効率的なスタイリング",
      "レスポンシブデザインとダークモード対応",
      "スムーズスクロールとアニメーション",
    ],
  },
  {
    id: "todo-app",
    title: "タスク管理アプリ",
    description: "ReactとTypeScriptで構築したタスク管理アプリケーション",
    longDescription:
      "ローカルストレージを使用してデータを永続化するタスク管理アプリです。React Hooksを使用した状態管理と、TypeScriptによる型安全性を実現しています。",
    technologies: ["React", "TypeScript", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/example/todo-app",
    demoUrl: "https://todo.example.com",
    startDate: "2023-11-01",
    endDate: "2023-12-15",
    highlights: [
      "React Hooksによる状態管理",
      "TypeScriptによる型安全性",
      "ローカルストレージでのデータ永続化",
    ],
  },
  {
    id: "api-server",
    title: "REST API サーバー",
    description: "Node.jsとExpressを使用したRESTful APIサーバー",
    longDescription:
      "Express.jsを使用して構築したRESTful APIサーバーです。PostgreSQLデータベースと連携し、認証機能とCRUD操作を実装しています。",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/example/api-server",
    startDate: "2023-09-01",
    endDate: "2023-10-30",
    highlights: [
      "RESTful API設計",
      "JWT認証の実装",
      "PostgreSQLとの連携",
      "エラーハンドリングとバリデーション",
    ],
  },
];
