<template lang="pug">
  .post__preview(v-if='editmode === false')
    h3.post__title {{post.title}}
    span.post__date {{post.created_at}}
    p.post__text {{post.content}}
    button.button(@click='removePost') Удалить

  .post__add(v-else)
    .post-line
      input.post__input(type='text' placeholder='Название' v-model='newPost.title')
    .post-line
      input.post__input(type='text' placeholder='Дата' v-model='newPost.date')
    .post-line
      textarea.post__textarea(placeholder='Содержание' v-model='newPost.content')
    .post-line
    button.button(@click='addPost') Добавить
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
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 30px;
  }
}
.post {
  &__input {
    width: 300px;
  }
  &__textarea {
    width: 500px;
    min-height: 160px;
    resize: vertical;
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
  &__text {
    white-space: pre-wrap;
    margin-top: 20px;
    margin-bottom: 25px;
  }
  &__preview {
    margin-top: 30px;
    border: 1px solid #9f9f9f;
    padding: 5px;
    border-radius: 5px;
    &:first-child {
      margin-top: 45px;
    }
  }
  &__title {
    margin-bottom: 8px;
  }
  &__date {
    font-size: 12px;
    color: #999;
  }
}
</style>
