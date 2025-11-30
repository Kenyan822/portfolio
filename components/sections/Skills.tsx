/**
 * Skills Section Component
 * 
 * 技術スタック: Next.js, React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、スキルセクションを表示します。
 * - カテゴリ別にスキルをグループ化
 * - 習熟度を視覚的に表示（プログレスバーまたは星評価）
 * - レスポンシブグリッドレイアウト
 * 
 * 実装のポイント:
 * - データをカテゴリごとにフィルタリングして表示
 * - 習熟度をプログレスバーで視覚化
 * - カテゴリ名を日本語に翻訳して表示
 */

import { skills } from "@/data/skills";
import { SkillCategory } from "@/data/types";
import TechBadge from "@/components/ui/TechBadge";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

/**
 * カテゴリ名の日本語マッピング
 */
const categoryLabels: Record<SkillCategory, string> = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  database: "データベース",
  tool: "ツール",
  language: "プログラミング言語",
  other: "その他",
};

/**
 * 習熟度をパーセンテージに変換（1-5を0-100%に）
 */
function getProficiencyPercentage(proficiency: number): number {
  return (proficiency / 5) * 100;
}

/**
 * カテゴリごとにスキルをグループ化
 */
function groupSkillsByCategory(skills: typeof skills) {
  const grouped: Record<SkillCategory, typeof skills> = {
    frontend: [],
    backend: [],
    database: [],
    tool: [],
    language: [],
    other: [],
  };

  skills.forEach((skill) => {
    grouped[skill.category].push(skill);
  });

  return grouped;
}

export default function Skills() {
  const groupedSkills = groupSkillsByCategory(skills);
  const categories = Object.keys(groupedSkills) as SkillCategory[];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Skills
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            これまでに学び、使用してきた技術スタック
          </p>
        </div>

        {/* カテゴリごとのスキル表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categorySkills = groupedSkills[category];
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category} hover>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {categoryLabels[category]}
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                            {skill.name}
                          </span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {skill.proficiency}/5
                          </span>
                        </div>
                        {/* 習熟度プログレスバー */}
                        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                          <div
                            className="bg-zinc-900 dark:bg-zinc-50 h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${getProficiencyPercentage(skill.proficiency)}%`,
                            }}
                          />
                        </div>
                        {skill.description && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* 技術バッジ一覧 */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            使用技術一覧
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <TechBadge
                key={skill.name}
                name={skill.name}
                category={skill.category}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
