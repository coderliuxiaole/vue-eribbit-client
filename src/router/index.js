import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import("@/views/index/layout");
const Home = () => import("@/views/index/home");
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
        children: [
          {
            path: "/",
            component: () => import("@/views/index/son"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
