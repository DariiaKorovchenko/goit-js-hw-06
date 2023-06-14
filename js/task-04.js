let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

function onIncrementClick(event) {
    counterValue += 1;
    counterEl.textContent = counterValue;
};

function onDecrementClick(event) {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};

decrementEl.addEventListener('click', onDecrementClick);
incrementEl.addEventListener('click', onIncrementClick);