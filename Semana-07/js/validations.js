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
