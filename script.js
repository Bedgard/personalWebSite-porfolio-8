const open = document.querySelector('[name="menu-outline"]');
const close = document.querySelector('[name="close-outline"]');
const navList = document.querySelector(".main-nav-list");

open.addEventListener("click", () => {
  close.style.display = "block";
  open.style.display = "none";
  navList.style.display = "flex";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  navList.style.display = "none";
});

const btnScrolling = document.querySelector(".btn-scrolling");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnScrolling.style.opacity = 1;
  } else {
    btnScrolling.style.opacity = 0;
  }
});
