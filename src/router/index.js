import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import Sides from "../views/Sides.vue";

import MovingBox from "../views/works/MovingBox.vue";
import RoomSmart from "../views/works/RoomSmart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Home
  },
  {
    path: "/Works",
    name: "Works",
    component: Home
  },
  {
    path: "/Sides",
    name: "Sides",
    component: Sides
  },
  {
    path: "/Resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/works/MovingBox",
    name: "MovingBox",
    component: MovingBox
  },
  {
    path: "/works/RoomSmart",
    name: "RoomSmart",
    component: RoomSmart
  }
  // {
  //   path: "/resume",
  //   name: "Resume",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Resume.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
