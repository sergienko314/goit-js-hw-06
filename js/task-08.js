const formEl = document.querySelector(".login-form");
const inputMail = document.querySelector('[name="email"]');
const inputPass = document.querySelector('[name="password"]');

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputMail.value.trim() === "" || inputPass.value.trim() === "") {
    alert("Пустое поле!!!");
    console.log(event);
  }
  const arr = {
    mail: inputMail.value,
    password: inputPass.value,
  };
  console.log(arr);
  event.currentTarget.reset();
});

// const {
//   elements: { email, password },
// } = event.currentTarget;
