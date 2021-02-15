<template>
  <div id="ImageUploader">
    <label v-if="!value">
      <b-form-file 
        placeholder="ファイルを選択してください。"
        accept="image/*" @change="upload"/>
    </label>
    <label v-if="value">
      <img :src="value" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    async upload(event){
      const files = event.target.files || event.dataTransfer.files
      const file = files[0]
      const toBase64Image = await this.toBase64(file)
      this.$emit('input', toBase64Image)
      // 
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (e) => reject(e)
      })
    }
  },
  data() {
    return {
      file: null
    }
  }
}
</script>

<style>

</style>