import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";
import Guide from "../views/Guide.vue";
import MandatoryFields from "../views/MandatoryFields.vue";
import PropertyMetadata from "../views/PropertyMetadata.vue";
import LastPage from "../views/LastPage.vue";

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
  {
    path: "/region-merchant-provider/:id",
    name: "RegionMerchantProvider",
    component: PropertyMetadata,
    props: true
  },
  {
    path: "/mandatory-fields/:id",
    name: "MandatoryFields",
    component: MandatoryFields,
    props: true
  },
  {
    path: "/ip-address/:id",
    name: "IPAddress",
    component: IPAddress,
    props: true
  },
  {
    path: "/last-page",
    name: "LastPage",
    component: LastPage,
    props: true
  },


];

const router = new VueRouter({
  routes
});

export default router;
