const inputEl = document.querySelector('#validation-input');

const validLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
const inputValue = event.target.value.trim();

if (inputValue.length === Number(validLength)) {
inputEl.classList.remove('invalid');
inputEl.classList.add('valid');
} else {
inputEl.classList.remove('valid');
inputEl.classList.add('invalid');
}
}




