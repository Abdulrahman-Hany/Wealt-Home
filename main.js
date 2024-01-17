/* Spinner Loading */
let feadeOut= () => {
  let loaderWrapper= document.querySelector(".spinner-contuner");
  loaderWrapper.classList.add("hidden");
}
window.addEventListener('load', feadeOut);

let navbar = document.querySelector("[data-navbar]");
let navbarToggler = document.querySelector("[data-nav-toggler]");
navbarToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

let header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// add to favortion button toggle

let toggleBtn = document.querySelectorAll("[data-toggle-btn]");
toggleBtn.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
  });
});

let span = document.querySelector(".scroll-up");
window.onscroll = function () {

  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};