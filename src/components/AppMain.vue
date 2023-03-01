<script>
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0")
      .then((response) => {
        this.cards = response.data.data;
      });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <select
        name="type"
        id="type"
        class="ms-3 my-3 ps-2 pe-5 py-2 fw-semibold rounded border-0"
      >
        <option value="alien" selected>Alien</option>
      </select>

      <!-- Riquadro bianco centrale -->
      <div class="content-cards">
        <div class="row justify-content-center">
          <div class="col-11">
            <div class="content-cards-label">
              <span class="fw-bold text-white">Found 39 cards</span>
            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 gy-3 mb-3">
              <div class="col" v-for="card in cards">
                <div class="my-card">
                  <img :src="card.card_images[0].image_url" class="img-fluid" />
                  <div class="my-card-text text-center">
                    <p class="fw-semibold text-white pt-1">
                      {{ card.name }}
                    </p>
                    <span>{{ card.archetype }}</span>
                  </div>
                </div>
              </div>
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

    .my-card-text {
      min-height: 6rem;
      background-color: $primary-color;
    }
  }
}
</style>
