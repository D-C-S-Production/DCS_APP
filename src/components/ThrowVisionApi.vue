<template>
  <div id="ThrowVisionApi">
    <button @click="callApi" :disabled="called">混雑率を計測する</button>
    <p v-if="called==true && countPerson == 0">人物を検出できませんでした。</p>
  </div>
</template>

<script>
// HTTPクライアントライブラリのaxios( https://github.com/axios/axios#response-schema )
import axios from 'axios'
export default {
  name: 'ThrowVisionApi',
  props: {
    picture: String
  },
  data() {
    return {
      countPerson: 0,
      // APIを呼び出し成功したときにtrueにする
      called: false
    }
  },
  methods: {
    async callApi() {
      // APIキー (先頭にVUE_APPがないと動かないらしい)
      const apiKey = process.env.VUE_APP_API_KEY
      // visionApiのエンドポイントを指定する
      const visionApiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`
      // VisionAPIに送るデータ(配列)を指定する
      const params = this.setParamaters(this.picture)
      try {
        // axiosを使ってXMLHttpRequestをpostする
        const result = await axios.post(visionApiUrl, params)
        // なぜresult.dataなのかは公式参照 ( https://github.com/axios/axios#response-schema )
        if (result.data && result.data.responses) {
          const responses = result.data.responses
          // 入れ子ごとにforEachで掘り進める
          responses.forEach(response => {
            response.localizedObjectAnnotations.forEach(object => {
              if(object.name == "Person"){
                this.countPerson++
              }
            })            
          })
        }
        this.called = true
        /*
          カスタムイベント@countを作成する。
          カスタムイベントの命名規則はケバブケース(kebab-case)
          親コンポーネントに「カウントできた人数（countPerson）」を投げる。
        */
        this.$emit('count', this.countPerson)
      }
      catch(error) {
        console.error(error.response || error)
      }
    },

    setParamaters(imageUrl){
      const options = {
        requests: [{
          image: {
            content: imageUrl,
          },
          features: [{
            type: "OBJECT_LOCALIZATION",
            maxResults: 50
          }]
        }]
      }
      return options
    },
  },
}
</script>

<style>

</style>