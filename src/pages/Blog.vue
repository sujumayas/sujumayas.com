<template>
  <Layout>
    <div class="inner-container">
      <h1>Blog</h1>
      <p>Sometimes you need to write stuff so you can remember it sometime in the future. I have to write stuff because if I don't, I will never learn it in the first place!</p>
      <section>
        <h2 class="title">Total Posts: {{ totalCount }} </h2>
        <template v-if="totalCount > 0">
          <article  v-for="(post, index) in posts" :key="index" @click="onClick(post)">
            <h2 class="post-title"> {{post.node.title}} </h2>
            <p v-html="post.node.excerpt"></p>
          </article>
        </template>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        slug
        path
        date
        content
        excerpt
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Blog'
  },
  data () {
    return {
      imgUrl: require('@/favicon.png')
    }
  },
  computed: {
    posts () {
      return this.$page.allPost.edges
    },
    totalCount () {
      return this.$page.allPost.totalCount
    }
  },
  methods: {
    onClick (post) {
      this.$router.push({ path: post.node.path })
    },
    trimContent(content){
      return content.substring(0, 50)
    }
  }
}
</script>
<style scoped>
p {
  padding: 5px 25px 5px 5px;
}
article h2 {
  padding: 5px;
  cursor:pointer;
}

article:hover{
  background-color:lightgrey;
}

article:hover h2 {
  color:yellow;
}

</style>

