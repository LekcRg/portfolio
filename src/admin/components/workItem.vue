<template lang="pug">
.works__preview(v-if='editmode === false')
  img(:src='"http://webdev-api.loftschool.com/" + work.photo' alt='workd-img').works__img
  .works__info
    h3.works__title {{work.title}}
    span.works__techs {{work.techs}}
    button.button(@click='removeWork') Удалить

.works__add(v-else)
  span.works__text Добавить работу
  input.works__input(type='text' placeholder='Название' v-model='newWork.title')
  input.works__input(type='text' placeholder='Технологии' v-model='newWork.techs')
  input.works__input(type='text' placeholder='Ссылка на проект' v-model='newWork.link')
  input(type='file' @change='addPhoto')
  button(@click='addWork').button Добавить
</template>

<style lang="scss">
.works {
  &__add {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }
  &__img {
    max-height: 200px;
  }
  &__input {
    margin-top: 30px;
    width: 300px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__preview {
    display: flex;
    margin-top: 40px;
    width: 50%;
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
  }
  &__title,
  &__techs {
    margin-bottom: 15px;
  }
}
</style>

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
