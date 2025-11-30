/**
 * TechBadge Component
 * 
 * 技術スタック: React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、技術スタックをバッジ形式で表示します。
 * - カテゴリ別の色分け: フロントエンド、バックエンドなどで色を変更
 * - ホバー効果: インタラクティブなUI
 * - レスポンシブ対応: モバイルでも見やすいサイズ
 * 
 * 実装のポイント:
 * - 再利用可能なコンポーネントとして設計
 * - カテゴリに応じた色のマッピングをオブジェクトで管理
 * - Tailwindの動的クラス生成を避け、条件分岐でクラスを決定
 */

interface TechBadgeProps {
  /** 表示する技術名 */
  name: string;
  /** 技術のカテゴリ（色分けに使用） */
  category?: "frontend" | "backend" | "database" | "tool" | "language" | "other";
  /** サイズ（sm, md, lg） */
  size?: "sm" | "md" | "lg";
  /** クリック可能かどうか */
  clickable?: boolean;
}

/**
 * カテゴリに応じた色のマッピング
 * Tailwind CSSのクラス名を使用
 */
const categoryColors: Record<string, string> = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  database: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  tool: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  language: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  other: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
};

/**
 * サイズに応じたクラスのマッピング
 */
const sizeClasses: Record<string, string> = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
};

export default function TechBadge({
  name,
  category = "other",
  size = "md",
  clickable = false,
}: TechBadgeProps) {
  const colorClass = categoryColors[category] || categoryColors.other;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const baseClasses = "inline-flex items-center rounded-full font-medium transition-colors";
  const hoverClass = clickable
    ? "hover:opacity-80 cursor-pointer"
    : "";

  return (
    <span
      className={`${baseClasses} ${colorClass} ${sizeClass} ${hoverClass}`}
    >
      {name}
    </span>
  );
}
