import Vue from "vue";
// import axios from "axios";
import "./modules/nav";
import "./modules/preloader";

// axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

const blogNav = {
  template: "#blog-navigation",
  props: {
    posts: Array,
    currentPost: Object
  },
  created() {
    window.addEventListener("scroll", this.fixMenu);
  },
  methods: {
    openMenu() {
      this.$el.classList.toggle("blog__aside--active");
    },
    fixMenu() {
      const elPos = this.$el.getBoundingClientRect().top,
        elChild = this.$el.querySelector(".blog__aside-sticky");

      if (elPos <= 0) {
        elChild.classList.add("blog__aside--fixed");
      } else {
        elChild.classList.remove("blog__aside--fixed");
      }
    },
    scrollNav(e) {
      let post = document.querySelectorAll(`#${e.target.id}`)[1];
      post.scrollIntoView();
      // let navItem = document.querySelectorAll(`#${e.target.id}`)[0];
      // let activeItem = document.querySelector(".blog-nav__link--active");

      // activeItem.classList.remove("blog-nav__link--active");
      // navItem.classList.add("blog-nav__link--active");
    }
  }
};

const blogPosts = {
  template: "#blog-post",
  components: {
    blogNav
  },
  props: {
    posts: Array
  }
};

new Vue({
  el: "#blogx",
  components: {
    blogNav,
    blogPosts
  },
  data: {
    posts: [],
    currentPost: {}
  },
  created() {
    // axios.get("/posts/23").then(response => {
    //   this.posts = response.data;
    //   this.currentPost = response.data[0];
    // });
    this.posts = require("../../blog.json");
    this.currentPost = this.posts[0];
    window.addEventListener("scroll", this.superNav);
  },
  methods: {
    superNav() {
      const renderedPosts = document.querySelectorAll(".blog-post");
      let activeItem = document.querySelector(".blog-nav__link--active");
      let visiblePost = document.querySelectorAll(".post-visible");

      if (visiblePost[0]) {
        let navItem = document.querySelector(`#${visiblePost[0].id}`);
        if (navItem) {
          activeItem.classList.remove("blog-nav__link--active");
          navItem.classList.add("blog-nav__link--active");
        }
      } else {
        activeItem.classList.add("blog-nav__link--active");
      }

      renderedPosts.forEach(target => {
        let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
          },
          windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          };

        if (
          targetPosition.bottom > windowPosition.top &&
          targetPosition.top < windowPosition.bottom
        ) {
          let navItem = document.querySelector(`#${target.id}`);
          target.classList.add("post-visible");
        } else {
          if (target.classList.contains("post-visible")) {
            target.classList.remove("post-visible");
          }
        }
      });
    }
  },
  template: "#blog"
});
