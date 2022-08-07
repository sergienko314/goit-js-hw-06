// Number of categories: 3

// Category: Animals
// Elements: 4

//  Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemsMy = document.querySelectorAll(".item");
console.log(`Number of categories:${itemsMy.length}`);
const textMy = document.querySelectorAll("h2");

for (let i = 0; i < textMy.length; i += 1) {
  const text1 = textMy[i].textContent;
  const text2 = itemsMy[i].lastElementChild.children.length;
  console.log("Category: " + text1 + "\n" + "Elements:" + text2);
}
