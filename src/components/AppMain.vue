<script>
// -STATE- Importo file reattivo store.js
import { store } from "../data/store.js";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <!-- Selezione categoria carte -->
      <select
        name="type"
        id="type"
        class="ms-3 my-3 ps-2 pe-5 py-2 fw-semibold rounded border-0"
      >
        <option value="alien" selected>Alien</option>
      </select>

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
                :type="card.archetype"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
