import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue2-animate/dist/vue2-animate.min.css";
import VeeValidate from "vee-validate";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VeeValidate);
Vue.use(VueSweetalert2);

var VueScrollTo = require("vue-scrollto");

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease",
  offset: -45,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
