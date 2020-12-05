<template>
	<div class="movie-card">
		<div class="poster-wrapper" @click="showModal = true">
			<img
				:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
				alt=""
			/>
		</div>

		<b-modal v-model="showModal" has-modal-card full-screen :can-cancel="false">
			<div class="modal-card" style="width: auto">
				<section class="modal-card-body" >
					<div class="wrapper">
						<img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" alt="">
						<h1 class="title has-text-white">
							{{ movie.title }}
						</h1>
						<h2 class="subtite has-text-white">
							{{ movie.release_date.slice(0,4) }}
						</h2>
						<p class="has-text-white">
						{{movie.overview}}
						</p>
					</div>

					<button class="button mr-3" type="button" @click="showModal = false">
						Close
					</button>
					<button v-if="!isInMyList" class="button" @click="addToMylist">Add to My List</button>
					<button v-else class="button" @click="removeFromMyList(movie)">Remove from My List</button>
				</section>
			</div>
		</b-modal>
	</div>
</template>

<script>
import { mylistsCollection } from '../firebase'

export default {
	data() {
		return {
			showModal: false,
			isInMyList: false
		};
	},
  props: {
    movie: Object 
  },
	created() {
		if(this.$route.path === '/my-list'){
			this.isInMyList = true
		}
	},
	methods: {
		addToMylist() {
			mylistsCollection.add({
				poster_path: this.movie.poster_path,
				backdrop_path: this.movie.backdrop_path,
				title: this.movie.title,
				release_date: this.movie.release_date,
				overview: this.movie.overview
			})
				.then((reponse) => {
					console.log('Created')
					this.$buefy.toast.open({
							message: 'Added to My List!',
							type: 'is-success'
					})
					this.showModal = false
				})
				.catch((error) => {
					console.log(error)
				})
		},

		removeFromMyList(item) {
			mylistsCollection.doc(item.id).delete()
				.then((response) => {
					console.log('deleted')
					this.$buefy.toast.open({
							message: 'Removed from My List!',
							type: 'is-danger'
					})
					this.showModal = false
				})
				.catch((error) => {
					console.log(error)
				})
		}
	},
};
</script>

<style lang="scss" scoped>
.poster-wrapper {
  width: 10vw;
  cursor: pointer;
  img {
    border-radius: 15px;
    object-fit: contain;
  }
}

.movie-card {
	display: inline-block;
	margin: 0 20px 10px 0;
}

.wrapper {
	width: 100%;
	height: 50vh;
	background-repeat: no-repeat;
	background-size: cover;
	img {
		border-radius: 15px;
	}
}

.modal-card-body {
	background: #000;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
