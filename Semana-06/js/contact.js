window.onload = () => {
  // inputs
  let inputName = document.querySelector('#name');
  let inputEmail = document.querySelector('#email');
  let inputArea = document.querySelector('#area');
  let inputText = document.querySelector('#text');
  // button
  let buttonSend = document.querySelector('#btnSend');


  // Add events listeners
  inputName.addEventListener("blur", validateName);
  inputName.addEventListener("focus", removeError);

  inputEmail.addEventListener("blur", validateEmail);
  inputEmail.addEventListener("focus", removeError);

  inputArea.addEventListener("focus", (e) => { });
  inputArea.addEventListener("blur", removeError);

  inputText.addEventListener("focus", validateText);
  inputText.addEventListener("blur", removeError);

  buttonSend.addEventListener("click", handleSend);
  function handleSend(e) {
    if (errors.length == 0) {
      alert('name: ' + inputName.value + '\n' +
        'email: ' + inputEmail.value + '\n' +
        'area: ' + inputArea.value + '\n' +
        'text: ' + inputText.value + '\n');
    } else {
      alert('Errors: ' + errors);
    }
  }

  let errors = [];//errors array

  function createError(input) {
    console.log('errors', errors);
    // add error class
    input.classList.add('error');
    input.classList.remove('valid');
    let error = document.createElement("p");
    error.classList.add('errorMessage');
    //add id to error message for eliminatng it later
    error.setAttribute('id', `error-${input.name}`);
    error.innerHTML = `The ${input.name} is not valid`;
    input.parentNode.insertBefore(error, input.nextSibling);
    // add error to array
    errors.push(`The ${input.name} is not valid`);
  }

  function removeError(e) {
    let input = e.currentTarget;
    // remove error class
    input.classList.remove('error');
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
  // validation functions
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

  //  validate inputs
  function validateName(e) {

    if (!validateLetters(e) ||
      !validateLength3(e)) {

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

  function validateText(e) {

    if (e.currentTarget.value.length < 3 ||
      !isAlphaNumeric(e.currentTarget.value)) {

      createError(e.currentTarget);
    }
    else {
      e.currentTarget.classList.add('valid');
    }
  }
}