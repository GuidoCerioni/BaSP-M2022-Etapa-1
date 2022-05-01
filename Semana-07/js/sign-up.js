window.onload = () => {
  // Select elements
  // inputs
  let inputName = document.querySelector('#name');
  let inputSurname = document.querySelector('#surname');
  let inputID = document.querySelector('#id');
  let inputPhone = document.querySelector('#phone');
  let inputDOB = document.querySelector('#dob');
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
  // modal
  const modal = document.getElementById("myModal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const list = document.getElementById('modal-list');

  // Add events listeners
  allInputs.forEach(input => {
    input.addEventListener("focus", removeError);
  });
  inputName.addEventListener("blur", validateName);
  inputSurname.addEventListener("blur", validateName);
  inputID.addEventListener("blur", validateID);
  inputPhone.addEventListener("blur", validatePhone);
  inputDOB.addEventListener("blur", validateBirth);
  inputAddress.addEventListener("blur", validateAddress);
  inputCity.addEventListener("blur", validateCity);
  inputZipcode.addEventListener("blur", validateZipcode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);
  inputRPassword.addEventListener("blur", validateRPassword);

  buttonSignUp.addEventListener("click", handleSignUp);

  // Functions
  // Modal Functions
  // shows modal with error messages or success message
  function showModal(title, data, success) {
    modalTitle.innerHTML = title;
    modalText.innerHTML = "";
    if (success !== null) {
      if (success) {
        modal.classList.add("success");
        modalText.innerHTML = data.msg;
        for (const [key, value] of Object.entries(data.data)) {
          list.innerHTML += `<li>${key}: ${value}</li>`;
        };

      } else {
        modal.classList.add("no-success");
        if (data.errors) {
          list.innerHTML = data.errors.map(error => `<li>${error.msg}</li>`).join('');
        } else if (data.msg) {
          list.innerHTML = `<li>${data.msg}</li>`;
        } else {
          list.innerHTML = `<li>Server connection error, check fetch url</li>`;
        }
      }
    }
    modal.style.display = "flex";
  }
  // close modal style changes
  function closeModal() {
    modalTitle.innerHTML = "";
    modalText.innerHTML = "";
    modal.classList.remove("success");
    modal.classList.remove("no-success");
    modal.style.display = "none";
  }

  // Modal close button event
  modalClose.onclick = function () {
    closeModal();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  }
  // -- Modal Functions

  // Sign up logic
  async function handleSignUp(e) {
    e.preventDefault();

    const url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
    // create data object same as API response
    let data = {
      errors: [{ msg: '' }, { msg: '' }],
      msg: ""
    };

    if (errors.length === 0) {
      data = await (
        fetchSignup(
          url,
          inputName.value,
          inputSurname.value,
          inputID.value,
          inputPhone.value,
          inputDOB.value,
          inputAddress.value,
          inputCity.value,
          inputZipcode.value,
          inputEmail.value,
          inputPassword.value,
          inputRPassword.value)
      );
      console.log('data', data)
      if (data.success) {
        showModal("Signed Up", data, true);
      } else {
        showModal('Error', data, false);
      }
    } else {
      errors.forEach((error, i) => { data.errors[i].msg = error; });
      showModal('Error', data, false);
    }
  }
  async function fetchSignup(url, name, surname, id, phone, dob, address, city, zipcode, email, password) {

    // create data object
    let data = {
      name: name,
      lastName: surname,
      dni: id,
      // format date 
      dob: formatDate(dob),
      phone: phone,
      address: address,
      city: city,
      zip: zipcode,
      email: email,
      password: password,
    };
    // create url params
    let queryParams = new URLSearchParams(data);

    return await fetch(`${url}${queryParams}`)
      .then(res => res.json())
      .then(json => { console.log('json', json); return json })
      .catch(err => err);
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

  function formatDate(date) {
    // formats date "aaaa-mm-dd" to "mm/dd/yyyy"
    let dateArray = date.split('-');
    return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
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






