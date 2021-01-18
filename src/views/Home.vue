<template>
  <div id="home">
    <ImageUploader v-model="toBase64Image"/>
    <!-- v-modelは :value="toBase64Image" @input="toBase64Image = $event.target.value" と同義 -->
    <ThrowVisionApi :picture="replaceImageUrl" />
    
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
  }),
  computed: {
    /*
      Base64にした画像からヘッダ部分を取り除いて、imageUrlをセットする関数 replaceImageUrl
      VisionAPIはヘッダがあると認識してくれない。
    */
    replaceImageUrl() {
      return this.toBase64Image.replace(/^data:image\/(png|jpeg);base64,/, '');
    }
  },
}
</script>
