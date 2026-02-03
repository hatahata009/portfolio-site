# Satoshi Hatanaka - Portfolio Site

未経験エンジニアとしての転職活動用に作成した、個人のポートフォリオサイトです。
React (TypeScript) と Tailwind CSS を使用して構築されており、これまでの経歴、スキルセット、開発したアプリケーション（Works）をまとめています。

## ✨ 特徴

* **モダンな技術選定**: Vite + React + TypeScript による高速で型安全な開発環境。
* **レスポンシブデザイン**: Tailwind CSS を活用し、PC・スマホ両方で見やすいUIを実現。
* **コンポーネント指向**: 再利用可能なコンポーネント設計と、Lucide Reactによる統一感のあるアイコン使用。
* **Works紹介**: 開発したAIアプリケーション（英会話アプリ、RAGエージェントなど）の詳細、GitHubリポジトリ、デモアプリへのリンクを掲載。

## 🛠 使用技術

* **Frontend Framework**: React (v19)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Build Tool**: Vite
* **Icons**: Lucide React
* **Deployment**: Vercel (推奨)

## 📂 掲載プロジェクト (Works)

ポートフォリオ内で紹介している主な開発実績です。

1. **AI英会話アプリ**
   * 音声認識(Whisper)と生成AIを活用した英会話練習アプリ。
   * [Demo App](https://english-app-deploy-29sh7uhksshpfdaeqhresz.streamlit.app/) / [GitHub](https://github.com/hatahata009/english_app_deploy)

2. **問い合わせ対応自動化エージェント**
   * 社内ドキュメント(RAG)を活用した自律型AIチャットボット。
   * [Demo App](https://customerconnectapp-ebqlsokwtzh9tpappbkwx7w.streamlit.app/) / [GitHub](https://github.com/hatahata009/customer_connect_app)

3. **子育て支援チャットボット**
   * 専門家ペルソナ（医師、料理家など）を選択して相談できるマルチエージェントアプリ。
   * [Demo App](https://childcareassistant-app-9ohzykaqhn59ukjrxdelpf.streamlit.app/) / [GitHub](https://github.com/hatahata009/childcare_assistant-app)

## 🚀 ローカルでの実行方法

このプロジェクトを手元のPCで動かすための手順です。

### 前提条件
* Node.js (v18以上推奨) がインストールされていること

### 手順

1. **リポジトリをクローン**
   ```bash
   git clone [https://github.com/hatahata009/portfolio-site.git](https://github.com/hatahata009/portfolio-site.git)
   cd portfolio-site

```

2. **依存関係のインストール**
```bash
npm install

```


3. **開発サーバーの起動**
```bash
npm run dev

```


4. **ブラウザで確認**
ターミナルに表示されたURL（例: `http://localhost:5173`）にアクセスしてください。

## 📂 ディレクトリ構成

```text
portfolio-site/
├── public/          # 静的ファイル（プロフィール画像など）
├── src/
│   ├── App.tsx      # メインアプリケーションコンポーネント
│   ├── main.tsx     # エントリーポイント
│   └── index.css    # Tailwind CSSのディレクティブ
├── index.html       # HTMLテンプレート
├── package.json     # 依存関係の定義
├── tailwind.config.js # Tailwind設定
└── vite.config.ts   # Vite設定

```

## 🌐 デプロイ

このプロジェクトは **Vercel** へのデプロイに最適化されています。

1. GitHubにプッシュする
2. Vercelでリポジトリをインポートする
3. 設定を変更せずにデプロイボタンを押すだけで公開可能です。

## 👤 著者

**畠中 聡志 (Satoshi Hatanaka)**

* **Role**: AI Engineer / Former Business Owner
* **Email**: hatahata009@gmail.com
* **Github**: [https://github.com/hatahata009](https://www.google.com/search?q=https://github.com/hatahata009)

---

© 2026 Satoshi Hatanaka. All Rights Reserved.

```

```
