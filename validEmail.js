/* eslint no-unused-vars: "error" */

const form = document.querySelector('#submitForm');
const emailElement = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');

// eslint-disable-next-line no-unused-vars
function submitForm(event) {
  if (document.getElementById('submitForm').checkValidity()) {
    if (emailElement.value === emailElement.value.toLowerCase()) {
      form.submit();
      form.reset();
      localStorage.clear();
    } else {
      event.preventDefault();
      errorMsg.innerHTML = 'Email address should be in lowercase';
    }
    return false;
  }
  return true;
}
