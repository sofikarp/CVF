import Vue from "vue";
import ElementUI from 'element-ui';
import "./assets/styles/global.css";
import "./plugins/elementUI";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
