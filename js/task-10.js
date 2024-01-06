function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");
const uList = document.createElement("ul");



function createBoxes(amount) {
  let size = 20;
  for (let i = 0; i < amount; i++) {
    const liEl = document.createElement("li");
    uList.append(liEl);
    liEl.style.listStyleType = "none";
    liEl.style.borderBottom = "thick solid #FFF";
    liEl.style.height = size + "px";
    liEl.style.width = size + "px";
    liEl.style.backgroundColor = getRandomHexColor();
    size += 5;
  }
  return;
}

boxes.append(uList);

createBtn.addEventListener("click", () => createBoxes(input.value));

function destroyBoxes() {
  boxes.innerHTML = "";
  location.reload();
}

destroyBtn.addEventListener("click", destroyBoxes);