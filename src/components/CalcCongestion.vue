<template>
  <div id="CalcCongestion">
    <!-- 仮表示 -->
    <p><b-form-input type="number" v-model="referenceValue" placeholder="基準値を入力"/></p>
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
  data: () => ({
      referenceValue: null,
      persentage: null
  }),
  computed: {
    result() {
      // toFix(第何位)で桁数を整える
      if(this.referenceValue > 0){
        this.persentage = Math.floor(this.count / this.referenceValue * 100)
        this.$emit('persentage', this.persentage)
        return `現在の混雑率は${this.persentage}%です`
      } else {
        return '基準値は0以上の値を入力してください。'
      }
    }
  }
}
</script>

<style>

</style>