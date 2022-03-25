import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("login") === "true") {
    document.title = to.meta.title || "后台管理系统";
    next();
  } else {
    if (to.meta.isAuth) {
      router.push({ name: "login" });
    } else {
      document.title = to.meta.title || "后台管理系统";
      next();
    }
  }
});

// router.afterEach((to) => {
//   document.title = to.meta.title || "后台管理系统";
// });

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
