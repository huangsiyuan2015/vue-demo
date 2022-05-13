import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import Index from "../views/Main/Index";
import Job from "../views/Main/Job";
import Publish from "../views/Main/Publish";
import Message from "../views/Main/Message";
import Profile from "../views/Main/Profile";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "index",
        component: Index,
      },
      {
        path: "job",
        component: Job,
      },
      {
        path: "publish",
        component: Publish,
      },
      {
        path: "message",
        component: Message,
      },
      {
        path: "profile",
        component: Profile,
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
