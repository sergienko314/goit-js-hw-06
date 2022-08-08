function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", call);
btnDestroy.addEventListener("click", fooDestroy);

function call() {
  divEl.innerHTML = "";
  let arr = [];

  for (let i = 1; i <= inputEl.value; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = i * 10 + 20 + "px";
    newDiv.style.height = i * 10 + 20 + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    arr.push(newDiv);
  }
  divEl.append(...arr);
  inputEl.value = "";
}

function fooDestroy() {
  divEl.innerHTML = "";
}
