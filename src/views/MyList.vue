<template>
  <div class="about container py-5">
    <div class="title has-text-white">MyList</div>
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
