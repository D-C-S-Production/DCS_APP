# dcs_app

## ① yarnのインストール
調べてね

## ② yarnのセットアップ（yarnのインストールとはまた別）
```
yarn install
```

## ③ GCPのキーを手に入れる
* Google Cloud Platformにログイン
* **APIとサービス** → **認証情報**
* ”キー”の右にある四角のボタンをクリックしてコピー

## ④ GCPのキーを入れる()
ホームディレクトリ配下に `.env.local` を作り、以下の文を記入
```
VUE_APP_API_KEY = 'GCPからコピーしたAPIのキーを入れる'
```

## ⑤ Electron起動
```
yarn electron:serve
```


### Electronのビルド (おまけ。全部完成したらやる) 
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
