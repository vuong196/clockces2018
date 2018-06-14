// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Board from './Board'
import Search from './Search'
import timerow24h from './timerow24h'
import timezoneinfor from './timezoneinfor'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

new Vue({
  el: '#board',
  router,
  components: { Board },
  template: '<Board/>'
})

new Vue({
  el: '#searchform',
  router,
  components: { Search },
  template: '<Search/>'
})

new Vue({
  el: '#timerow24h',
  router,
  components: { timerow24h },
  template: '<timerow24h/>'
})

new Vue({
  el: '#timezoneinfor',
  router,
  components: { timezoneinfor },
  template: '<timezoneinfor/>'
})
