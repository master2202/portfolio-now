import Vue from "vue";
import Router from "vue-router";
import Portfolio from "./views/Portfolio.vue";
// import Store from './store'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "*",
      redirect: "/portfolio"
    }
  ]
});
