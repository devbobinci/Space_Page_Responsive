var burger = document.querySelector("img.burger");
var logo = document.querySelector("img.logo");
var homeList = document.querySelector(".home-list");
var h2 = document.querySelector(".text-h2");
var h1 = document.querySelector(".big-text");
var p = document.querySelector(".text-p");
var explore = document.querySelector(".explore");

burger.addEventListener("click", () => {
  burger.classList.toggle("flip");
  logo.classList.toggle("flip");
  homeList.classList.toggle("on");
  logo.classList.toggle("blur");
  h1.classList.toggle("right");
  h2.classList.toggle("right");
  p.classList.toggle("left");
  explore.classList.toggle("left");
});
