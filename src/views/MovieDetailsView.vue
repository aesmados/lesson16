<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="image">
          <img :src="movie.image" />
        </div>
      </div>
      <div class="col-sm-6">
        <h2>{{ movie.fullTitle }}</h2>
        <p>{{ movie.year }}</p>
        <p>{{ movie.imDbRating }}</p>
        <p>{{ movie.genres }}</p>
        <div class="actor" v-for="actor in actors.slice(0, 3)" :key="actor.id">
          <p>{{ actor.name }}</p>
          <p>{{ actor.asCharacter }}</p>
          <img :src="actor.image" class="img-fluid" />
        </div>
      </div>
      <div class="col-sm-12">
        <div
          class="similars"
          v-for="similar in similars.slice(0, 3)"
          :key="similar.id"
        >
          <p>{{ similar.title }}</p>
          <img :src="similar.image" class="img-fluid" />
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
