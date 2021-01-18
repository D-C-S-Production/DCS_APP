<template>
  <div id="app">
    <button @click="callApi">API呼び出し</button>
  </div>
</template>

<script>
// サーバー通信ライブラリのaxiosを使う。
import axios from 'axios'
export default {
  name: 'ThrowVisionApi',
  props: {
    picture: String
  },
  methods: {
    async callApi() {
      // visionApiのエンドポイントを指定する
      const visionApiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`
      // APIキーの仮置き。絶対に外に流さないこと。
      const apiKey = 'AIzaSyCoLdRUtxHXnXy2i57y5JIVy6MfQZZz9kM'
      // VisionAPIに送るデータ(配列)を指定する
      const params = this.setParameters(this.picture)

      try {
        const result = await axios.post(visionApiUrl, options);
        console.log("Request success!");

        if (result.data && result.data.responses) {
          const responses = result.data.responses;
          let detectedPerson = 0;

          responses.forEach((response) => {
            response.localizedObjectAnnotations.forEach((object) => {
              console.log(object.name);
              if(object.name == "Person"){
                detectedPerson++;
              }
            });
          });

          if(detectedPerson != 0){
            console.log("人物を" + detectedPerson + "人検出できました。");
          } else {
            console.log("人物を検出できませんでした。");
          }
        }
      } catch (error) {
      console.error(error.response || error);
      }
    },
    setParameters(imageUrl) {
      const setParams = {
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
      return setParams
    }
  },
}
</script>

<style>

</style>