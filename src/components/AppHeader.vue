<script>
export default {};
</script>

<template>
  <header>
    <a href="#">
      <img src="../assets/img/logo.png" alt="Logo" class="logo" />
    </a>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
header {
  height: 80px;
  background-color: #fefefe;

  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0 1rem;

  .logo {
    width: 5rem;
  }
}
</style>
