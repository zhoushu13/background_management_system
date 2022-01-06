import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router'

import './configs/elm';

Vue.config.productionTip = false

import '@/api/mock'

// if (process.env.NODE_ENV === 'development') require('@/api/mock')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
