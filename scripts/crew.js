var burger = document.querySelector("img.burger");
var homeList = document.querySelector(".home-list");
var title = document.querySelector(".title");
var logoImg = document.querySelector(".logo");
var container = document.querySelector(".crew-container");

burger.addEventListener("click", (e) => {
  homeList.classList.toggle("on");
  burger.classList.toggle("flip");
  title.classList.toggle("blur");
  logoImg.classList.toggle("left");
  container.classList.toggle("blur");
});
