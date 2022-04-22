// Select elements
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let inputRememberMe = document.querySelector('#remember-me');

// Add events listeners
inputEmail.addEventListener("blur", validateEmail(inputEmail.value));
inputPassword.addEventListener("blur", validatePassword(inputPassword.value));

// Functions
function validateEmail(email) {
  if (email) {
    console.log("email")
  }
  else {
    console.log("no email")
  }
}
function validatePassword(email) {
  if (email) {
    console.log("password")
  }
  else {
    console.log("no password")
  }
}