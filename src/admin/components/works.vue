<template lang="pug">
  .works-wrapper
    h1.tab__title Мои работы
    .works
      worksItem(:editmode="true")
      worksItem(
        v-for='work in works'
        :work='work'
      )

</template>

<style lang="scss">
.works {
  display: flex;
  flex-wrap: wrap;
}
</style>


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
