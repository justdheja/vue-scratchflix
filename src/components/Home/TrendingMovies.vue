<template>
  <div>
    <h1 class="title has-text-white">Trending</h1>
    <the-loader></the-loader>
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movies: []
    }
  },

  created() {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.tmdbApi}`)
      .then((response) => {
        console.log(response.data)
        this.movies = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss" scoped>
.poster-container {
  display: flex;
  justify-content: center;
}
</style>