import { reactive } from "vue";

export const store = reactive({
  cards: [],
  endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

  // Bonus 1 - Caricamento pagina
  isLoading: false,
});
