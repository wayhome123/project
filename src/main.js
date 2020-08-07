import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/swiper-bundle.css";
import toast from "components/common/toast/toast";
import fastClick from "fastclick";
import vueLazyLoad from "vue-lazyload";

Vue.use(VueAwesomeSwiper);
Vue.use(toast);
Vue.use(vueLazyLoad);

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
