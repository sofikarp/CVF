import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";
import Guide from "../views/Guide.vue";
import MandatoryFields from "../views/MandatoryFields.vue";
import MandatoryFieldsPartTwo from "../views/MandatoryFieldsPartTwo.vue";
import CompanyRepresentative from "../views/CompanyRepresentative.vue";
import Ownership from "../views/Ownership.vue";
import PropertyMetadata from "../views/PropertyMetadata.vue";
import IPAddress from "../views/IPAddress.vue";
import LastPage from "../views/LastPage.vue";
import Uploades from "../views/Uploades.vue";
import Uvod from "../views/Uvod.vue";

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
    path: "/mandatory-fields-part-two/:id",
    name: "MandatoryFieldsPartTwo",
    component: MandatoryFieldsPartTwo,
    props: true
  },
  {
    path: "/company-representative/:id",
    name: "CompanyRepresentative",
    component: CompanyRepresentative,
    props: true
  },
  {
    path: "/ip-address/:id",
    name: "IPAddress",
    component: IPAddress,
    props: true
  },
  {
    path: "/last-page/:id",
    name: "LastPage",
    component: LastPage,
    props: true
  },
  {
    path: "/ownership/:id",
    name: "Ownership",
    component: Ownership,
    props: true
  },
  {
    path: "/uploades/:id",
    name: "Uploades",
    component: Uploades,
    props: true
  },

  {
    path: "",
    name: "Uvod",
    component: Uvod,
    props: true
  },
];

const router = new VueRouter({
  routes
});

export default router;
