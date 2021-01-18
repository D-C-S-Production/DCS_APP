<template>
  <div id="app">
    <h2>Bitcoin Price Index</h2>
    <button @click='callApi'>show</button>
    <div 
      v-for="currency in info"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ImageUploader',
  methods: {
    callApi() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
        .catch(error => console.log(error))
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  },
  data() {
    return {
      info: null
    }
  },
}
</script>

<style>

</style>