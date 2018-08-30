
<template>

<div>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Counter',
    computed: {
        count () {
            return store.state.count
        },
        increment () {
            store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        },
    }
}

</script>