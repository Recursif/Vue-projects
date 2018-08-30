// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      count: 0
  },
  mutations: {
      increment: state => state.count++,
    decrement: state => state.count--
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  },
  template: `<div>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>`,
})
