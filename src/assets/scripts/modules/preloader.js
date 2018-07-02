const preloaderContainer = document.querySelector(".preloader"),
  preloaderAnim = document.querySelector(".preloader__icon");

console.log("sdfasf");

window.onload = () => {
  preloaderAnim.addEventListener(
    "animationiteration",
    function(e) {
      preloaderAnim.classList.remove("preloader__animation");
      addAnimFinish();
    },
    false
  );
};

function addAnimFinish() {
  setTimeout(() => {
    preloaderAnim.classList.add("preloader--done");
    preloaderContainer.style.opacity = 0;
  }, 100);
  setTimeout(() => {
    preloaderContainer.style.display = "none";
  }, 1100);
}
