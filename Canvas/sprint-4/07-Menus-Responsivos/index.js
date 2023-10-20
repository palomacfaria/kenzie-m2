const menuButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__list");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("show");
  if (menuButton.innerText === "Menu") {
    menuButton.innerText = "X";
  } else {
    menuButton.innerText = "Menu";
  }
});