<template>
  <div class="col-lg-3">
    <div class="card p-4 mb-4" @click="goToMovie(movie.id)">
      <div class="image"><img :src="movie.image" alt="" /></div>
      <h5 class="mt-3">{{ movie.title }}</h5>
      <div class="raiting">{{ movie.imDbRating }}</div>
      <p>{{ movie.year }}</p>
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
<style scoped>
.card {
  cursor: pointer;
}
.card:hover .image img {
  transform: scale(1.1);
}
.image {
  height: 360px;
  overflow: hidden;
}
.image img {
  object-fit: fill;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-out;
}
.card {
  position: relative;
  min-height: 520px;
}
.card .raiting {
  position: absolute;
  top: 35px;
  left: 35px;
  background-color: #3bb33b;
  color: #fff;
  min-width: 32px;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  font-weight: 700;
}
</style>
