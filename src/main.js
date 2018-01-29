// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'

import Home from './components/Home'
import Productos from './components/viewProducts'
import Contact from './components/Contact'
import Shop from './components/shop'

const routes = [
  { path: '/home', component: Home, alias: '/' },
  { path: '/Productos', component: Productos },
  { path: '/contact', component: Contact },
  { path: '/shop', component: Shop }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
