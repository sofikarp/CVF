import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";
import Guide from "../views/Guide.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/new",
    name: "Create",
    component: Create
  },
  {
    path: "/guide/:id",
    name: "Guide",
    component: Guide,
    props: true
  },

];

const router = new VueRouter({
  routes
});

export default router;
