<template>
  <div>
    <p><button @click="reloadWindow()">やり直す</button></p>
    <p><button @click="openWindow('Kaiteki')">サイネージ用ウィンドウを開く</button></p>
  </div>
</template>

<script>
export default {
  name: 'ResolveRoute',
  methods:{
    // 混雑率表示画面を新しいウィンドウで開くメソッドopenWindow()
    openWindow(name) {
      // vue-routerのルーティングプロパティ$routerで、ルーティングを逆解決する
      let resolvedRoute = this.$router.resolve({
        name: name,
      })
      window.open(resolvedRoute.href, '', '_blank,width=1285,height=830')
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