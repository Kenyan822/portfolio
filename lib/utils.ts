/**
 * Utility Functions
 * 
 * 技術スタック: TypeScript
 * 
 * このファイルは、アプリケーション全体で使用するユーティリティ関数を定義しています。
 * - 日付フォーマット
 * - 文字列処理
 * - その他の共通処理
 * 
 * 実装のポイント:
 * - 再利用可能な関数として実装
 * - 型安全性を確保
 * - 単一責任の原則に従う
 */

/**
 * 日付をフォーマット（YYYY-MM-DD → YYYY年MM月）
 * 
 * @param dateString - ISO形式の日付文字列（YYYY-MM-DD）
 * @returns フォーマットされた日付文字列（YYYY年MM月）
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}年${month}月`;
}

/**
 * 期間をフォーマット
 * 
 * @param startDate - 開始日（ISO形式）
 * @param endDate - 終了日（ISO形式、オプショナル）
 * @returns フォーマットされた期間文字列
 */
export function formatPeriod(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "現在";
  return `${start} - ${end}`;
}

/**
 * メールアドレスのバリデーション
 * 
 * @param email - 検証するメールアドレス
 * @returns 有効なメールアドレスかどうか
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * クラス名を結合（Tailwind CSSのクラス名を動的に結合する際に使用）
 * 
 * @param classes - 結合するクラス名の配列
 * @returns 結合されたクラス名文字列
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
