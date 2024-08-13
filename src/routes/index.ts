import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/basics",
    name: "basics",
    component: () => import("@/views/project_views/basics.vue"),
    // meta: {
    //   pageTitle: "Feeds"
    //   // breadcrumbs: ["Crafted", "Widgets"],
    // }
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
//   scrollBehavior(to) {
//     // If the route has a hash, scroll to the section with the specified ID; otherwise, scroll to the top of the page.
//     if (to.hash) {
//       return {
//         el: to.hash,
//         top: 80,
//         behavior: "smooth",
//       };
//     } else {
//       return {
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       };
//     }
//   },
// });

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const configStore = useConfigStore();

//   // current page view title
//   document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

//   // reset config to initial state
//   configStore.resetLayoutConfig();

//   // verify auth token before each page change
//   authStore.verifyAuth();

//   // before page access check if page requires authentication
//   if (to.meta.middleware == "auth") {
//     if (authStore.isAuthenticated) {
//       next();
//     } else {
//       next({ name: "sign-in" });
//     }
//   } else {
//     next();
//   }
// });


export default router;
