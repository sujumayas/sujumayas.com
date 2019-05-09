<template>
  <Layout>
    <div class="inner-container">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <g-image alt="Example image" src="~/perfil.jpeg" width="135" />
      
      <h1>Esen Espinosa Cook</h1>
    
      <p>Hi, I am currently testing gridsome + vue.js + graphql so you'll need to wait for a better website.</p>

      <p class="home-links">
        <a href="https://github.com/sujumayas" target="_blank" rel="noopener">Github</a>
        <a href="https://gitlab.com/sujumayas" target="_blank" rel="noopener">GitLab</a>
        
        
      </p>

      
      <br>
      <br>
      <br>
      
      
      
      <hr>
      <h2>If you are bored... jump into one of my projects: </h2>
      <ul>
        <li><a href="http://asterion.online/inspiration/life-in-space" target="_blank" rel="noopener">life-in-space</a></li>
      </ul>
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sujumayas'
  }
}
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
h2 {
  font-size:15px;
  margin: 0;
}
</style>
