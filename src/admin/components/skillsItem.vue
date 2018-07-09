<template lang="pug">
  tr(v-if='editmode === false')
    td {{skill.title}}
    td
      span {{skill.percents}}%
    td
      button(@click='removeSkill') Delete

  tr(v-else)
    td 
      input(type='text' placeholder='Название' v-model='newSkill.title')
    td
      input(type='text' placeholder='Проценты' v-model='newSkill.percents')
    td
      button(@click='addSkill') Add
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    },
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill", "removeOldSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(e => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    },
    removeSkill() {
      this.removeOldSkill(this.skill);
    }
  }
};
</script>
