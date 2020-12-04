<template>
  <div id="app">
    <the-navbar></the-navbar>
    <transition name="fade">
      <router-view/>
    </transition>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  background: #2c3e50;
  color: #fff;
}

#app {
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
