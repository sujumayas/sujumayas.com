<template>
  <Layout>
    <div class="inner-container">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <g-image alt="Example image" src="~/perfil.jpeg" width="135" />
      
      <h1>Esen Espinosa Cook</h1>
    
      <p>Hi, I am currently testing gridsome + vue.js + graphql so you'll need to wait for a better website.</p>
      <p>
        The school for poetic computation is organized around exploring the creative and expressive nature of computational approaches to art and design. The school approaches writing code like creative writing — focusing on the mechanics of programming, the demystification of tools, and hacking the conventions of art-making with computation.
      </p>
      <p class="home-links">
        <a href="https://github.com/sujumayas" target="_blank" rel="noopener">Github</a>
        <a href="https://gitlab.com/sujumayas" target="_blank" rel="noopener">GitLab</a>
        
        
      </p>

      
      <br>
      <br>
      <br>
      
      <h2>If you are bored... jump into one of my projects: </h2>
      <div class="portfolio-grid">
        <div class="portfolio-row">
          <div class="portfolio-col">
            <a href="http://asterion.online/inspiration/life-in-space" target="_blank" rel="noopener">
              <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-0.3.5&s=873f1f91c3dd02ebc97aee248ff6c31c&auto=format&fit=crop&w=1500&q=80" alt="">
              <p>life-in-space</p>
            </a>
          </div>
          <div class="portfolio-col">
            <a href="http://taper.badquar.to/2/find_someone.html" target="_blank" rel="noopener">
              <g-image alt="Example image" src="~/assets/image.png" />
              <p>Find Someone</p>
            </a>
          </div>
          <div class="portfolio-col">
              <a href="https://sujumayas.github.io/" target="_blank" rel="noopener">
                <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-0.3.5&s=873f1f91c3dd02ebc97aee248ff6c31c&auto=format&fit=crop&w=1500&q=80" alt="">
                <p>Typing letters</p>
              </a>
          </div>
        </div>
        <div class="portfolio-row">
          <div class="portfolio-col">
            <a href="http://asterion.online/inspiration/life-in-space" target="_blank" rel="noopener">
              <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-0.3.5&s=873f1f91c3dd02ebc97aee248ff6c31c&auto=format&fit=crop&w=1500&q=80" alt="">
              <p>life-in-space</p>
            </a>
          </div>
          <div class="portfolio-col">
            <a href="http://asterion.online/inspiration/life-in-space" target="_blank" rel="noopener">
              <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-0.3.5&s=873f1f91c3dd02ebc97aee248ff6c31c&auto=format&fit=crop&w=1500&q=80" alt="">
              <p>life-in-space</p>
            </a>
          </div>
          <div class="portfolio-col">
              <a href="http://asterion.online/inspiration/life-in-space" target="_blank" rel="noopener">
                <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-0.3.5&s=873f1f91c3dd02ebc97aee248ff6c31c&auto=format&fit=crop&w=1500&q=80" alt="">
                <p>life-in-space</p>
              </a>
          </div>
        </div>
      </div>
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
*{
  box-sizing: border-box;
}
.home-links a {
  margin-right: 1rem;
}
h2 {
  font-size:15px;
  margin: 0;
}
.portfolio-grid{
  margin-top:25px;
  width:100%;
  padding-right:15px;
  padding-left:15px;
}
.portfolio-row{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  margin-left:-15px;
  margin-right:-15px;
}
.portfolio-col{
  flex: 0 0 33%;
  list-style:none;
  padding-right:15px;
  padding-left:15px;
}
a,
a:hover,
a:visited{
  text-decoration:none;
  color:black;
}
li img{
  max-width:100%;
  max-height: 100%;
  object-fit: cover;
}

</style>
