const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
let arr = [];
const ulNewLi = document.querySelector("#ingredients");
for (let ingredient of ingredients) {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  console.log(newLi);
  arr.push(newLi);
}
ulNewLi.append(...arr);
