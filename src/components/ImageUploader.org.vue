<template>
  <div class="ImageUploader">
    <p id="error" v-show="error">{{ error }}</p>
    <label>
      <p>クリックで画像を変更できます。</p>
      <img :src="avatar" alt="Avatar" class="image">
      <div>
      <input type="file" id="avatar_name" accept="image/jpeg, image/png" @change="onImageChange"/>
      </div>
    </label>
    <button @click="upload()">アップロード</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  data() {
    return {
      avatar: '',
      message: '',
      error: ''
    }
  },
  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    toBase64(file) {
      // Promiseにアロー関数を渡して非同期処理を書く
      return new Promise((resolve, reject) => {
        // 組み込みオブジェクトを使い、Base64エンコードされたデータを取得する
        const reader = new FileReader()
        reader.readAsDataURL(file)
        // resolveの引数に結果を渡す。受け取る処理は後述
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange(e) {
      this.message = ''
      const image = e.target.files || e.dataTransfer.files
      // toBase64から渡された結果を、then(result => ...)で受け取る処理
      this.toBase64(image[0])
        .then(toBase64Image => this.avatar = toBase64Image)
        // イベントオブジェクトからファイルを貰う ⇒ ファイルをBase64エンコードしたものをavatarにセットする
        // そうすると変更を検出したimgタグがsrc属性に新たなavatarの値を当てはめる
        .catch(error => this.setError(error, '画像のアップロードに失敗しました。'))
    },
    // upload() {
    //   if(this.avatar) {
    //     this.message = 'アップロードしました'
    //     this.error = ''
    //   } else {
    //     this.error = '画像がありません'
    //   }
    // }
    async upload() {
      const axios = require('axios')
      const apiKey = 'AIzaSyCoLdRUtxHXnXy2i57y5JIVy6MfQZZz9kM'
      const visionApiUrl =`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`

      const options = {
        requests: [
          {
            image: {
              content: toBase64(image[0]),
            },
            features: [
              {
                type: "OBJECT_LOCALIZATION",
                maxResults: 50
              }
            ]
          }
        ]
      }

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
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
