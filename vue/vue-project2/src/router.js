import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./HomeView.vue";
import AboutView from "./AboutView.vue";
import CarListView from "./CarList.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/car", component: CarListView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
