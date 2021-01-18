<template>
  <div id="ThrowVisionApi">
    <button @click="callApi">API呼び出し</button>
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
        console.log("Request success!")
        // なぜresult.dataなのかは公式参照 ( https://github.com/axios/axios#response-schema )
        if (result.data && result.data.responses) {
          const responses = result.data.responses
          // 入れ子ごとにforEachで掘り進める
          responses.forEach(response => {
            response.localizedObjectAnnotations.forEach(object => {
              console.log(object.name)
            })            
          })
        }
      }
      catch(error) {
        console.error(error.response || error);
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