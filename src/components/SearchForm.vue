<template>
  <form class="input-group mb-5 mt-5" @submit.prevent="submitForm">
    <input
      type="text"
      class="form-control"
      v-model="name"
      placeholder="Enter movie name"
      required
    />
    <button class="btn btn-primary" type="submit">Start search</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("searchMovies", this.name);
      this.name = "";
    },
  },
};
</script>
