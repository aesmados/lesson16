<template>
  <div class="container">
    <h1>Movies</h1>
    <SearchForm @searchMovies="searchMovies" />
    <div class="row">
      <MovieDetails
        v-for="movie in movies.slice(0, 20)"
        :key="movie.id"
        :movie="movie"
        :id="movie.id"
      />
    </div>
    <h4 v-if="!movies.length && !isLoading">No such a movie</h4>
    <LoaderCircle v-if="isLoading" />
  </div>
</template>
<script>
import MovieDetails from "@/components/MovieDetails.vue";
import SearchForm from "@/components/SearchForm.vue";
import LoaderCircle from "@/components/LoaderCircle.vue";
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  components: { MovieDetails, SearchForm, LoaderCircle },
  methods: {
    searchMovies(query) {
      this.isLoading = true;
      axios
        .get(`https://imdb-api.com/en/API/Search/k_95u1wljz/${query}`)
        .then((result) => {
          this.movies = result.data.results;
          this.isLoading = false;
        })
        .catch((error) => console.log("error", error));
    },
  },
};
//k_95u1wljz k2
//k_jpkb33h4 k1
</script>
