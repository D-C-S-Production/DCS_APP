<template>
  <div id="home">
    <!-- 
      v-modelは :value="toBase64Image" @input="toBase64Image = $event.target.value" と同義
    -->
    <ImageUploader v-model="toBase64Image"/>
    <!--
      :pictureにはreplaceImageUrlメソッドからの戻り値が入る(props down)
      カスタムイベント@countから、setCountメソッドを呼び出す(event up)
      props downとevent upでメソッドを呼び出すときの書き方が違うので気をつけること!
    -->
    <ThrowVisionApi :picture="replaceImageUrl()" @count="setCount"/>
    <!-- 仮表示 -->
    親側でのカウント確認 {{ count }}
  </div>
</template>

<script>
// @ is an alias to /src
import ImageUploader from '@/components/ImageUploader.vue'
import ThrowVisionApi from '@/components/ThrowVisionApi.vue'

export default {
  name: 'Home',
  components: {
    ImageUploader,
    ThrowVisionApi
  },
  data: () => ({
    /*
      画像をBase64変換した変数 toBase64Image
      nullだとreplace関数が機能しないので、String型の''を設定している
    */
    toBase64Image: '',

    // 子コンポーネント(ThrowVisionApi.vue)から持ってきた人数を入れる変数count
    count: 0
  }),

  methods: {
    /*
      Base64にした画像からヘッダ部分を取り除いて、imageUrlをセットする関数 replaceImageUrl
      VisionAPIはヘッダがあると認識してくれない。
    */
    replaceImageUrl() {
      return this.toBase64Image.replace(/^data:image\/(png|jpeg);base64,/, '')
    },

    /*
      countのセッター
      (本来はcomputedでやるべきだけど、なぜかエラー吐くので仕方なくmethodsでやった)
     引数には子コンポーネントの$emitで受け取ったデータ(countPerson)が勝手に入る
    */
    setCount(number){
      return this.count = number
    }
  }
}
</script>
