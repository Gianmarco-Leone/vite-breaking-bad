<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

// Importo axios per fare chiamata API
import axios from "axios";

// -STATE- Importo file reattivo store.js
import { store } from "./data/store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    axios.get(store.endpoint).then((response) => {
      store.cards = response.data.data;
    });
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
