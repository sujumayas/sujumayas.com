<template>
  <Layout>
    <div class="dual-container">
      <div class="dual-container__wrapper">
        <g-image class="dual-container__image" alt="Example image" src="~/perfil.jpeg" width="135" />
        <h1 class="dual-container__title">Lo que hago en mi trabajo...</h1>
        <a href="/power-of-two" class="dual-container__btn">Click aqui</a>
      </div>
      <div class="dual-container__wrapper dual-container__wrapper--light">
        <g-image class="dual-container__image" alt="Example image" src="~/perfil.jpeg" width="135" />
        <h1 class="dual-container__title">Lo que hago en mi tiempo libre...</h1>
        <a href="/power-of-two" class="dual-container__btn">Click aqui</a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Sujumayas"
  }
};
</script>

<style scoped>
.dual-container {
  width: 100%;
  background-color: tomato;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.dual-container__wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: mediumseagreen;
}
.dual-container__wrapper--light {
  background-color: wheat;
}
.dual-container__image {
}
.dual-container__title {
}
.dual-container__btn {
}
</style>
