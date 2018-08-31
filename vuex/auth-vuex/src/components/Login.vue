<template>
  <form  class="form" @submit.prevent="login({ email, password })">
   <input class="input" type="text" placeholder="email" v-model="email">
   <input class="input" type="password" placeholder="password" v-model="password">
   <button class="button" type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
          email: "",
          password: "",
      }
  },
  methods: {
      login() {
          this.$store.dispatch("login", {
              email: this.email,
              password: this.password
          }).then(() => {
              this.$router.push("/")
          })
      }
  }
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 250px;
    padding: 20px;
    border: 1px solid #eee;
}

.input {
    height: 40px;
    margin: 10px;
}

.button {
    height: 40px;
    margin: 10px;
    background-color: rgb(0, 184, 106);
    border: 1px solid #eee;
    border-radius: 2px;
}

</style>
