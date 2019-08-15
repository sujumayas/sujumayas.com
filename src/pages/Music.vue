<template>
  <Layout>
    <h1>music :D</h1>
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
