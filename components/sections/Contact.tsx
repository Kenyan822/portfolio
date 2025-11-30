/**
 * Contact Section Component
 * 
 * 技術スタック: Next.js, React, TypeScript, Tailwind CSS, React Hooks
 * 
 * このコンポーネントは、お問い合わせフォームセクションを表示します。
 * - フォームバリデーション（クライアントサイド）
 * - エラーメッセージの表示
 * - 送信状態の管理
 * - アクセシビリティ対応
 * 
 * 実装のポイント:
 * - React Hooks（useState）でフォーム状態を管理
 * - バリデーションロジックを実装
 * - エラーメッセージを適切に表示
 * - フォーム送信は初期段階ではコンソールログ（後でAPI連携可能）
 * - HTML5のバリデーション属性も併用
 */

"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { ContactFormData } from "@/data/types";

/**
 * メールアドレスのバリデーション
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * フォームのバリデーションエラー
 */
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  /**
   * フォーム入力の変更ハンドラ
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // エラーをクリア
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * フォームのバリデーション
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "名前を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.message.trim()) {
      newErrors.message = "メッセージを入力してください";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "メッセージは10文字以上入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * フォーム送信ハンドラ
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 実際のプロジェクトでは、ここでAPIに送信
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // デモ用: コンソールに出力
      console.log("フォーム送信:", formData);

      // 送信成功のシミュレーション
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("送信エラー:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black flex items-center"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Contact
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            お問い合わせやご連絡はこちらから
          </p>
        </div>

        {/* お問い合わせフォーム */}
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 名前 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
                >
                  名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="お名前を入力してください"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* メッセージ */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
                >
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="メッセージを入力してください（10文字以上）"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* 送信ステータス */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  送信が完了しました。ありがとうございます！
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}

              {/* 送信ボタン */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
