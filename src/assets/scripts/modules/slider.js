import Vue from "vue";

const buttons = {
  template: "#slider-buttons",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getNewArray(direction) {
      let newWorks = [...this.works];

      switch (direction) {
        case "prev":
          newWorks.unshift(newWorks.pop());
          return newWorks[this.currentIndex];

        case "next":
          newWorks.push(newWorks.shift());
          return newWorks[this.currentIndex];
      }
    }
  }
};

const pictures = {
  template: "#slider-pic",
  props: {
    work: Object
  }
};

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
};

new Vue({
  el: "#slider-wrapper",
  components: {
    info,
    pictures,
    buttons
  },
  data: {
    works: [],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex() {
      this.currentWork = this.works[this.currentIndex];
      console.log(this.currentIndex + " " + this.works.length);
    }
  },
  created() {
    this.works = require("../../../works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      console.log(direction);

      if (direction == "prev") {
        if (this.currentIndex == 0) {
          this.currentIndex = this.works.length - 1;
        } else {
          this.currentIndex--;
        }
      } else if (direction == "next") {
        if (this.currentIndex == this.works.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }
    }
  },
  template: "#slider"
});
