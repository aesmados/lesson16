<template>
  <div class="col-lg-3">
    <div class="card p-4 mb-4" @click="goToMovie(movie.id)">
      <h5>{{ movie.title }}</h5>
      <p>{{ movie.imDbRating }}</p>
      <p>{{ movie.year }}</p>
      <p>{{ movie.id }}</p>
      <div class="image"><img :src="movie.image" alt="" /></div>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  props: {
    movie: {
      type: Object,
    },
  },
  methods: {
    goToMovie(movieId) {
      router.push(`/movies/${movieId}`);
    },
  },
};
</script>
<style>
.card h5 {
  min-height: 48px;
}
.image {
  height: 360px;
}
.image img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}
</style>
