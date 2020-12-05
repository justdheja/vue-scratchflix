<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <trending-movies></trending-movies>
    </div>
  </div>
</template>

<script>
import TrendingMovies from '../components/Home/TrendingMovies'

export default {
  name: 'Home',
  components: {
    TrendingMovies
  },
  created() {
    
  },
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 12px auto;
}
</style>
