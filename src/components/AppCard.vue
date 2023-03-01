<script>
export default {
  // Trasmetto solo i dati che mi servono da AppMain
  props: {
    pic: String,
    name: String,
    type: String,
  },
};
</script>

<template>
  <div class="col">
    <div class="my-card">
      <img :src="pic" class="img-fluid" />
      <div class="my-card-text text-center">
        <p class="fw-semibold text-white pt-1">
          {{ name }}
        </p>
        <span>{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.my-card-text {
  min-height: 6rem;
  background-color: $primary-color;
}
</style>
