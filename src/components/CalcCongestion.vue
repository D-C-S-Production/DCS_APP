<template>
  <div id="CalcCongestion">
    <!-- 仮表示 -->
    <input v-model="referenceValue" placeholder="基準値を入力">
    <p>人数カウント {{ count }}人</p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: 'CalcCongestion',
  props: {
    count: Number
  },
  data() {
    return {
      referenceValue: null,
      persentage: null
    }
  },
  computed: {
    result() {
      // toFix(第何位)で桁数を整える
      if(this.referenceValue > 0){
        this.persentage = Math.floor(this.count / this.referenceValue * 100)
        return `現在の混雑率は${this.persentage}%です`
        this.$emit('Momo', this.persentage)
      } else {
        return '基準値を入力してください（半角数字以外入力不可）'
      }
    }
  }
}
</script>

<style>

</style>