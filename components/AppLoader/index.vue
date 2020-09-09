<template>
  <div class="c-app-loader" :class="{'c-app-loader--active': isLoading}">
    <p class="c-app-loader__text">Now Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  name: "AppLoader",
};
</script>

<style scoped>
.c-app-loader {
  background: rgba(255, 255, 255, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease-in-out;
}

.c-app-loader.c-app-loader--active {
  transition: all 0.25s ease-in-out;
  visibility: visible;
  opacity: 1;
}

@keyframes blink {
  from { opacity: 0; }
  to { opacity: 1; }
}

.c-app-loader__text {
  animation: blink 0.5s ease-in-out alternate infinite;
}
</style>
