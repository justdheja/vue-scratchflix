<template>
  <div id="app">
    <the-navbar></the-navbar>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss">
body {
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #2c3e50;
}

.nflogo {
  fill: #e50914;
  line-height: normal;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
