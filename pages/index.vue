<template>
  <div>
    <h1>Page index</h1>
    <p>Hey testt: {{ testState }}</p>

    <AppLoader :is-loading="notes.loading" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppLoader from "../components/AppLoader";

export default {
  layout: "default",
  name: "PageIndex",
  components: {
    AppLoader,
  },
  computed: {
    ...mapState({
      testState: (state) => state.notes.testState,
      notes: (state) => state.notes.notes,
    }),
  },
  methods: {
    ...mapActions({
      loadNotes: "notes/loadNotes",
    }),
  },
  mounted() {
    console.log("loadnote", this.loadNotes);
    this.loadNotes();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
