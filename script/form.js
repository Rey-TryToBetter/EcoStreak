const containerForm = document.querySelector(".container-login");
const registerBtn = document.querySelector(".btn-register-now");
const loginBtn = document.querySelector(".btn-login-now");
// const registerPage = document.querySelector(".sign-up-link");

registerBtn.addEventListener("click", () => {
    containerForm.classList.add("active");
  });
loginBtn.addEventListener("click", () => {
  containerForm.classList.remove("active");
});
