<template>
  <div>
    <h1>Hello {{person.firstname}} {{person.lastname}} from {{from}}!!!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      person: {
        firstname: 'Homer',
        lastname: 'Simpson',
      },
      from: 'Spingfield',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
