import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SatnaGuide",
    name: "SatnaGuide",
    component: () => import("../views/SatnaGuidePage")
  },
  {
    path:"/ChakavakGuide",
    name:"ChakavakGuide",
    component: () => import("../views/ChakavakGuidePage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
