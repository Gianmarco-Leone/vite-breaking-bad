<script>
export default {
  data() {
    return {
      term: "",
      cardTypes: [
        "Effect Monster",
        "Flip Effect Monster",
        "Flip Tuner Effect Monster",
        "Gemini Monster",
        "Normal Monster",
        "Normal Tuner Monster",
        "Pendulum Effect Monster",
        "Pendulum Effect Ritual Monster",
        "Pendulum Flip Effect Monster",
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster",
        "Ritual Effect Monster",
        "Ritual Monster",
        "Spell Card",
        "Spirit Monster",
        "Toon Monster",
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster",
        "Fusion Monster",
        "Link Monster",
        "Pendulum Effect Fusion Monster",
        "Synchro Monster",
        "Synchro Pendulum Effect Monster",
        "Synchro Tuner Monster",
        "XYZ Monster",
        "XYZ Pendulum Effect Monster",
        "Skill Card",
        "Token",
      ],
    };
  },
  emits: ["on-filter"],
  methods: {
    filterType() {
      this.$emit("on-filter", this.term);
    },
  },
};
</script>

<template>
  <form @submit.prevent="filterType" action="" class="ms-3 py-3">
    <label class="d-block text-white fw-semibold"> Select a card type </label>
    <div class="d-flex align-items-center">
      <select
        v-model="term"
        class="my-3 ps-2 pe-5 py-2 fw-semibold rounded border-0"
      >
        <!-- <option> -->
        <option v-for="cardType in cardTypes">
          {{ cardType }}
        </option>
      </select>
      <button @click="filterType" class="btn my-btn">Search</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.my-btn {
  background-color: #333;
  color: #fff;
  margin-left: 2rem;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: #333;
  }
}
</style>
