const menu = document.querySelector(".nav__list");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".menu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (nav__list.classList.contains("showMenu")) {
    nav__list.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menu-icon.style.display = "block";
  } else {
    nav__list.classList.add("showMenu");
    closeIcon.style.display = "block";
    menu-icon.style.display = "none";
  }
}

menu.addEventListener("click", toggleMenu);