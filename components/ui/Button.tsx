/**
 * Button Component
 * 
 * 技術スタック: React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、再利用可能なボタンコンポーネントです。
 * - バリアント対応: primary, secondary, outlineなど
 * - サイズ対応: sm, md, lg
 * - アクセシビリティ: 適切なARIA属性とキーボード操作
 * 
 * 実装のポイント:
 * - ReactのforwardRefを使用してrefを転送可能に
 * - 型安全性を確保するため、ButtonHTMLAttributesを拡張
 * - テーマに応じたスタイルをTailwindで実現
 */

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンのバリアント（スタイルの種類） */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** ボタンのサイズ */
  size?: "sm" | "md" | "lg";
  /** 子要素 */
  children: React.ReactNode;
}

/**
 * バリアントに応じたクラスのマッピング
 */
const variantClasses: Record<string, string> = {
  primary:
    "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200",
  secondary:
    "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700",
  outline:
    "border-2 border-zinc-900 text-zinc-900 dark:border-zinc-50 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  ghost:
    "text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800",
};

/**
 * サイズに応じたクラスのマッピング
 */
const sizeClasses: Record<string, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", ...props }, ref) => {
    const variantClass = variantClasses[variant] || variantClasses.primary;
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
