<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="poster">
          <img :src="movie.image" />
        </div>
      </div>
      <div class="col-sm-8">
        <h2>{{ movie.fullTitle }}</h2>
        <h4>About movie</h4>
        <p>Production year: {{ movie.year }}</p>
        <p>Raiting: {{ movie.imDbRating }}</p>
        <p>Genres: {{ movie.genres }}</p>
        <h4>Actors:</h4>
        <div class="row">
          <div
            class="actor col-lg-4"
            v-for="actor in actors.slice(0, 3)"
            :key="actor.id"
          >
            <div class="image mb-3"><img :src="actor.image" /></div>
            <p>{{ actor.name }}</p>
            <p>Character: {{ actor.asCharacter }}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12">
        <h3 class="mt-5 mb-5">Similar movies</h3>
        <div class="row">
          <div
            class="similars col-lg-3"
            v-for="similar in similars.slice(0, 4)"
            :key="similar.id"
          >
            <div class="image mb-3">
              <img :src="similar.image" class="img-fluid" />
            </div>
            <h5>{{ similar.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movieId: this.$route.params.id,
      movie: "",
      actors: "",
      similars: "",
    };
  },
  mounted() {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_95u1wljz/${this.movieId}`)
      .then((result) => {
        this.movie = result.data;
        this.actors = result.data.actorList;
        this.similars = result.data.similars;
        console.log(result.data);
      });
  },
};
</script>
<style scoped>
.poster {
  height: 600px;
}
.poster img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
.actor .image {
  height: 355px;
}
.actor .image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.similars .image {
  height: 450px;
}
.similars .image img {
  object-fit: cover;
  height: 100%;
}
</style>
