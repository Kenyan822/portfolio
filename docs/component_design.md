# コンポーネント設計 (Component Design)

React/Next.js 開発では、画面を小さな部品（コンポーネント）に分けて開発します。
これにより、コードの再利用性が高まり、管理しやすくなります。

## 1. 共通コンポーネント (Common Components)

サイト全体で使い回す基本的な部品です。

- **Header** (`components/layout/Header.tsx`)
  - ロゴ、ナビゲーションメニューを表示。
- **Footer** (`components/layout/Footer.tsx`)
  - コピーライト、SNS リンクなどを表示。
- **Button** (`components/ui/Button.tsx`)
  - 統一されたデザインのボタン。primary, secondary などのバリエーションを持つ。
- **Container** (`components/ui/Container.tsx`)
  - 画面幅を制限し、中央寄せするためのレイアウト用ラッパー。

## 2. ページ固有コンポーネント (Page Specific Components)

### トップページ (/)

- **HeroSection**
  - メインビジュアル。キャッチコピーと「ポートフォリオを見る」等の CTA ボタン。
- **FeatureWorks**
  - 実績の一部を抜粋して表示するセクション。

### 実績関連 (/works, /works/[id])

- **WorkCard**
  - 実績一覧で使うカード型コンポーネント。サムネイル画像、タイトル、短い説明を表示。
- **WorkDetail**
  - 実績詳細ページで使う、画像スライダーや詳細テキストを表示するエリア。

### その他

- **SectionTitle**
  - 各セクションの見出し（About, Skills, Works など）のデザインを統一するためのコンポーネント。

## ディレクトリ構造案 (src/components)

```text
components/
├── layout/       # ヘッダー、フッターなど配置に関わるもの
│   ├── Header.tsx
│   └── Footer.tsx
├── ui/           # ボタン、入力フォームなど汎用的なUI部品
│   ├── Button.tsx
│   └── Container.tsx
└── features/     # 特定の機能やページに紐づく大きな部品
    ├── works/
    │   ├── WorkCard.tsx
    │   └── WorkList.tsx
    └── home/
        └── HeroSection.tsx
```

## 学習ポイント

- **Atomic Design**: 厳密でなくても良いが、「汎用的な UI 部品」と「特定の機能を持つ部品」を分ける意識を持つこと。
- **Props (プロップス)**: 親コンポーネントから子コンポーネントへデータを渡す仕組み（例: ボタンの文字、実績のタイトルなど）。
