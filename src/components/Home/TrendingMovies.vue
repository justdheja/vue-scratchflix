<template>
  <div>
    <h1 class="title has-text-white">Trending</h1>
    <the-loader v-if="isLoading"></the-loader>
    <movie-card v-else v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLoading: false,
      movies: []
    }
  },

  methods: {
    async getTrendingMovies() {
      this.isLoading = true
      await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.tmdbApi}`)
        .then((response) => {
          console.log(response.data)
          this.movies = response.data.results
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  created() {
    this.getTrendingMovies()
  },
}
</script>

<style lang="scss" scoped>
.poster-container {
  display: flex;
  justify-content: center;
}
</style>