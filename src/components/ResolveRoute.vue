<template>
  <div>
    <p><b-button variant="danger" @click="reloadWindow()">やり直す</b-button></p>
    <p><b-button variant="success" @click="openWindow(output)">別ウィンドウを開く</b-button></p>
  </div>
</template>

<script>
export default {
  name: 'ResolveRoute',
  props: {
    persentage: Number
  },
  computed: {
    output() {
      if(this.persentage <= 20) {
        return 'Kaiteki'
      } else if(this.persentage <= 40) {
        return 'YayaKaiteki'
      } else if(this.persentage <= 60) {
        return 'YayaKonzatsu'
      } else if(this.persentage <= 80) {
        return 'Konzatsu'
      } else {
        return 'HijoNiKonzatsu'
      }
    }
  },
  methods:{
    // 混雑率表示画面を新しいウィンドウで開くメソッドopenWindow()
    openWindow(name) {
      // vue-routerのルーティングプロパティ$routerで、ルーティングを逆解決する
      let resolvedRoute = this.$router.resolve({
        name: name,
      })
      window.open(resolvedRoute.href, '', '_blank,width=1280,height=800')
    },

    // ページ更新メソッドreloadWindow()
    reloadWindow() {
      location.reload()
    },
  }
}
</script>

<style>

</style>