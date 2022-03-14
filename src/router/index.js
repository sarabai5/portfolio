import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Sides from "../views/Sides.vue";

import MovingBoxes from "../views/works/MovingBoxes.vue";
import RoomSmart from "../views/works/RoomSmart.vue";
import FurGo from "../views/works/FurGo.vue";
import Capstone from "../views/works/Capstone.vue";
import SmartConnect from "../views/works/SmartConnect";
import ClassInSight from "../views/works/ClassInSight";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Works",
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
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/works/MovingBoxes",
    name: "MovingBoxes",
    component: MovingBoxes
  },
  {
    path: "/works/RoomSmart",
    name: "RoomSmart",
    component: RoomSmart
  },
  {
    path: "/works/FurGo",
    name: "FurGo",
    component: FurGo
  },
  {
    path: "/works/Capstone",
    name: "Capstone",
    component: Capstone
  },
  {
    path: "/works/SmartConnect",
    name: "SmartConnect",
    component: SmartConnect
  },
  {
    path: "/works/ClassInSight",
    name: "ClassInSight",
    component: ClassInSight
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

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
