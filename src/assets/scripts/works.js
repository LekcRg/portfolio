import Vue from "vue";
import "./modules/nav";
import "./modules/slider";
import "./modules/preloader";
import { blur } from "./modules/blur";

const worksValidate = new Vue({
  el: ".works-form",
  data: {
    name: null,
    mail: null,
    message: null
  },
  methods: {
    validateWorksForm: e => {
      console.log("form work");
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
