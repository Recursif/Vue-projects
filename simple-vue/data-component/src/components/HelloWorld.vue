<template>
  <div>
    <h1>Hello {{firstname}} {{lastname}} from {{from}}!!!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['firstname', 'lastname', 'from']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
