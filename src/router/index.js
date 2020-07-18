import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const home = () => import("../views/home/home.vue");
const classify = () => import("../views/classify/classify.vue");
const car = () => import("../views/car/car.vue");
const mine = () => import("../views/mine/mine.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      home: "首页"
    }
  },
  {
    path: "/home",
    component: home,
    meta: {
      name: "首页"
    }
  },
  {
    path: "/classify",
    component: classify,
    meta: {
      name: "分类"
    }
  },
  {
    path: "/car",
    component: car,
    meta: {
      name: "购物车"
    }
  },
  {
    path: "/mine",
    component: mine,
    meta: {
      name: "我的"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
  // linkActiveClass: "active"
});

export default router;
