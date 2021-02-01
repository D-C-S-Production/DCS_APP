<template>
  <div id="app">
    <router-view/>
    <button @click="openWindow()">開く</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods:{
    openWindow() {
      let resolvedRoute = this.$router.resolve({
        name: 'Kaiteki',
      })
      window.open(resolvedRoute.href, '', '_blank,width=1285,height=830')
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
