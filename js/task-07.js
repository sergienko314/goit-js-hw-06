const textInput = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

// textInput.addEventListener("change", call);

function call() {
  text.style.fontSize = textInput.value + "px";
}

// textInput.addEventListener("change", ({ currentTarget: { value } }) => {
//   text.style.fontSize = `${value}px`;
// });
