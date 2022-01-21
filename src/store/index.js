import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routes from './routes'
import asideTrigger from './asideTrigger'
import user from './user'
import tags from './tags'
export default new Vuex.Store({
    modules: {
        routes,
        asideTrigger,
        user,
        tags
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

    },
})