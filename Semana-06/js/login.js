window.onload = () => {
  // Select elements
  // inputs
  let inputEmail = document.querySelector('#email');
  let inputPassword = document.querySelector('#password');
  let inputRememberMe = document.querySelector('#remember-me');
  // inputs icons
  let inputEmailIcon = document.querySelector('#email-icon');
  let inputPasswordIcon = document.querySelector('#password-icon');
  // button
  let buttonLogin = document.querySelector('#button-login');


  // Add events listeners
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);
  inputEmail.addEventListener("focus", removeEmailError);
  inputPassword.addEventListener("focus", removePasswordError);
  buttonLogin.addEventListener("click", handleLogin);


  // Functions
  function handleLogin(e) {
    e.preventDefault();
    let email = inputEmail.value;
    let password = inputPassword.value;
    alert('email: ' + email + '\n' + 'password: ' + password);
  }

  function checkNumbersAndLetters(str) {
    let hasNumber = false;
    let hasLetter = false;
    for (let i = 0; i < str.length; i++) {
      if (parseFloat(str.charAt(i))) {
        hasNumber = true;
      }
      if (!parseFloat(str.charAt(i)) && str.charAt(i) != " ") {
        hasLetter = true;
      }
    }
    if (hasNumber && hasLetter) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(e) {
    let email = e.currentTarget.value;
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
      console.log(email);
    } else {
      console.log(email);
      inputEmail.classList.add('error');
      inputEmailIcon.classList.add('error');
    }
  }

  function validatePassword(e) {
    let password = e.currentTarget.value;
    if (checkNumbersAndLetters(password) && password.length > 5) {
      console.log(password);
    }
    else {
      inputPassword.classList.add('error');
      inputPasswordIcon.classList.add('error');
    }
  }

  function removeEmailError(e) {
    inputEmail.classList.remove('error');
    inputEmailIcon.classList.remove('error');
  }

  function removePasswordError(e) {
    inputPassword.classList.remove('error');
    inputPasswordIcon.classList.remove('error');
  }
}