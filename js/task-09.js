function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const body = document.querySelector("body");

btnEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const randomColor = getRandomHexColor();
  textEl.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
