<template>
  <section class="section">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/login" v-if="!isLoggedIn">Login</router-link>
    <a href="#" class="link" v-if="isLoggedIn" @click="logout">Logout</a> 
  </section>  
</template>

<script>
export default {
  name: 'Nav',
  methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    }
}
</script>


<style>
.section {
    margin-top: 40px;
}

.link {
    text-decoration: none;
    font-size: 110%;
    color: White;
    background-color: rgb(250, 116, 124);
    padding: 15px;
}

.link:hover {
    background-color: rgb(196, 68, 75);
}

</style>
