<template lang="pug">
  tr(v-if='editmode === false')
    td.td-title {{skill.title}}
    td.td-percent.percent-padding
      span {{skill.percents}}%
    td
      button(@click='removeSkill').button.button-skills Удалить

  tr(v-else)
    td.td-title
      input(type='text' placeholder='Название' v-model='newSkill.title')
    td.percent-padding
      input.input__percent(type='text' placeholder='%' v-model='newSkill.percents' maxlength="3")
    td
      button(@click='addSkill').button.button-skills Добавить
</template>

<style lang="scss">
.input__percent {
  width: 68px;
  text-align: center;
}
.td-percent {
  text-align: center;
}
.button-skills {
  width: 90px;
  margin-left: 10px;
}
.percent-padding {
  padding-left: 10px;
}
.td-title {
  padding-left: 20px;
}
</style>


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
