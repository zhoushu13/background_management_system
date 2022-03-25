const Home = () => import("src/pages/Home");
const Repository = () => import("src/pages/Repository.vue");
const Users = () => import("src/pages/Users.vue");
const Login = () => import("src/pages/Login.vue");
export default [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      icon: "house",
      isAuth: true,
      nav: true,
    },
    component: Home,
  },
  {
    path: "/repository",
    name: "repository",
    meta: {
      title: "库存管理",
      icon: "monitor",
      isAuth: true,
      nav: true,
    },
    component: Repository,
  },
  {
    path: "/users",
    name: "users",
    meta: {
      title: "用户管理",
      icon: "user",
      isAuth: true,
      nav: true,
    },
    component: Users,
  },
  {
    path: "/more",
    name: "more",
    meta: {
      title: "其他",
      icon: "more",
      isAuth: true,
      nav: true,
    },
    children: [
      {
        path: "comments",
        name: "comments",
        meta: {
          title: "评论",
          icon: "s-data",
          isAuth: true,
          nav: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
];
