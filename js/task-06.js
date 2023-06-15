const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
  if (inputEl.value.length.toString() === inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
  }
}