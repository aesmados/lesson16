import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetailsView from "@/views/MovieDetailsView.vue";
import MoviesView from "@/views/MoviesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: MovieDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
