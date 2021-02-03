<template>
  <div id="app">
    <router-view/>
    <p><button @click="reloadWindow()">やり直す</button></p>
    <p><button @click="openWindow('Konzatsu')">サイネージ用ウィンドウを開く</button></p>
  </div>
</template>

<script>
export default {
  name: 'App',
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
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
