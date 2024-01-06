const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const liElem = document.createElement("li");
  liElem.textContent = element;
  liElem.classList.add("item");
  return liElem;
});

ulElem.append(...elements);
