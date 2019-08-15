<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav" style="display:none;">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <div class="main-wrapper">
      <div class="container no-sidebar">
        <slot />
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
* {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}
.header {
  position: absolute;
  height: 50px;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
