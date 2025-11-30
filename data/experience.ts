/**
 * Experience Data
 * 
 * 技術スタック: TypeScript
 * 
 * このファイルは、経歴データを定義しています。
 * - 型安全性: types.tsで定義したExperience型を使用
 * - 時系列順に並べることで、キャリアの流れを表現
 * - 実績と技術スタックを明記
 * 
 * 実装のポイント:
 * - 現在の職務はendDateを省略
 * - 実績を配列で管理し、箇条書きで表示可能に
 * - 技術スタックを明記することで、スキルセクションと連携
 */

import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "current-job",
    company: "テックカンパニー株式会社",
    position: "フロントエンドエンジニア",
    startDate: "2024-04-01",
    description:
      "Webアプリケーションのフロントエンド開発を担当。ReactとNext.jsを使用したモダンなUI開発に従事しています。",
    achievements: [
      "React/Next.jsを使用したWebアプリケーション開発",
      "パフォーマンス最適化により、ページ読み込み速度を30%改善",
      "チーム内でのコードレビューと技術共有を実施",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "internship",
    company: "スタートアップ株式会社",
    position: "エンジニアインターン",
    startDate: "2023-07-01",
    endDate: "2023-09-30",
    description:
      "3ヶ月間のインターンシップで、フロントエンドとバックエンドの両方を経験。実務レベルの開発に携わりました。",
    achievements: [
      "Reactを使用した管理画面の開発",
      "REST APIの設計と実装",
      "データベース設計とクエリ最適化",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Git"],
  },
  {
    id: "university",
    company: "〇〇大学",
    position: "情報工学科",
    startDate: "2020-04-01",
    endDate: "2024-03-31",
    description:
      "コンピュータサイエンスを専攻。アルゴリズム、データ構造、ソフトウェア工学などを学びました。",
    achievements: [
      "卒業研究で機械学習プロジェクトに従事",
      "学内ハッカソンで優勝",
      "プログラミングコンテストに参加",
    ],
    technologies: ["Python", "Java", "C++"],
  },
];
