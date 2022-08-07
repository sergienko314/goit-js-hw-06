const addBlue = document.querySelector("#validation-input");
const addDataLength = addBlue.getAttribute("data-length");
addBlue.onblur = () => {
  if (addBlue.value.length === +addDataLength) {
    console.log(addDataLength);
    addBlue.classList.remove("invalid");
    addBlue.classList.add("valid");
  } else if (addBlue.value.length === 0) {
    addBlue.classList.remove("valid");
    addBlue.classList.remove("invalid");
  } else {
    addBlue.classList.remove("valid");
    addBlue.classList.add("invalid");
  }
};

// addBlue.addEventListener("blur", call);
