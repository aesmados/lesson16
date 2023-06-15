<template>
  <h1>Top 250 movies</h1>
  <button @click="filterMovies" class="btn btn-primary">
    Movies above 9 raiting
  </button>
  <button @click="filterMoviesByYear" class="btn btn-primary">
    Movies after 2000 year
  </button>
  <div class="row">
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

export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieDetails,
  },
  mounted() {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_95u1wljz")
      .then((response) => response.json())
      .then((result) => {
        this.movies = result.items;
        console.log(result.items);
      })
      .catch((error) => console.log("error", error));
  },
  methods: {
    // getData() {
    //   fetch("https://imdb-api.com/en/API/Top250Movies/k_jpkb33h4")
    //     .then((response) => response.json())
    //     .then((result) => {
    //       this.movies = result.items;
    //       console.log(result.items);
    //     })
    //     .catch((error) => console.log("error", error));
    // },
    filterMovies() {
      this.movies = this.movies.filter((item) => item.imDbRating > 9);
    },
    filterMoviesByYear() {
      this.movies = this.movies.filter((item) => item.year > 2000);
    },
  },
};
</script>
