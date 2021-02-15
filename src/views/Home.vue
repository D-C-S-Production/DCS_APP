<template>
  <div id="home">
    <header>
      <b-container>
        <b-row>
          <b-navbar-brand>
            <p>混雑率測るくん</p>
          </b-navbar-brand>
        </b-row>
      </b-container>
    </header>
    <main>
      <b-container>
        <b-row>
          <!-- 
            v-modelは :value="toBase64Image" @input="toBase64Image = $event.target.value" と同義
            valueというpropsと、inputイベントを自動作成する
            $eventは、カスタムイベントの引数。これならinput
          -->
          <p><ImageUploader v-model="toBase64Image"/></p>

          <p><CalcCongestion :count="count" @persentage="setPersentage"/></p>

          <!--
            :pictureにはreplaceImageUrlメソッドからの戻り値が入る(props down)
            カスタムイベント@countから、setCountメソッドを呼び出す(event up)
            props downとevent upでメソッドを呼び出すときの書き方が違うので気をつけること!
          -->
          <p><ThrowVisionApi :picture="replaceImageUrl()" @count="setCount"/></p>

          <p><ResolveRoute :persentage="persentage"/></p>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageUploader from '@/components/ImageUploader.vue'
import ThrowVisionApi from '@/components/ThrowVisionApi.vue'
import CalcCongestion from '@/components/CalcCongestion.vue'
import ResolveRoute from '@/components/ResolveRoute.vue'

export default {
  name: 'Home',
  components: {
    ImageUploader,
    ThrowVisionApi,
    CalcCongestion,
    ResolveRoute
  },
  data: () => ({
    /*
      画像をBase64変換した変数 toBase64Image
      nullだとreplace関数が機能しないので、String型の''を設定している
    */
    toBase64Image: '',

    // 子コンポーネント(ThrowVisionApi.vue)から持ってきた人数を入れる変数count
    count: 0,

    persentage: 0
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
    },

    // persentageのセッター
    setPersentage(number){
      return this.persentage = number
    }
  }
}
</script>