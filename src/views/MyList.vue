<template>
  <div class="about container py-5">
    <div class="title has-text-white">MyList</div>
    <movie-card v-for="(movie, index) in myLists" :key="index" :movie="movie"></movie-card>
  </div>
</template>

<script>
import { mylistsCollection } from '../firebase'

export default {
  data() {
    return {
      myLists: []
    }
  },
  firestore() {
    return {
      myLists: mylistsCollection
    }
  }
}
</script>
