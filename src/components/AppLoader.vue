<script>
export default {};
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center text-white text-center"
  >
    <h1>CARD LIST:</h1>
    <p>
      <span class="d-block fs-1 my-5">
        <font-awesome-icon icon="fa-solid fa-circle-notch" class="circle" />
      </span>
      <span class="fs-5"> loading... </span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
div.d-flex {
  //   height: calc(100vh - 80px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(200, 200, 200, 0.5);

  .circle {
    animation: rotate 1s linear infinite;

    @keyframes rotate {
      0% {
        transform: rotate(-360deg);
      }
    }
  }
}
</style>
