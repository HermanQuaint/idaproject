const form = document.querySelector('.form');
const formInput = form.querySelectorAll('.form__input');
const formRequired = form.querySelectorAll('.required');
const formButton = form.querySelector('.form__button');

let fieldCheck = {};

const checkButton = function () {
  if(Object.values(fieldCheck).every(item => item.check)) {
    formButton.removeAttribute('disabled');
  } else if(!formButton.hasAttribute('disabled')) {
    formButton.setAttribute('disabled', 'disabled');
  }
}

const valueCheck = function (value) {
  let idx = value.target.getAttribute('data-idx');
  fieldCheck[idx].check = !!value.target.value;
  checkButton();
}

formRequired.forEach(function (item, index) {
  fieldCheck[index.toString()] = {check: false};
  item.setAttribute('data-idx', index.toString());
  item.addEventListener('keyup', valueCheck);
})
