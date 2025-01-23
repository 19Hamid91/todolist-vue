import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import ToDoListView from "../views/ToDoListView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/list",
    name: "List",
    component: ToDoListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
