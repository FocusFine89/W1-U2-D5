const header = document.querySelector("header");
const btnNav = document.getElementById("get-started");

window.addEventListener("scroll", function () {
  if (window.scrollY > 285) {
    header.classList.add("bianco");
    btnNav.classList.add("verde");
  } else {
    header.classList.remove("bianco");
    btnNav.classList.remove("verde");
  }
});
