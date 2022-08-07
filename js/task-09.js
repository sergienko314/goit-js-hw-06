function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('[type="button"]');
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

button.addEventListener("click", call);
function call() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  bodyColor.style.color = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
  spanColor.style.color = getRandomHexColor();
  button.style.backgroundColor = getRandomHexColor();
  button.style.bordercolor = getRandomHexColor();
}
