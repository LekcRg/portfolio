<template lang="pug">
  .skills-container
    button(@click='refresh') refreshToken
    h1 Страница обо мне
    skills-row(
      v-for='type in types'
      :key='type.name'
      :type='type'
      :skills='skills'
    )
</template>

<script>
import skillsRow from "./skillsrow";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "WorkFlow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills", "refreshToken"]),
    refresh() {
      this.refreshToken();
    }
  }
};
</script>


<style lang="scss">
</style>
