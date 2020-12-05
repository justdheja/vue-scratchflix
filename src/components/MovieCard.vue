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
				<section class="modal-card-body">

					<button class="button" type="button" @click="showModal = false">
						Close
					</button>
					<button class="button is-primary">Login</button>
				</section>
			</div>
		</b-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
		};
	},
  props: {
    movie: Object 
  }
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

.modal-card-body {
	background: #000;
}
</style>
