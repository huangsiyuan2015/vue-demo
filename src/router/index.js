import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import Home from "../views/Main/Home";
import Job from "../views/Main/Job";
import Publish from "../views/Main/Publish";
import Message from "../views/Main/Message";
import Profile from "../views/Main/Profile";

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
        path: "home",
        component: Home,
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
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
