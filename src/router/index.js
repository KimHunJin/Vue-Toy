import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "../pages/main/Main.vue";
import PageA from "../pages/page/PageA.vue";
import PageB from "../pages/page/PageB.vue";

const index = [
  {
    path: "/",
    id: 100,
    name: "root",
    component: Main,
    meta: { actionValue: "1" },
  },
  {
    path: "/page",
    component: Main,
    children: [
      {
        path: "A",
        component: PageA,
        meta: { auth: "1" },
      },
      {
        path: "B",
        component: PageB,
        meta: { auth: "2" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: index,
});

export default router;
