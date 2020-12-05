import './apiKey'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { firestorePlugin } from 'vuefire'
import ApiKey from './apiKey'
import MovieCard from './components/MovieCard'
import TheLoader from './components/TheLoader'

Vue.use(firestorePlugin)
Vue.use(Buefy)
Vue.config.productionTip = false
Vue.mixin({
  data() {
    return {
      get tmdbApi() {
        return ApiKey.TMDB_API
      },
    }
  },
})
Vue.component('MovieCard', MovieCard)
Vue.component('TheLoader', TheLoader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
