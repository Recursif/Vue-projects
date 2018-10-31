// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/color.css'
import './assets/css/input-bar.css'
import './assets/css/form.css'
import './assets/css/list.css'
import './assets/css/img-logo.css'
import './assets/css/main.css'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
