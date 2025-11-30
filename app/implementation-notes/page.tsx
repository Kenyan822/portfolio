/**
 * Implementation Notes Page
 * 
 * 技術スタック: Next.js App Router, React, TypeScript, Tailwind CSS
 * 
 * このページは、ポートフォリオサイトの実装ノートを表示します。
 * - 各機能の実装に使用した技術を記録
 * - 実装方法や設計判断の理由を説明
 * - 新卒エンジニア向けの教育資料として機能
 * 
 * 実装のポイント:
 * - セクションごとに実装ログを整理
 * - 技術スタックを明確に記載
 * - コード例や参考資料へのリンクを含める
 */

import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import TechBadge from "@/components/ui/TechBadge";
import Link from "next/link";

/**
 * 実装ノートのデータ構造
 */
interface ImplementationNote {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  implementationDetails: string[];
  codeExample?: string;
  references?: { title: string; url: string }[];
}

const implementationNotes: ImplementationNote[] = [
  {
    id: "layout",
    title: "基本レイアウト構造",
    description: "ナビゲーション、フッター、共通レイアウトの実装",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS"],
    implementationDetails: [
      "Next.js 16のApp Routerを使用してルートレイアウトを実装",
      "Navigationコンポーネントでスムーズスクロール機能を実装",
      "useStateとuseEffectを使用してアクティブセクションを追跡",
      "Tailwind CSSのbackdrop-blurでガラスモーフィズム効果を実現",
      "レスポンシブデザインでモバイルメニューを実装",
    ],
    references: [
      {
        title: "Next.js App Router Documentation",
        url: "https://nextjs.org/docs/app",
      },
      {
        title: "Tailwind CSS Documentation",
        url: "https://tailwindcss.com/docs",
      },
    ],
  },
  {
    id: "ui-components",
    title: "再利用可能なUIコンポーネント",
    description: "Button、Card、TechBadgeコンポーネントの実装",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    implementationDetails: [
      "React.forwardRefを使用してrefを転送可能に実装",
      "バリアントパターンでスタイルのバリエーションを管理",
      "TypeScriptの型定義でpropsの型安全性を確保",
      "コンポーネントの合成パターンでCardコンポーネントを実装",
      "アクセシビリティ対応（ARIA属性、キーボード操作）",
    ],
    references: [
      {
        title: "React forwardRef",
        url: "https://react.dev/reference/react/forwardRef",
      },
    ],
  },
  {
    id: "data-management",
    title: "データ管理と型定義",
    description: "TypeScriptによる型安全性の確保",
    technologies: ["TypeScript"],
    implementationDetails: [
      "types.tsで全体的な型定義を一元管理",
      "インターフェースでデータ構造を定義",
      "リテラル型で特定の値のみを許可（例: SkillCategory）",
      "データファイル（skills.ts, projects.ts, experience.ts）で型安全なデータ管理",
    ],
    references: [
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      },
    ],
  },
  {
    id: "sections",
    title: "セクションコンポーネント",
    description: "About、Skills、Projects、Experience、Contactセクションの実装",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    implementationDetails: [
      "各セクションを独立したコンポーネントとして実装",
      "データファイルから情報を取得して表示",
      "カテゴリ別のフィルタリングとグループ化を実装",
      "プロジェクト詳細モーダルで詳細情報を表示",
      "タイムライン形式で経歴を視覚化",
      "フォームバリデーションを実装（クライアントサイド）",
    ],
  },
  {
    id: "styling",
    title: "スタイリングとデザイン",
    description: "Tailwind CSSによるモダンなデザイン実装",
    technologies: ["Tailwind CSS 4", "CSS Custom Properties"],
    implementationDetails: [
      "Tailwind CSS 4の新しい@import構文を使用",
      "CSS変数でテーマ管理（ライト/ダークモード）",
      "レスポンシブデザイン（モバイルファースト）",
      "アニメーションとトランジション効果",
      "カスタムカラーパレットの定義",
    ],
    references: [
      {
        title: "Tailwind CSS v4 Documentation",
        url: "https://tailwindcss.com/docs",
      },
    ],
  },
  {
    id: "accessibility",
    title: "アクセシビリティ対応",
    description: "WCAG準拠のアクセシビリティ実装",
    technologies: ["HTML5", "ARIA", "Semantic HTML"],
    implementationDetails: [
      "セマンティックHTML要素の使用",
      "ARIA属性の適切な使用",
      "キーボード操作のサポート",
      "フォーカス管理と視覚的フィードバック",
      "alt属性とaria-labelの設定",
    ],
    references: [
      {
        title: "WCAG Guidelines",
        url: "https://www.w3.org/WAI/WCAG21/quickref/",
      },
    ],
  },
];

export default function ImplementationNotes() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* ページヘッダー */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 mb-4 inline-block"
          >
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            実装ノート
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            このポートフォリオサイトの実装に使用した技術と実装方法を記録しています。
            新卒エンジニア向けの教育資料としても活用できます。
          </p>
        </div>

        {/* 実装ノート一覧 */}
        <div className="space-y-8">
          {implementationNotes.map((note) => (
            <Card key={note.id} hover>
              <CardHeader>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {note.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {note.description}
                </p>
              </CardHeader>
              <CardBody>
                {/* 使用技術 */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    使用技術
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {note.technologies.map((tech) => (
                      <TechBadge
                        key={tech}
                        name={tech}
                        category="tool"
                        size="sm"
                      />
                    ))}
                  </div>
                </div>

                {/* 実装詳細 */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    実装のポイント
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                    {note.implementationDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* コード例 */}
                {note.codeExample && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                      コード例
                    </h3>
                    <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm text-zinc-900 dark:text-zinc-50">
                        {note.codeExample}
                      </code>
                    </pre>
                  </div>
                )}

                {/* 参考資料 */}
                {note.references && note.references.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                      参考資料
                    </h3>
                    <ul className="space-y-1">
                      {note.references.map((ref, index) => (
                        <li key={index}>
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {ref.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        {/* まとめ */}
        <Card className="mt-12">
          <CardBody>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              まとめ
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              このポートフォリオサイトは、Next.js 16のApp RouterとTailwind CSS
              4を使用して構築されました。
              モダンなWeb開発のベストプラクティスに従い、型安全性、アクセシビリティ、パフォーマンスを重視しています。
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              各コンポーネントには詳細なコメントが含まれており、実装の意図や技術的な選択理由を理解できるようになっています。
              コードを読むことで、実装の詳細を学ぶことができます。
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
