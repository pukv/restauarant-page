import loadHomePage from "./modules/home";
import { loadContactPage } from "./modules/contact";
import { loadMenuPage } from "./modules/menu";
import "./styles.css";

function initPage() {
  loadHomePage();

  const content = document.querySelector("#content");
  const homeBtn = document.querySelector(".home-btn");
  const contactBtn = document.querySelector(".contact-btn");
  const menuBtn = document.querySelector(".menu-btn");

  homeBtn.addEventListener("click", loadHomePage);
  menuBtn.addEventListener("click", loadMenuPage);
  contactBtn.addEventListener("click", loadContactPage);
}

document.addEventListener("DOMContentLoaded", initPage);
