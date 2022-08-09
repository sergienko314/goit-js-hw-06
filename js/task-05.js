let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", call);
function call() {
  if (textInput.value.length === 0 || textInput.value.trim() === "") {
    return (textOutput.textContent = "Anonymous");
  }
  return (textOutput.textContent = textInput.value);
}
