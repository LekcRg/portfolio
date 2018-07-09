import Vue from "vue";
import axios from "axios";
import "./modules/nav";
import "./modules/preloader";

axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

const blogNav = new Vue({
  el: "#blog-navigation",
  data: {
    posts: []
  },
  created() {
    axios.get("/posts/23").then(response => {
      this.posts = response.data;
    });
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
    }
  },
  template: "#blog-nav"
});

new Vue({
  el: "#blog-post",
  data: {
    posts: []
  },
  created() {
    axios.get("/posts/23").then(response => {
      this.posts = response.data;
    });
  },
  template: "#post"
});

// const aside = document.querySelector(".blog__aside");
// const sticky = document.querySelector(".blog__aside-sticky");
// const firstPost = document.querySelector(".blog-post");
// const lengthPost = document.querySelectorAll(".blog-post").length;
// const navBtn = document.querySelector(".blog__nav");
// let postId = 1;
// let currentPost = firstPost;
// let firstPostPos = firstPost.getBoundingClientRect().top;
// let prevFirstPostPos = firstPostPos;
// let currentPostPosBottom = currentPost.getBoundingClientRect().bottom;
// let currentPostPosTop = currentPost.getBoundingClientRect().top;
// let prevPostPos = firstPostPos;
// const navLinks = document.querySelectorAll(".blog-nav__link");
// let activeNavItem = document.querySelector(".blog-nav__link--active");

// navBtn.addEventListener("click", ev => {
//   ev.target.parentNode.classList.toggle("blog__aside--active");
// });

// navLinks.forEach(link => {
//   link.addEventListener("click", ev => {
//     ev.preventDefault();
//     const linkToPost = document.querySelector(ev.target.getAttribute("href"));
//     firstPostPos = firstPost.getBoundingClientRect().top;
//     currentPostPosBottom = currentPost.getBoundingClientRect().bottom;
//     currentPostPosTop = currentPost.getBoundingClientRect().top;

//     console.log(linkToPost.offsetTop);

//     scrollTo(0, linkToPost.offsetTop);
//   });
// });

// window.addEventListener("scroll", function(ev) {
//   const stickyIsFixed = sticky.classList.contains("blog__aside--fixed");
//   const asidePos = aside.getBoundingClientRect().top;
//   let varIsDown = isDown();

//   firstPostPos = firstPost.getBoundingClientRect().top;
//   currentPostPosBottom = currentPost.getBoundingClientRect().bottom;
//   currentPostPosTop = currentPost.getBoundingClientRect().top;

//   if (asidePos < 10 && !stickyIsFixed) {
//     sticky.classList.add("blog__aside--fixed");
//   } else if (asidePos > 10 && stickyIsFixed) {
//     sticky.classList.remove("blog__aside--fixed");
//   }

//   console.log(varIsDown);

//   if (varIsDown && currentPostPosBottom < 0 && postId <= lengthPost) {
//     console.log(currentPostPosBottom);
//     currentPost = currentPost.nextSibling;
//     findNavItem(currentPost.id);
//     postId++;
//   } else if (
//     !varIsDown &&
//     varIsDown != undefined &&
//     currentPostPosTop > 0 &&
//     postId > 1
//   ) {
//     console.log(currentPostPosTop);
//     currentPost = currentPost.previousSibling;
//     findNavItem(currentPost.id);
//     postId--;
//   }
// });

// const isDown = () => {
//   if (prevFirstPostPos < firstPostPos) {
//     prevFirstPostPos = firstPostPos;
//     return false;
//   } else if (prevFirstPostPos > firstPostPos) {
//     prevFirstPostPos = firstPostPos;
//     return true;
//   }
// };

// const findNavItem = id => {
//   const navItem = document.querySelector(`a[href="#${id}"]`);
//   activeNavItem.classList.remove("blog-nav__link--active");
//   navItem.classList.add("blog-nav__link--active");
//   activeNavItem = navItem;
// };
