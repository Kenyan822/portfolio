/**
 * Projects Section Component
 * 
 * 技術スタック: Next.js, React, TypeScript, Tailwind CSS
 * 
 * このコンポーネントは、プロジェクト一覧セクションを表示します。
 * - プロジェクトをカード形式で表示
 * - 各プロジェクトに技術バッジ、GitHubリンク、デモリンクを表示
 * - プロジェクト詳細のモーダル表示（オプション）
 * - レスポンシブグリッドレイアウト
 * 
 * 実装のポイント:
 * - データからプロジェクト情報を取得して表示
 * - 外部リンクはtarget="_blank"とrel="noopener noreferrer"を設定（セキュリティ）
 * - 日付のフォーマット処理
 * - ホバー効果でインタラクティブなUI
 */

"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import TechBadge from "@/components/ui/TechBadge";
import { Card, CardBody, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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
 * プロジェクト期間をフォーマット
 */
function formatPeriod(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "現在";
  return `${start} - ${end}`;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            これまでに制作したプロジェクト
          </p>
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              hover
              clickable
              onClick={() => setSelectedProject(project.id)}
            >
              {/* プロジェクト画像（プレースホルダー） */}
              {project.imageUrl ? (
                <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-t-lg overflow-hidden">
                  {/* 実際のプロジェクトでは画像を表示 */}
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 flex items-center justify-center rounded-t-lg">
                  <span className="text-4xl text-zinc-500 dark:text-zinc-400">
                    📁
                  </span>
                </div>
              )}

              <CardBody>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <TechBadge
                      key={tech}
                      name={tech}
                      category="frontend"
                      size="sm"
                    />
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {formatPeriod(project.startDate, project.endDate)}
                </p>
              </CardBody>

              <CardFooter>
                <div className="flex gap-2 w-full">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                      }}
                    >
                      Demo
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* プロジェクト詳細モーダル（簡易版） */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {project.longDescription || project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        使用技術
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <TechBadge
                            key={tech}
                            name={tech}
                            category="frontend"
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                          ハイライト
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                          {project.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex gap-2 mt-6">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank", "noopener,noreferrer")
                          }
                        >
                          GitHubを見る
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          variant="primary"
                          onClick={() =>
                            window.open(project.demoUrl, "_blank", "noopener,noreferrer")
                          }
                        >
                          デモを見る
                        </Button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
