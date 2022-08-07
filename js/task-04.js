const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action = "increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

increment.addEventListener("click", () => {
  value.textContent = counterValue;
  counterValue += 1;
  console.log(counterValue);
});
decrement.addEventListener("click", () => {
  value.textContent = counterValue;
  counterValue--;
  console.log(counterValue);
});
