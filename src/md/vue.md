## Vue.js とは？

wiki によると

> Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワークである。

要はユーザーが実際に操作する画面側を構築するためのフレームワーク。

### 少し歴史

Evan You（エヴァン・ヨー）という元 Google 社員が開発した JS フレームワーク。
2014 年頃らしい。

React 　 → 　 FaceBook と有志

Angular 　 → 　 Google と有志

Vue は個人と有志によって作られている。

---

## こんな感じで Vue.js が使われている

[新型コロナウィルス感染症対策サイト](https://stopcovid19.metro.tokyo.lg.jp/)

**実際の画面とコードを見ながら見てみよう**

### Vue.js の独特な書き方とバインドという考え方

[新型コロナウィルス感染症対策サイト 最新のお知らせ部分のコード](https://github.com/tokyo-metropolitan-gov/covid19/blob/development/components/WhatsNew.vue)

**ポイント**

1. HTML,CSS,JS が.vue に詰まっている。
2. {{ $t('最新のお知らせ') }}　が意外と面白い。

   > "最新のお知らせ": "What's new"

   > "最新のお知らせ": "Dernières actualités"

   > "最新のお知らせ": "いちばん あたらしい こと"

### Vue.js のライフサイクルフックについて

[AgencyBarChart.vue](https://github.com/tokyo-metropolitan-gov/covid19/blob/development/components/AgencyBarChart.vue)

<img src="https://jp.vuejs.org/images/lifecycle.png">

### 画像に computed(算出プロパティ)がないので補足

JAVA でいうところの getter、setter の認識でほぼ正しいです。

**ドキュメントオブジェクトモデル (DOM)**

> Document Object Model (DOM) は、— ウェブページを表す HTML のように — 文書の構造をメモリ内に表現すること

---

## リンク集

## リンク集

[Vue.js 公式](https://jp.vuejs.org/)

[Vue.js 公式リポジトリ](https://github.com/vuejs)

[Nuxt.js 公式](https://ja.nuxtjs.org/)

[NuxtCommunity](https://github.com/nuxt-community)

こんなフレームワークもある(Vue.js 公式サイトに記載されているフレームワーク)。

[QuasarFramework](https://quasar.dev/)

[新型コロナウィルス感染症対策サイト](https://stopcovid19.metro.tokyo.lg.jp/)

[covid19 リポジトリ](https://github.com/tokyo-metropolitan-gov/covid19)
