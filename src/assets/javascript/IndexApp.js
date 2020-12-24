// Navbar
const BtnToggle = document.querySelector(".btn");
let menuOpen = false;
const sidebar = document.querySelector(".sidebar");
const activeItem = document.querySelector("nav ul li");
const featBtn = document.querySelector(".feat-btn");
const featBtnShow = document.querySelector("nav ul .feat-show");
const firstItem = document.querySelector("nav ul .first");
const servBtn = document.querySelector(".serv-btn");
const servBtnShow = document.querySelector("nav ul .serv-show");
const secondItem = document.querySelector("nav ul .second");
const sidebarBtn = document.querySelectorAll(".sidebarButton")
for (let i = 0; i < sidebarBtn.length; i++) {
  sidebarBtn[i].addEventListener("click", () => {
    BtnToggle.classList.remove("click");
    sidebar.classList.remove("show");
    BtnToggle.classList.remove("open");
    menuOpen = false;
  });
}
BtnToggle.addEventListener("click", () => {
  if (!menuOpen) {
    BtnToggle.classList.add("open");
    menuOpen = true;
  } else {
    BtnToggle.classList.remove("open");
    menuOpen = false;
  }
  sidebar.classList.toggle("show");
  BtnToggle.classList.toggle("click");
});
featBtn.addEventListener("click", () => {
  featBtnShow.classList.toggle("show");
  firstItem.classList.toggle("rotate");
});
servBtn.addEventListener("click", () => {
  servBtnShow.classList.toggle("show");
  secondItem.classList.toggle("rotate");
});
activeItem.addEventListener("click", () => {
  activeItem.classList.toggle("active");
});


