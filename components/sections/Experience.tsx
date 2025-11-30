/**
 * Experience Section Component
 * 
 * 技術スタック: Next.js, React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、経歴セクションを表示します。
 * - タイムライン形式で経歴を表示
 * - 職歴・学歴を時系列で並べる
 * - 各経歴に実績と技術スタックを表示
 * 
 * 実装のポイント:
 * - タイムラインの視覚的な表現（縦線とドット）
 * - 日付のフォーマット処理
 * - 現在の職務は特別なスタイルで強調
 * - レスポンシブデザイン（モバイルでは縦並び）
 */

import { experiences } from "@/data/experience";
import TechBadge from "@/components/ui/TechBadge";
import { Card, CardBody } from "@/components/ui/Card";

/**
 * 日付をフォーマット（YYYY-MM-DD → YYYY年MM月）
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}年${month}月`;
}

/**
 * 期間をフォーマット
 */
function formatPeriod(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "現在";
  return `${start} - ${end}`;
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Experience
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            これまでの経歴と実績
          </p>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* タイムラインの縦線 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 transform md:-translate-x-1/2" />

          {/* 経歴アイテム */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-start md:items-center"
              >
                {/* タイムラインドット */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-zinc-900 dark:bg-zinc-50 rounded-full border-4 border-white dark:border-zinc-900 transform md:-translate-x-1/2 z-10" />

                {/* カード */}
                <Card
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                  hover
                >
                  <CardBody>
                    {/* 期間 */}
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      {formatPeriod(exp.startDate, exp.endDate)}
                    </div>

                    {/* 会社名・役職 */}
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
                      {exp.company}
                    </p>

                    {/* 説明 */}
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {exp.description}
                    </p>

                    {/* 実績 */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                          主な実績
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 技術スタック */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                          使用技術
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <TechBadge
                              key={tech}
                              name={tech}
                              category="frontend"
                              size="sm"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
