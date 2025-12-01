# コンポーネント設計 (Component Design)

## 0. デザインコンセプト (Design Concept)

macOS のデザイン原則にインスパイアされた、洗練されたダークモードポートフォリオ。

- **Core Theme**: Dark Mode, Sleek & Luxurious
- **Visual Style**: Glassmorphism (Frosted glass), Glowing elements, Subtle gradients
- **Key Principles**: Depth, Layering, Modern Typography

## 1. デザインシステム & 共通 UI (Design System & UI)

基本的な UI コンポーネントは、グラスモーフィズムと発光表現（Glow）を基調とします。

### Atoms (基本要素) `components/ui/`

- **GlassCard** (`components/ui/GlassCard.tsx`)

  - アプリケーション全体の基本となるコンテナ。
  - 半透明の背景 (rgba)、`backdrop-filter: blur`, 繊細な白いボーダーラインを持つ。
  - レイヤー構造を意識し、背景のダークカラーの上に浮いているように表現。

- **Button** (`components/ui/Button.tsx`)

  - **Primary**: わずかなグラデーションと発光（Glow）効果を持つ CTA ボタン。ホバー時に光が強まる。
  - **Secondary**: ガラスのような透明感のあるボタン。ボーダーのみ、または薄い背景色。

- **Typography**

  - **GradientText**: ヒーローセクションのタイトルなどで使用する、洗練されたグラデーションテキスト。
  - Font Family: Inter, SF Pro Display などのモダンなサンセリフ体を使用。

- **Decorations**
  - **AmbientGlow**: 背景に配置する、ぼんやりとした色の光源（Blob）。奥行きを演出する。

## 2. レイアウトコンポーネント (Layout Components) `components/layout/`

- **Header** (`components/layout/Header.tsx`)

  - 画面上部に固定されるナビゲーションバー。
  - 強いすりガラス効果 (`backdrop-filter`) を適用し、スクロール時にコンテンツが背後を流れる macOS のような演出。

- **Footer** (`components/layout/Footer.tsx`)

  - シンプルな構成。透過度を下げ、メインコンテンツを邪魔しないデザイン。

- **Container** (`components/ui/Container.tsx`)
  - コンテンツ幅を制御するラッパー。

## 3. 機能・ページ固有コンポーネント (Feature Components) `components/features/`

### トップページ (/)

- **HeroSection** (`components/features/home/HeroSection.tsx`)

  - 画面中央に配置。
  - 大きなタイポグラフィ（GradientText）と、背景でゆっくり動く AmbientGlow を組み合わせる。
  - ガラスのような質感の 3D 要素やアイコンをアクセントにする。

- **FeatureWorks** (`components/features/home/FeatureWorks.tsx`)
  - WorkCard をグリッドまたはカルーセルで表示。

### 実績関連 (/works)

- **WorkCard** (`components/features/works/WorkCard.tsx`)

  - **GlassCard** をベースにしたカード。
  - ホバー時に枠線が光る、またはカード全体がわずかに浮き上がるアニメーション。
  - サムネイル画像は角丸を大きくし、高品質な印象を与える。

- **WorkDetail** (`components/features/works/WorkDetail.tsx`)
  - 実績詳細表示。
  - 没入感を高めるため、背景を暗く落とし、コンテンツ（画像・テキスト）を浮かび上がらせる。

## 4. ディレクトリ構造案 (src/components)

```text
components/
├── layout/       # ヘッダー、フッター
│   ├── Header.tsx
│   └── Footer.tsx
├── ui/           # デザインシステムに基づく最小単位のUI
│   ├── GlassCard.tsx   # 重要: コンテナの基本
│   ├── Button.tsx
│   ├── Typography.tsx  # GradientTextなどをエクスポート
│   └── AmbientGlow.tsx # 背景装飾用
└── features/     # ページごとの機能ブロック
    ├── works/
    │   ├── WorkCard.tsx
    │   └── WorkList.tsx
    └── home/
        └── HeroSection.tsx
```

## 実装のヒント (Tailwind CSS)

- **Glassmorphism**: `bg-white/10 backdrop-blur-md border border-white/20`
- **Glow Effect**: `shadow-[0_0_15px_rgba(59,130,246,0.5)]` (色はアクセントカラーに合わせる)
- **Dark Background**: `bg-[#0a0a0a]` や `bg-slate-950` など、純粋な黒よりわずかに明るい色または深い青/グレー推奨。
