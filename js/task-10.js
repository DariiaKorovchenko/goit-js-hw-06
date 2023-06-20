function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerEl = document.querySelector("#boxes");
const amountOfBoxes = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");

createButtonEl.addEventListener("click", onCreateBoxes);
destroyButtonEl.addEventListener("click", onDesrtoyBoxes);

function onDesrtoyBoxes(event) {
  containerEl.innerHTML = "";
}

function onCreateBoxes(amount) {
  amount = amountOfBoxes.value;

  for (let i = 0; i < amount; i += 1) {
    containerEl.insertAdjacentHTML("afterbegin", '<div class="box">fgh</div>');
  }

  for (let i = 0; i < containerEl.children.length; i += 1) {
    containerEl.children[i].style.width = `${30 + i * 10}px`;
    containerEl.children[i].style.height = `${30 + i * 10}px`;
    containerEl.children[i].style.backgroundColor = getRandomHexColor();
  }
}
