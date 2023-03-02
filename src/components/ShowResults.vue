<!-- Bonus 2 - COMPONENTE PER STAMPARE RISULTATO NUMERICO DELLE CARTE -->

<script>
// -STATE- Importo file reattivo store.js
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="content-cards-label">
    <span class="fw-bold text-white"
      >Found {{ store.numberResults }} cards</span
    >
  </div>
</template>

<style lang="scss" scoped>
.content-cards-label {
  background-color: #333;
  margin-top: 3rem;

  span.text-white {
    display: inline-block;
    padding: 1rem;
  }
}
</style>
