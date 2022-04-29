window.onload = () => {
  // Select elements
  // inputs
  let inputEmail = document.querySelector('#email');
  let inputPassword = document.querySelector('#password');
  // inputs icons
  let inputEmailIcon = document.querySelector('#email-icon');
  let inputPasswordIcon = document.querySelector('#password-icon');
  // button
  let buttonLogin = document.querySelector('#button-login');
  // modal
  let modal = document.getElementById("myModal");
  let closeModal = document.getElementsByClassName("close-modal")[0];




  // Add events listeners
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);

  inputEmail.addEventListener("focus", removeError);
  inputPassword.addEventListener("focus", removeError);

  buttonLogin.addEventListener("click", handleLogin);


  // Functions

  // modal
  closeModal.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    let email = inputEmail.value;
    let password = inputPassword.value;
    fetchLogin(email, password);
    modal.style.display = "inline-block";
    //alert('email: ' + email + '\n' + 'password: ' + password);
  }

  async function fetchLogin(email, password) {
    let url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';

    let data = {
      email: email,
      password: password
    };

    let queryParams = new URLSearchParams(data);

    console.log('first' + `${url}${queryParams}`);

    fetch(`${url}${queryParams}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }



  function removeError(e) {
    let input = e.currentTarget;
    let icon = document.querySelector(`#${input.id}-icon`);
    input.classList.remove('error');
    icon.classList.remove('error');
  }

  // validation functions inputs
  function validateEmail(e) {
    let email = e.currentTarget.value;
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
    } else {
      inputEmail.classList.add('error');
      inputEmailIcon.classList.add('error');
    }
  }

  function validatePassword(e) {
    let password = e.currentTarget.value;
    if (checkNumbersAndLetters(password) && password.length > 7) {
    }
    else {
      inputPassword.classList.add('error');
      inputPasswordIcon.classList.add('error');
    }
  }

}