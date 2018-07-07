const hamburgerBtn = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#fs-navigation");

hamburgerBtn.addEventListener("click", function(ev) {
  ev.preventDefault;

  hamburgerMenu.classList.toggle("is-active");
  this.classList.toggle("is-active");
});
