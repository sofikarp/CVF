import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Create",
    component: Create
  },

];

const router = new VueRouter({
  routes
});

export default router;
