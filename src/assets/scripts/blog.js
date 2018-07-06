import "./modules/nav";
import "./modules/preloader";

const aside = document.querySelector(".blog__aside");
const sticky = document.querySelector(".blog__aside-sticky");
const postLength = document.querySelectorAll(".blog-post").length;
const navLinks = document.querySelectorAll(".blog-nav__link");
let activeNavItem = document.querySelector(".blog-nav__link--active");
let currentPost = document.querySelector(".blog-post");
let postNumber = 0;
let prevPostPos = currentPost.getBoundingClientRect();
let prevPostPosBottom = prevPostPos.bottom;
let prevPostPosTop = prevPostPos.bottom;

window.addEventListener("scroll", function(ev) {
  const stickyIsFixed = sticky.classList.contains("blog__aside--fixed");
  const asidePos = aside.getBoundingClientRect().top;

  if (asidePos < 10 && !stickyIsFixed) {
    sticky.classList.add("blog__aside--fixed");
  } else if (asidePos > 10 && stickyIsFixed) {
    sticky.classList.remove("blog__aside--fixed");
  }

  getPost(currentPost);
});

navLinks.forEach(link => {
  link.addEventListener("click", ev => {
    ev.preventDefault();
    let linkToPost = document.querySelector(ev.target.getAttribute("href"));

    console.log(linkToPost.scrollTop);
  });
});

function getPost(post) {
  let currentPostPos = post.getBoundingClientRect();
  let currentPostPosBottom = currentPostPos.bottom - 100;
  let currentPostPosTop = currentPostPos.top - 100;

  if (currentPostPosBottom < prevPostPosBottom && currentPostPosBottom < 0) {
    console.log("!!!ВНИЗ!!!");
    postNumber++;
    currentPost = currentPost.nextSibling;
    prevPostPosBottom = currentPostPosBottom;
    findNavItem(currentPost.id);
  } else if (
    currentPostPosBottom > prevPostPosBottom &&
    currentPostPosTop > 0 &&
    postNumber > 0
  ) {
    console.log("!!!ВВЕРХ!!!");
    postNumber--;
    prevPostPosTop = currentPostPosTop;
    currentPost = currentPost.previousSibling;
    findNavItem(currentPost.id);
  }
}

function findNavItem(id) {
  const navItem = document.querySelector(`a[href="#${id}"]`);
  activeNavItem.classList.remove("blog-nav__link--active");
  navItem.classList.add("blog-nav__link--active");
  activeNavItem = navItem;
}
