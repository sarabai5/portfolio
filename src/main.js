import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./utils/rem";

Vue.config.productionTip = false;

// Vue.mixin({
//   created: function() {
//     console.log("created");
//     window.scrollTo(0, 0);
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
