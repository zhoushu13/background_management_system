import Vue from "vue";
import App from "./App.vue";

import store from "src/store";
import router from "src/router";

import "src/configs/elm";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  import("src/api/mock");
}

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
