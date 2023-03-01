<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <!-- HEADER -->
  <AppHeader />
  <!-- MAIN -->
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
