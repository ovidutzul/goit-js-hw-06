const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const newName = () => {
  input.value === "" ? output.textContent = "Anonymous" : output.textContent = input.value.trim();
};

input.addEventListener("input", newName);