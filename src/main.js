// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import promise from 'es6-promise'
promise.polyfill()
import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import '@/utils/index.js'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import * as filters from './filters' // global filters
// import './mock' // simulation data
import './permission' // permission control

import '@/icons' // icon

Vue.config.productionTip = false

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
