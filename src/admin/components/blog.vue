<template lang="pug">
  .blog__wrapper
    h1.tab__title Блог
    blogPost(:editmode='true')
    .blog
      blogPost(
        v-for='post in posts'
        :post='post'
      )
    
</template>

<script>
import blogPost from "./blogPost";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    blogPost
  },
  computed: {
    ...mapState({
      posts: state => state.blog.data
    })
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts"])
  }
};
</script>

<style lang="scss">
.blog {
  display: flex;
  flex-direction: column;
}
</style>
