<template lang="pug">
  .skills
    h3.skills__title {{ type.name }}
    table.skills__row
      skills-item(
        v-for='skill in skills'
        v-if='skill.category == type.id'
        :key='skill.id'
        :skill='skill'
      )
      skills-item(
        :editmode="true",
        :typeId='type.id'
      )

</template>

<script>
import skillsItem from "./skillsitem";

export default {
  components: {
    skillsItem
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => ({
        id: 0,
        title: "Frontend"
      })
    }
  }
};
</script>

<style lang="scss">
.skills {
  width: 50%;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
  &__row {
    margin-bottom: 20px;
  }
  &__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  &__table {
    & td {
      padding: 15px;
    }
  }
}
</style>
