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
    // Caricamento pagina
    store.isLoading = true;

    axios
      // Recupero informazioni
      .get(store.endpoint)

      // Se la chiamata è ok
      .then((response) => {
        // Salvo i risultati
        store.cards = response.data.data;
      })

      // Se la chiamata ha un errore
      .catch((error) => {
        // Svuoto l'array per evitare problemi
        store.cards = [];
        // Segnalo errore
        console.error(error);
      })

      // A prescindere dall'esito della richiesta
      .finally(() => {
        // Stoppo caricamento pagina
        store.isLoading = false;
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
