import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      let varIsVisible = this.isVisible(circle);
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );

      if (varIsVisible && dashOffset >= 251) {
        const persents = (dashOffset / 100) * (100 - this.skillPercents);
        circle.style.strokeDashoffset = persents;
      }
    },
    isVisible(item) {
      var itemPosition = {
          top: window.pageYOffset + item.getBoundingClientRect().top,
          bottom: window.pageYOffset + item.getBoundingClientRect().bottom
        },
        windowPosition = {
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        };

      if (
        itemPosition.bottom > windowPosition.top &&
        itemPosition.top < windowPosition.bottom
      ) {
        return true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", ev => {
      this.drawCircle();
    });
  }
};

const skillsRow = {
  template: "#skill-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
