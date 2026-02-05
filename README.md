# 名刺用ミニサイト（X / Instagramリンク）

このフォルダには、名刺からのQRコードでアクセスすることを想定した、シンプルなリンク集ページが入っています。

- `index.html` … メインのページ
- `styles.css` … デザイン（白ベースのミニマル）
- `script.js` … X / Instagram のIDからURLを組み立てるスクリプト

## 使い方

### 1. ローカルで表示を確認する

1. このフォルダ（`chihori-home`）を開きます。
2. `index.html` をダブルクリックしてブラウザで開きます。
3. スマホ表示を確認したい場合は、ブラウザを細くするか、デベロッパーツールの「レスポンシブモード」で幅を320〜414pxくらいにします。

### 2. 名前（本名）を変更する

1. エディタで `index.html` を開きます。
2. 次の部分を探します。

```html
<h1 class="page-title">Your Name</h1>
```

3. `Your Name` をあなたの本名に書き換えます。

フッターの名前も合わせて変更したい場合は、次の部分も変更します。

```html
<small>&copy; <span id="copyrightYear"></span> Your Name</small>
```

### 3. X / Instagram のIDを設定する

1. エディタで `script.js` を開きます。
2. ファイルの先頭付近にある、次の定数を書き換えます。

```javascript
const X_ID = "your_x_id";
const INSTAGRAM_ID = "your_insta_id";
```

- **X_ID**: あなたのXのユーザーIDを設定します（`@` は付けずにIDだけを入力してください）。
- **INSTAGRAM_ID**: あなたのInstagramのユーザー名を設定します。

例:

```javascript
const X_ID = "kouma_x";
const INSTAGRAM_ID = "kouma_insta";
```

どちらか一方だけ使いたい場合は、使わないほうを空文字にします（ボタンは無効表示になります）。

```javascript
const X_ID = "kouma_x";
const INSTAGRAM_ID = "";
```

### 4. サーバーへのアップロードとQRコード

1. 作成した `index.html`, `styles.css`, `script.js` をサーバーやホスティングサービス（例: GitHub Pages, Netlify など）にアップロードします。
2. 公開されたURLをQRコードに変換して、名刺に印刷します。

以上で、名刺のQRコードからX / Instagramへ飛べるミニサイトの準備が完了です。
