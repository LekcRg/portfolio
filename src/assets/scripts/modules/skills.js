import Vue from "vue";
// import axios from "axios";

// axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

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
    skills: Array,
    type: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: [],
    types: [
      { id: 0, title: "Frontend" },
      // { id: 1, title: "Backend" },
      { id: 1, title: "Workflow" }
    ]
  },
  created() {
    // axios.get("/skills/23").then(response => {
    //   this.skills = response.data;
    //   console.log(response.data);
    // });
    this.skills = require("../../../skills.json");
    console.log(this.skills);
  },
  mounted() {
    console.log(this.skills);
  },
  template: "#skills-list"
});
