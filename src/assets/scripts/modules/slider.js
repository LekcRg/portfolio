import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

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
  },
  methods: {
    callback(eventName) {
      console.log(eventName);
    },
    enterHandler(el, done) {
      const elText = el.innerText;
      const letters = elText
        .trim()
        .split("")
        .map(letter => {
          return `<span>${letter}</span>`;
        })
        .join("");

      el.innerHTML = letters;
      const animatingLetters = Array.from(el.children);
      let i = 0;

      const animate = array => {
        const currentLetter = array[i];

        let timer = setTimeout(() => {
          animate(animatingLetters);
        }, 20);

        currentLetter.classList.add("jackInTheBox");

        i++;

        if (i >= array.length) {
          clearTimeout(timer);
          done();
        }
      };

      animate(animatingLetters);
    }
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
    axios.get("/works/23").then(response => {
      this.works = response.data;
      this.currentWork = this.works[0];
    });
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
