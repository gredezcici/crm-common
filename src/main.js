// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import routes from './router'
import VueRouter from 'vue-router'
import AppView from './App.vue'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css'
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import '../node_modules/admin-lte/dist/js/app.min'

Vue.config.productionTip = false
Vue.use(VueRouter)

import { domain, count, prettyDate, pluralize } from './filters/filters'

Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

var router = new VueRouter({
  routes: routes

})
/* eslint-disable no-new */
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
