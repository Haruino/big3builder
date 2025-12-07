# 筋トレ・BIG3プログラム生成アプリ

## 目的

- 筋トレBIG3プログラムを、生成AIを利用して生成し、記録更新を目指す。
- 生成したプログラムはxlsxで出力可能（追加機能で検討）

## 対象

- BIG3にコミットしているトレーニー
- ある程度知識、経験のあるトレーニー

## スコープ

### やる

- Big3向けの筋力プログラム生成（固定フォーマット）
- 最小入力フォーム
- 生成結果の表示（週→日→種目）
- Googleスプレッドシート作成＆Drive保存

### やらない

- 筋肥大/減量/健康などの多目的最適化
- 種目プリセットの大量カスタム
- 栄養/体重管理連動
- 進捗実績入力→自動再設計（V2以降）

## 技術スタック

### フロントエンド

- TypeScript
- Next.js16(App router)
- React 19.2
- react-hook-form
- zod
- tailwindcss
- swr
- shadcn
- axios

### バックエンド/DB

- Route Handlers
- drizzle ORM
- postgreSQL
- Supabase(ただのPostgresホストとして使う、RLS使わない ※Drizzle + Auth.jsで制御)

### 認証

- Auth.js(プロバイダ: Googleログイン)
