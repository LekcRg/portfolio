<template lang="pug">
  .blog
    h1 Блог
    blogPost(
      v-for='post in posts'
      :post='post'
    )
    blogPost(:editmode='true')
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
