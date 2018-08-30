// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const store = new Vuex.Store({
  state: {
      count: 0
  },
  mutations: {
      increment (state) {
          state.count++
      }
  }
})

store.commit('increment')
store.commit('increment')
store.commit('increment')

console.log(store.state.count)
