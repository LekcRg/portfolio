<template lang="pug">
  tr(v-if='editmode === false')
    td 
      img(:src='"http://webdev-api.loftschool.com/" + work.photo' alt='workd-img').works__img
    td
      h3 {{work.title}}
    td
      span {{work.techs}}
    td
      button(@click='removeWork') Delete

  .works(v-else)
    input(type='text' placeholder='Title' v-model='newWork.title')
    input(type='text' placeholder='Techs' v-model='newWork.techs')
    input(type='text' placeholder='Link' v-model='newWork.link')
    input(type='file' @change='addPhoto')
    button(@click='addWork') Add
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    work: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newWork: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewWork", "removeOldWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;
      this.newWork.photo = files[0];
    },
    addWork() {
      const formData = new FormData();

      Object.keys(this.newWork).forEach(prop => {
        formData.append(prop, this.newWork[prop]);
      });

      this.addNewWork(formData).then(e => {
        this.newWork.title = "";
        this.newWork.techs = "";
        this.newWork.link = "";
        this.newWork.photo = "";
      });
    },
    removeWork() {
      this.removeOldWork(this.work);
    }
  }
};
</script>

<style lang="scss">
.works__img {
  max-height: 200px;
}
</style>
