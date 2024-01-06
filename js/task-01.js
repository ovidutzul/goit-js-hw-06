const categories = document.querySelector("#categories");
const numOfCategories = `Number of categories: ${categories.children.length}`;
console.log(numOfCategories);
console.log("");
const items = categories.querySelectorAll(".item");

items.forEach((item) => {
  const category = ` Category: ${item.firstElementChild.textContent}`;
  console.log(category);
  const elements = `  Elements: ${item.lastElementChild.children.length}`;
  console.log(elements);
  console.log("");
});
