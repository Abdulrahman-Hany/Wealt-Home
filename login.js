let forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link"),
  formloginSuindup = document.querySelector(".form"),
  forgot = document.querySelector(".forgot-pass"),
  bxleftarrowalt = document.querySelector(".bx-left-arrow-alt"),
  fromForgot = document.querySelector(".form-Forgot"),
  pwFields = document.querySelectorAll(".password");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((password) => {
      password.type === "password"
        ? ((password.type = "text"),
          eyeIcon.classList.replace("bx-hide", "bx-show"))
        : ((password.type = "password"),
          eyeIcon.classList.replace("bx-show", "bx-hide"));
    });
  });
});
forgot.addEventListener("click", (e) => {
  e.preventDefault(); //preventing form submit
  formloginSuindup.classList.toggle("active");
  fromForgot.classList.toggle("active");
});

bxleftarrowalt.addEventListener("click", () => {
  formloginSuindup.classList.remove("active");
  fromForgot.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});

/* Spinner Loading */
let feadeOut= () => {
  let loaderWrapper= document.querySelector(".spinner-contuner");
  loaderWrapper.classList.add("hidden");
}
window.addEventListener('load', feadeOut);
