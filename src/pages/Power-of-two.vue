<template>
  <Layout>
    <div class="forth-container">
      <div class="forth-container__wrapper">
        <g-image
          class="forth-container__image"
          alt="Example image"
          src="~/perfil.jpeg"
          width="135"
        />
        <h1 class="forth-container__title">Lo que hago en mi trabajo...</h1>
        <a href="/web-dev" class="forth-container__btn">Click aqui</a>
      </div>
      <div class="forth-container__wrapper forth-container__wrapper--second">
        <g-image
          class="forth-container__image"
          alt="Example image"
          src="~/perfil.jpeg"
          width="135"
        />
        <h1 class="forth-container__title">Lo que hago en mi trabajo...</h1>
        <a href="/teachings" class="forth-container__btn">Click aqui</a>
      </div>
      <div class="forth-container__wrapper forth-container__wrapper--third">
        <g-image
          class="forth-container__image"
          alt="Example image"
          src="~/perfil.jpeg"
          width="135"
        />
        <h1 class="forth-container__title">Lo que hago en mi trabajo...</h1>
        <a href="/game-dev" class="forth-container__btn">Click aqui</a>
      </div>
      <div class="forth-container__wrapper forth-container__wrapper--fourth">
        <g-image
          class="forth-container__image"
          alt="Example image"
          src="~/perfil.jpeg"
          width="135"
        />
        <h1 class="forth-container__title">Lo que hago en mi tiempo libre...</h1>
        <a href="/music" class="forth-container__btn">Click aqui</a>
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
.forth-container {
  width: 100%;
  background-color: tomato;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.forth-container__wrapper {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: mediumseagreen;
}
.forth-container__wrapper--second {
  background-color: wheat;
}
.forth-container__wrapper--third {
  background-color: mediumslateblue;
}
.forth-container__wrapper--fourth {
  background-color: orchid;
}
.forth-container__image {
}
.forth-container__title {
}
.forth-container__btn {
}
</style>
