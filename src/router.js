import Vue from 'vue'
import Router from 'vue-router'
import List from './pages/list.vue'
import Converter from './pages/converter.vue'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/converter',
      name: 'converter',
      component: Converter
    },
  ]
})

export default router