<template>
  <h1>Top 250 movies</h1>
  <div class="btn-row">
    <button @click="filterMovies" class="btn btn-primary">
      Movies above 9 raiting
    </button>
    <button @click="filterMoviesByYear" class="btn btn-primary">
      Movies after 2000 year
    </button>
    <button @click="findMovie" class="btn btn-primary">Find a movie</button>
  </div>
  <div class="row mt-3">
    <LoaderCircle v-if="isLoading" />
    <p v-if="!movies.length && !isLoading">No match movie</p>
    <MovieDetails
      v-for="movie in movies.slice(0, 20)"
      :key="movie.id"
      :movie="movie"
      :id="movie.id"
    />
  </div>
</template>
<script>
import MovieDetails from "@/components/MovieDetails.vue";
import LoaderCircle from "@/components/LoaderCircle.vue";

export default {
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  components: {
    MovieDetails,
    LoaderCircle,
  },
  mounted() {
    this.isLoading = true;
    fetch("https://imdb-api.com/en/API/Top250Movies/k_95u1wljz")
      .then((response) => response.json())
      .then((result) => {
        this.movies = result.items;
        this.isLoading = false;
      })
      .catch((error) => console.log("error", error));
  },
  methods: {
    filterMovies() {
      this.movies = this.movies.filter((item) => item.imDbRating > 9);
    },
    filterMoviesByYear() {
      this.movies = this.movies.filter((item) => item.year > 2000);
    },
    findMovie() {
      this.$router.push("/movies");
    },
  },
};
</script>
<style>
.btn-row {
  display: flex;
  margin: 2em 0;
}
.btn-row button {
  margin-right: 20px;
}
</style>
