<template>
  <div>
    <h1>Page index</h1>
    <p>counter {{ counter }}</p>
    <p>Hey testt: {{ testState }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  name: "PageIndex",
  computed: {
    ...mapState({
      counter: state => state.counter,
      testState: state => state.notes.testState,
    })
  }
};
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
</style>
