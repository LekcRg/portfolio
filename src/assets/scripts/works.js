import Vue from "vue";
import "./modules/nav";
import "./modules/slider";
import "./modules/preloader";

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
      // e.target.nextSibling.style.display = "block";
      setTimeout(() => {
        e.target.nextSibling.classList.add("input__error--active");
      }, 1);
    },
    removeErrorClass: e => {
      e.target.classList.remove("works__form--error");
      setTimeout(() => {
        e.target.nextSibling.classList.remove("input__error--active");
        setTimeout(() => {
          // e.target.nextSibling.style.display = "none";
        }, 400);
      }, 1000);
    }
  }
});
