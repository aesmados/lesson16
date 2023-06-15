<template>
  <div class="container">
    <MovieList />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "@/components/MovieList.vue";
export default {
  name: "HomeView",
  components: { MovieList },
};
</script>
