/**
 * Card Component
 * 
 * 技術スタック: React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、再利用可能なカードコンポーネントです。
 * - プロジェクトカード、スキルカードなどで使用
 * - ホバー効果: インタラクティブなUI
 * - レスポンシブ対応: モバイルでも見やすいレイアウト
 * 
 * 実装のポイント:
 * - コンポーネントの合成パターンを使用（Card, CardHeader, CardBody, CardFooter）
 * - 柔軟なレイアウトのため、childrenをそのまま受け取る
 * - ダークモード対応のスタイル
 */

import React from "react";

interface CardProps {
  /** カードの子要素 */
  children: React.ReactNode;
  /** 追加のクラス名 */
  className?: string;
  /** ホバー効果を有効にするか */
  hover?: boolean;
  /** クリック可能かどうか */
  clickable?: boolean;
  /** クリック時のハンドラ */
  onClick?: () => void;
}

/**
 * カードの基本コンポーネント
 */
export function Card({
  children,
  className = "",
  hover = false,
  clickable = false,
  onClick,
}: CardProps) {
  const baseClasses =
    "bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm";
  const hoverClass = hover || clickable
    ? "transition-all duration-200 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700"
    : "";
  const clickableClass = clickable ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClass} ${clickableClass} ${className}`}
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable && onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

/**
 * カードのヘッダー部分
 */
export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 ${className}`}>
      {children}
    </div>
  );
}

/**
 * カードの本文部分
 */
export function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

/**
 * カードのフッター部分
 */
export function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 ${className}`}>
      {children}
    </div>
  );
}
