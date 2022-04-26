window.onload = () => {
  // Select elements
  // inputs
  let inputName = document.querySelector('#name');
  let inputSurname = document.querySelector('#surname');
  let inputID = document.querySelector('#id');
  let inputPhone = document.querySelector('#phone');
  let inputBirth = document.querySelector('#birth');
  let inputAddress = document.querySelector('#address');
  let inputCity = document.querySelector('#city');
  let inputZipcode = document.querySelector('#zipcode');
  let inputEmail = document.querySelector('#email');
  let inputPassword = document.querySelector('#password');
  let inputRPassword = document.querySelector('#rPassword');
  // all inputs array
  let allInputs = document.querySelectorAll('input');

  // button
  let buttonSignUp = document.querySelector('#sign-up-button');



  // Add events listeners
  allInputs.forEach(input => {
    input.addEventListener("focus", removeError);
  });
  inputName.addEventListener("blur", validateName);
  inputSurname.addEventListener("blur", validateName);
  inputID.addEventListener("blur", validateID);
  inputPhone.addEventListener("blur", validatePhone);
  inputBirth.addEventListener("blur", validatePhone);

  // Functions

  // add/remove classes
  function removeError(e) {
    let input = e.currentTarget;
    // remove error class
    input.classList.remove('error');
    // remove error message if exist
    let errorElement = input.parentElement.querySelector(`#error-${input.name}`);
    if (errorElement) {
      errorElement.remove();
    }
  }

  // validation functions
  function createError(input) {
    // add error class
    input.classList.add('error');
    input.classList.remove('valid');
    let error = document.createElement("p");
    error.classList.add('errorMessage');
    //add id to error message for eliminatng it later
    error.setAttribute('id', `error-${input.name}`);
    error.innerHTML = `The ${input.name} is not valid`;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function validateLength3(e) {
    let input = e.currentTarget;
    if (input.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  function validateEmail(e) {
    let email = e.currentTarget.value;
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
      console.log(email);
    } else {
      console.log(email);
      inputEmail.classList.add('error');
    }
  }

  function validateLetters(e) {
    let input = e.currentTarget;
    for (let i = 0; i < input.value.length; i++) {
      if (parseFloat(input.value.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  function validateNumbers(e) {
    let input = e.currentTarget;
    for (let i = 0; i < input.value.length; i++) {
      if (!parseFloat(input.value.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  // validate inputs
  function validateName(e) {
    if (!validateLetters(e) || !validateLength3(e)) {
      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateID(e) {
    if (e.currentTarget.value.length < 7 || !validateNumbers(e)) {
      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validatePhone(e) {
    if (e.currentTarget.value.length == 10 || !validateNumbers(e)) {
      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }
}






