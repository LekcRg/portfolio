const preloaderContainer = document.querySelector(".preloader"),
  preloaderAnim = document.querySelector(".preloader__icon");

window.onload = function() {
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
    document.body.style.overflow = "unset";
    preloaderContainer.style.display = "none";
  }, 1100);
}
