import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routes from './routes'
import asideTrigger from './asideTrigger'
import user from './user'
export default new Vuex.Store({
    modules: {
        routes,
        asideTrigger,
        user
    },
    state: {
        color: [
            '#409EFF',
            '#67C23A',
            '#E6A23C',
            '#F56C6C',
            '#909399',
            '#606266',
        ],
        currentMenu: null,
        tabList: [
            {
                name: 'home',
                label: '首页',
                closable: false,
            }
        ]
    },
    mutations: {
        selectMenu(context, value) {
            if (value === 'home') {
                context.currentMenu = null;
            } else {
                context.currentMenu = {
                    name: value,
                    label: {
                        repository: '库存管理',
                        users: '用户管理',
                        comments: '评论'
                    }[value],
                    closable: true,

                };
                let res = context.tabList.findIndex(i => i.name === value)
                res === -1 ? context.tabList.push(context.currentMenu) : '';
            }
        },
        closeTag(context, value) {

            let res = context.tabList.findIndex(i => i.name === value)
            context.tabList.splice(res, 1)
        }
    }
})