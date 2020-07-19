## 実行

```
$ npm run dev
```

ビルド

```
$ npm run build
```

上記で自動でブラウザに画面が起動されます。

## 新規ファイルの格納手順

- ・ src/md 　配下にマークダウンファイルの格納
- ・ src/data.json 　に以下を追加します。

```
"": {                →　.mdファイル名と同様の文字列※
  "id": "",          →　.mdファイル名と同様の文字列※
  "layout": "page",  →　レイアウトファイルの選択(page)※
  "title": "",       →　作成したknowledgeのタイトル
  "description": "", →　作成したknowledgeの概要
  "author": ""       →　作成したknowledgeの著者
}
```

※は必須です。

## フォルダ構成と説明

```
docs  → $ npm run build で生成されたファイルが格納されるフォルダです。
dst   → $ npm run dev で生成されたファイルが格納されるフォルダです。
gulp  → gulp の各タスクが格納されています。
src   → 以下が作業フォルダです。
 |-js
 |-knowledge
 |-layout
 |-md
 |-sass
 data.json
```
