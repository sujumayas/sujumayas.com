<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
