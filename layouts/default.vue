<template>
  <div>
    <nuxt />
    <Navigation />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  head() {
    return {
      bodyAttrs: {
        class: "default-layout",
      },
    };
  },
  components: {
    Navigation,
  },
};
</script>

<style>
.default-layout {
  padding: 0;
  margin: 0;
}
</style>