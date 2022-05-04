window.onload = () => {
  // Select elements
  // inputs
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');
  // inputs icons
  const inputEmailIcon = document.querySelector('#email-icon');
  const inputPasswordIcon = document.querySelector('#password-icon');
  // button
  const buttonLogin = document.querySelector('#button-login');
  // modal
  const modal = document.getElementById("myModal");
  const modalClose = document.getElementById("modal-close");

  // Add events listeners
  inputPassword.addEventListener("blur", (e) => {
    validatePassword(e.currentTarget);
  });
  inputEmail.addEventListener("blur", (e) => {
    validateEmail(e.currentTarget);
  });

  inputEmail.addEventListener("focus", removeError);
  inputPassword.addEventListener("focus", removeError);

  buttonLogin.addEventListener("click", handleLogin);


  // Modal Functions
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

  // Login logic
  async function handleLogin(e) {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    const url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
    // create data object same as API response
    let data = {
      errors: [{ msg: '' }, { msg: '' }],
      msg: ""
    };

    if (errors.length === 0) {
      data = fetchLogin(url, email, password)
        .then(data => {
          if (data.success) {
            showModal("Logged in!", data, true);
          } else {
            showModal('Error', data, false);
          }
        })
    } else {
      errors.forEach((error, i) => { data.errors[i].msg = error; });
      showModal('Error', data, false);
    }
  }

  async function fetchLogin(url, email, password) {

    let data = {
      email: email,
      password: password
    };

    let queryParams = new URLSearchParams(data);

    return await fetch(`${url}${queryParams}`)
      .then(res => res.json())
      .then(json => json)
      .catch(err => err);
  }
  // --Login logic



  // Error handle
  let errors = []; //errors array

  function removeError(e) {
    const input = e.currentTarget;
    const icon = document.querySelector(`#${input.id}-icon`);
    input.classList.remove('error');
    icon.classList.remove('error');
    // remove error from array
    for (let i = 0; i < errors.length; i++) {
      if (errors[i] == `The ${input.name} is not valid`) {
        errors.splice(i, 1);
        i--;
      }
    }
  }

  function createError(input) {
    errors.push(`The ${input.name} is not valid`);
  }
  // -- Error handle


  // Validation functions - inputs
  function validateEmail(input) {
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(input.value)) {
      return true;
    } else {

      inputEmail.classList.add('error');
      inputEmailIcon.classList.add('error');
      createError(inputEmail);
      return false;
    }
  }

  function validatePassword(input) {
    if (checkNumbersAndLetters(input.value) && input.value.length > 7) {
      return true;
    }
    else {
      inputPassword.classList.add('error');
      inputPasswordIcon.classList.add('error');
      createError(inputPassword);
      return false;
    }
  }

}
