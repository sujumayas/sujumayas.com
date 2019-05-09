<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <div class="main-wrapper">
      <div class="container">
        <slot/>
        <aside class="main-aside">
          <h3>Algunos links de prueba para el sidebar</h3>
          <ul>
            <li><a href="#">Links de Prueba</a></li>
            <li><a href="#">Links de Prueba</a></li>
            <li><a href="#">Links de Prueba</a></li>
            <li><a href="#">Links de Prueba</a></li>
            <li><a href="#">Links de Prueba</a></li>
          </ul>
        </aside>
      </div>
    </div> 
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.main-wrapper{
  width: 100%;
 
}
.main-aside{
  min-width:15%;
}

.container{
  max-width:950px;
  margin:0 auto;
  display: grid;
  grid-template-columns: 1fr 25%;
}
img {
  max-width:100%;
}
</style>
