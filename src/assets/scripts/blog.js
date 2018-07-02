import "./modules/nav";
import "./modules/preloader";

const aside = document.querySelector(".blog__aside");
const sticky = document.querySelector(".blog__aside-sticky");

window.addEventListener("scroll", function(ev) {
  let asidePos = aside.getBoundingClientRect().top;
  console.log(asidePos);
  if (asidePos < 10 && !sticky.classList.contains("blog__aside--fixed")) {
    sticky.classList.add("blog__aside--fixed");
  } else if (asidePos > 10 && sticky.classList.contains("blog__aside--fixed")) {
    sticky.classList.remove("blog__aside--fixed");
  }
});
