<template>
  <div>
    {{ count }}
  </div>
     <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count () {
	    return store.state.count
    }
  },
  // actions
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
