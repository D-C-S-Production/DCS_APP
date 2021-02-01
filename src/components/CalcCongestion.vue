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
      referenceValue: null
    }
  },
  computed: {
    result() {
      // toFix(第何位)で桁数を整える
      if(this.referenceValue > 0){
        let persentage = Math.floor(this.count / this.referenceValue * 100)
        return '現在の混雑率は' + persentage + '%です'
      } else if (this.referenceValue == 0){
        return '数を入力してください'
      } else {
        return '基準値を入力してください（半角数字以外入力不可）'
      }
    }
  }
}
</script>

<style>

</style>