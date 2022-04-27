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
  inputBirth.addEventListener("blur", validateBirth);
  inputAddress.addEventListener("blur", validateAddress);
  inputCity.addEventListener("blur", validateCity);
  inputZipcode.addEventListener("blur", validateZipcode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);
  inputRPassword.addEventListener("blur", validateRPassword);

  buttonSignUp.addEventListener("click", handleSignUp);

  // Functions
  function handleSignUp(e) {
    e.preventDefault();
    if (errors.length == 0) {
      alert('name: ' + inputName.value + '\n' + 'surname: ' + inputSurname.value + '\n' + 'id: ' + inputID.value + '\n' + 'phone: ' + inputPhone.value + '\n' + 'birth: ' + inputBirth.value + '\n' + 'address: ' + inputAddress.value + '\n' + 'city: ' + inputCity.value + '\n' + 'zipcode: ' + inputZipcode.value + '\n' + 'email: ' + inputEmail.value + '\n' + 'password: ' + inputPassword.value + '\n' + 'rPassword: ' + inputRPassword.value);
    } else {
      alert('Errors: ' + errors);
    }
  }

  function removeError(e) {
    let input = e.currentTarget;
    // remove error class
    input.classList.remove('error');
    input.parentNode.classList.remove('error');

    // remove error message if exist
    let errorElement = input.parentElement.querySelector(`#error-${input.name}`);
    if (errorElement) {
      errorElement.remove();
    }
    // remove error from array
    for (let i = 0; i < errors.length; i++) {
      if (errors[i] == `The ${input.name} is not valid`) {
        errors.splice(i, 1);
        i--;
      }
    }
  }

  // dinamic error message creation
  let errors = [];//errors array

  function createError(input) {
    console.log('errors', errors)
    // add error class
    input.classList.add('error');
    input.classList.remove('valid');
    let error = document.createElement("p");
    error.classList.add('errorMessage');
    //add id to error message for eliminatng it later
    error.setAttribute('id', `error-${input.name}`);
    error.innerHTML = `The ${input.name} is not valid`;
    input.parentNode.insertBefore(error, input.nextSibling);
    input.parentNode.classList.add('error');
    // add error to array
    errors.push(`The ${input.name} is not valid`);
  }

  function createRPasswordError(input) {
    // add error class
    input.classList.add('error');
    input.classList.remove('valid');
    let error = document.createElement("p");
    error.classList.add('errorMessage');
    //add id to error message for eliminatng it later
    error.setAttribute('id', `error-${input.name}`);
    error.innerHTML = `The passwords dont match`;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  // validation functions
  function validateLength3(e) {
    let input = e.currentTarget;
    if (input.value.length < 3) {
      return false;
    } else {
      return true;
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
      if (!parseFloat(input.value.charAt(i)) && parseFloat(input.value.charAt(i)) !== 0) {
        return false;
      }
    }
    return true;
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

  function isAlphaNumeric(str) {
    // copiada de internet xd

    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  // validate inputs
  function validateName(e) {

    if (!validateLetters(e) ||
      !validateLength3(e)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateID(e) {

    if (e.currentTarget.value.length < 7 ||
      !validateNumbers(e)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validatePhone(e) {

    if (!(e.currentTarget.value.length == 10) ||
      !validateNumbers(e)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateBirth(e) {

    if (e.currentTarget.valueAsNumber > (new Date().getTime())) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateAddress(e) {

    let input = e.currentTarget;
    let hasSpace = false;

    for (let i = 0; i < input.value.length; i++) {

      // validate if there is a space and not first or last character
      if (i != 0 && i != input.value.length && input.value.charAt(i) == " ") {

        hasSpace = true;
      }
    }

    if (input.value.length < 5 ||
      !hasSpace ||
      !checkNumbersAndLetters(input.value)) {

      createError(input);
    }
    else {
      input.classList.add('valid');
    }
  }

  function validateCity(e) {

    if (e.currentTarget.value.length < 3 ||
      !isAlphaNumeric(e.currentTarget.value)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateZipcode(e) {
    if (e.currentTarget.value.length < 4 ||
      e.currentTarget.value.length > 5 ||
      !validateNumbers(e)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateEmail(e) {
    let email = e.currentTarget.value;
    if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email))) {

      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validatePassword(e) {
    if (e.currentTarget.value.length < 8 ||
      !checkNumbersAndLetters(e.currentTarget.value)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

  function validateRPassword(e) {
    if (inputPassword.value != e.currentTarget.value) {

      createRPasswordError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }

}






