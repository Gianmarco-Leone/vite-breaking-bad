<script>
// -STATE- Importo file reattivo store.js
import { store } from "../data/store.js";

// Importo axios per fare chiamata API
import axios from "axios";

import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import BaseSearch from "./BaseSearch.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
    AppLoader,
    BaseSearch,
  },
  methods: {
    // Creo funzione che recupera cards a seconda dell'url che passo come parametro
    fetchCards(url) {
      // Caricamento pagina
      store.isLoading = true;

      axios
        // Recupero informazioni
        .get(url)

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

    // Funzione per recuperare carte filtrate
    fetchFilteredCards(term) {
      this.fetchCards(`${this.store.endpoint}&type=${term}`);
    },
  },

  // Invoco sulla creazione della pagina la funzione che recupera cards
  created() {
    this.fetchCards(this.store.endpoint);
  },
};
</script>

<template>
  <main>
    <div v-if="!store.isLoading" class="container">
      <!-- Selezione categoria carte -->
      <BaseSearch @on-filter="fetchFilteredCards" />

      <!-- Riquadro bianco centrale -->
      <div class="content-cards">
        <!-- Contenitore cards -->
        <div class="row justify-content-center">
          <div class="col-11">
            <!-- Facia nera con testo bianco -->
            <div class="content-cards-label">
              <span class="fw-bold text-white">Found 39 cards</span>
            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 gy-3 mb-3">
              <!-- Componente Card -->
              <AppCard
                v-for="card in store.cards"
                :key="card.id"
                :pic="card.card_images[0].image_url"
                :name="card.name"
                :type="card.type"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppLoader v-else />
  </main>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables.scss" as *;
main {
  background-color: $primary-color;
  //   debug
  min-height: calc(100vh - 80px);

  .content-cards {
    background-color: #fefefe;

    .content-cards-label {
      background-color: #333;
      margin-top: 3rem;

      span.text-white {
        display: inline-block;
        padding: 1rem;
      }
    }
  }
}
</style>
