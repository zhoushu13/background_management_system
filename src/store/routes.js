// import Home from '../pages/Home.vue'
export default {
    state: [
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '首页',
                icon: "house",
                isAuth: true,
                color: '#EEEE00'
            },
            component: () => import('../pages/Home.vue'),
        },
        {
            path: "/repository",
            name: "repository",
            meta: {
                title: "库存管理",
                icon: "monitor",
                isAuth: true,
                color: '#FF8800 '
            },
            component: () => import('../pages/Repository.vue'),
        },
        {
            path: "/users",
            name: "users",
            meta: {
                title: "用户管理",
                icon: "user",
                isAuth: true,
                color: '#CC00FF '
            },
            component: () => import('../pages/Users.vue'),
        },
        {
            path: "/more",
            name: "more",
            meta: {
                title: "其他",
                icon: "more",
                isAuth: true,
                color: '#D28EFF'
            },
            children: [
                {
                    path: "comments",
                    name: "comments",
                    meta: {
                        title: "评论",
                        icon: "s-data",
                        isAuth: true,
                        color: '##99BBFF'
                    },
                },
            ],
        },
    ],
}