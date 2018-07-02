import Vue from "vue";
import "./modules/nav";
import "./modules/slider";
import "./modules/preloader";

const worksValidate = new Vue({
  el: ".works-form",
  data: {
    errors: [],
    name: null,
    mail: null,
    message: null
  },
  methods: {
    validateWorksForm: e => {
      console.log("fsdfasdf");
    },
    addErrorClass: e => {
      e.target.classList.add("works__form--error");
      e.target.nextSibling.style.display = "block";
      e.target.style.marginBottom = "65px";
      setTimeout(() => {
        e.target.nextSibling.style.opacity = 1;
      }, 1);
    },
    removeErrorClass: e => {
      e.target.classList.remove("works__form--error");
      setTimeout(() => {
        e.target.nextSibling.style.opacity = 0;
        setTimeout(() => {
          e.target.nextSibling.style.display = "none";
        }, 400);
        e.target.style.marginBottom = "20px";
      }, 1000);
    }
  }
});
