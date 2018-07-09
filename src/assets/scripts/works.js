import Vue from "vue";
import "./modules/nav";
import "./modules/slider";
import "./modules/preloader";
import { blur } from "./modules/blur";
import axios from "axios";

const worksValidate = new Vue({
  el: ".works-form",
  data: {
    form: {
      name: "",
      mail: "",
      message: ""
    },
    response: ""
  },
  methods: {
    validateWorksForm() {
      const link = "http://loftschool.ozpkmsimply.tmweb.ru/feedback.php";

      axios.post(link, this.form).then(response => {
        console.log(response.data);
        this.response = response.data;
      });
    },
    addErrorClass: e => {
      e.target.classList.add("works__form--error");
      e.target.nextSibling.classList.add("input__error--active");
      e.target.nextSibling.classList.add("input__error--active");
    },
    removeErrorClass: e => {
      e.target.classList.remove("works__form--error");
      setTimeout(() => {
        e.target.nextSibling.classList.remove("input__error--active");
      }, 1000);
    }
  }
});

// Blur
console.log("sdfasf");

blur.set();

window.onresize = () => {
  blur.set();
  console.log("sadf");
};
