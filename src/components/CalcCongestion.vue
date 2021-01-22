<template>
  <div id="CalcCongestion">
    <!-- 仮表示 -->
    <input v-model="referenceValue">
    <p>人数カウント {{ count }}人</p>
    <p>結果(仮置き) {{ result }}%</p>
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
      referenceValue: 0,
    }
  },
  computed: {
    result() {
      if(this.referenceValue != 0){
        return Math.floor((this.count / this.referenceValue) * 100)
      }
    }
  }
}
</script>

<style>

</style>