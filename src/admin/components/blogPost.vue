<template lang="pug">
  tr(v-if='editmode === false')
    td 
      h3 {{post.title}}
    td
      h3 {{post.date}}
    td
      span {{post.content}}
    td
      button(@click='removePost') Delete

  .post(v-else)
    input(type='text' placeholder='Title' v-model='newPost.title')
    input(type='text' placeholder='Date' v-model='newPost.date')
    textarea(placeholder='Content' v-model='newPost.content')
    button(@click='addPost') Add
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newPost: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewPost", "removeOldPost"]),
    addPost() {
      this.addNewPost(this.newPost);
    },
    removePost() {
      this.removeOldPost(this.post);
    }
  }
};
</script>
