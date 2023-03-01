import { reactive } from "vue";

export const store = reactive({
  cards: [],
  endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
});
