/**
 * Type Definitions
 * 
 * 技術スタック: TypeScript
 * 
 * このファイルは、ポートフォリオサイト全体で使用する型定義を集約しています。
 * - 型安全性の確保: コンパイル時にエラーを検出
 * - コードの可読性向上: データ構造が明確になる
 * - IDEの補完機能を活用: 開発効率の向上
 * 
 * 実装のポイント:
 * - 各データ構造に適切な型を定義
 * - オプショナルプロパティは?を使用
 * - リテラル型で特定の値のみを許可（例: SkillCategory）
 */

/**
 * スキルのカテゴリ
 * フロントエンド、バックエンド、ツールなどに分類
 */
export type SkillCategory = 
  | "frontend"
  | "backend"
  | "database"
  | "tool"
  | "language"
  | "other";

/**
 * スキル情報の型定義
 */
export interface Skill {
  /** スキル名（例: "React", "TypeScript"） */
  name: string;
  /** スキルのカテゴリ */
  category: SkillCategory;
  /** 習熟度（1-5の数値、5が最高） */
  proficiency: number;
  /** スキルのアイコンURL（オプショナル） */
  icon?: string;
  /** スキルの説明（オプショナル） */
  description?: string;
}

/**
 * プロジェクト情報の型定義
 */
export interface Project {
  /** プロジェクトID（一意の識別子） */
  id: string;
  /** プロジェクト名 */
  title: string;
  /** プロジェクトの説明 */
  description: string;
  /** 詳細な説明（マークダウン形式も可） */
  longDescription?: string;
  /** 使用した技術スタックの配列 */
  technologies: string[];
  /** GitHubリポジトリのURL（オプショナル） */
  githubUrl?: string;
  /** デモサイトのURL（オプショナル） */
  demoUrl?: string;
  /** プロジェクト画像のURL（オプショナル） */
  imageUrl?: string;
  /** プロジェクトの開始日 */
  startDate: string;
  /** プロジェクトの終了日（進行中の場合はオプショナル） */
  endDate?: string;
  /** プロジェクトの特徴・ハイライト */
  highlights?: string[];
}

/**
 * 経歴情報の型定義
 */
export interface Experience {
  /** 経歴ID（一意の識別子） */
  id: string;
  /** 会社名・組織名 */
  company: string;
  /** 役職・職種 */
  position: string;
  /** 開始日 */
  startDate: string;
  /** 終了日（現在の場合はオプショナル） */
  endDate?: string;
  /** 職務内容の説明 */
  description: string;
  /** 主な成果・実績 */
  achievements?: string[];
  /** 使用した技術スタック */
  technologies?: string[];
  /** 会社のロゴURL（オプショナル） */
  logoUrl?: string;
}

/**
 * お問い合わせフォームのデータ型
 */
export interface ContactFormData {
  /** 名前 */
  name: string;
  /** メールアドレス */
  email: string;
  /** メッセージ内容 */
  message: string;
}
