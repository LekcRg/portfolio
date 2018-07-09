<template lang="pug">
  .works
    h1 Мои работы
    worksItem(
      v-for='work in works'
      :work='work'
    )
    worksItem(:editmode="true")

</template>

<script>
import worksItem from "./workItem";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    worksItem
  },
  computed: {
    ...mapState({
      works: state => state.works.data
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["fetchWorks"])
  }
};
</script>
