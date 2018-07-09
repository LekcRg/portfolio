<template lang="pug">
  post(v-if='editmode === false')
    tr
      td 
        h3 {{post.title}}
      td
        h3 {{post.date}}
      td
        span {{post.content}}
      td
        button(@click='removePost') Delete

  .post(v-else)
    .post-line
      input(type='text' placeholder='Title' v-model='newPost.title')
      input(type='text' placeholder='Date' v-model='newPost.date')
    .post-line
      textarea(placeholder='Content' v-model='newPost.content')
    .post-line
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
      this.addNewPost(this.newPost).then(e => {
        this.newPost.title = "";
        this.newPost.date = "";
        this.newPost.content = "";
      });
    },
    removePost() {
      this.removeOldPost(this.post);
    }
  }
};
</script>

<style lang="scss">
.post-line {
  display: flex;
  & input,
  & textarea {
    width: 100%;
    padding: 5px;
  }
  & textarea {
    min-height: 100px;
    margin-bottom: 10px;
  }
  & input {
    margin: 10px 0;
  }
}
</style>
