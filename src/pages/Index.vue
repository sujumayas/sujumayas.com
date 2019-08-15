<template>
  <Layout>
    <div class="single-container">
      <div class="single-container__wrapper">
        <g-image
          class="single-container__image"
          alt="Example image"
          src="~/perfil.jpeg"
          width="135"
        />
        <h1 class="single-container__title">Hola, soy Esen Espinosa Cook</h1>
        <a href="/duality" class="single-container__btn">Click aqui</a>
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
.single-container {
  width: 100%;
  background-color: tomato;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.single-container__wrapper {
  max-width: 500px;
  text-align: center;
}
.single-container__image {
}
.single-container__title {
}
.single-container__btn {
}
</style>
