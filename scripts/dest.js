var burger = document.querySelector("img.burger");
var homeList = document.querySelector(".home-list");
var selectPlanet = document.querySelector(".select-planet");
var title = document.querySelector(".title");
var planetCon = document.querySelector(".planet-container");
var logoImg = document.querySelector(".logo");
var planetText = document.querySelector(".planet-text");

burger.addEventListener("click", () => {
  homeList.classList.toggle("on");
  burger.classList.toggle("flip");
  selectPlanet.classList.toggle("left");
  title.classList.toggle("right");
  planetCon.classList.toggle("blur");
  logoImg.classList.toggle("left");
  planetText.classList.toggle("blur");
});
