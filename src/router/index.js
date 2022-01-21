import Vue from 'vue'
import VueRouter from 'vue-router'

import NavRoutes from '../store/routes'

Vue.use(VueRouter)
// import Layout from '../components/Layout.vue'

const router = new VueRouter({
    mode: 'hash',
    routes: [
        ...NavRoutes.state,
    ]
})

// router.beforeEach((to, from, next) => {
//     next();
// })

router.afterEach((to) => {
    document.title = to.meta.title || '后台管理系统';
})


// import VueRouter from 'vue-router'
// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router

