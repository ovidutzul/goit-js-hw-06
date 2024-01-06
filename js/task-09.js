function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorHexCode = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

const changeColor = () => {
  document.body.style.backgroundColor = colorHexCode.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener("click", changeColor);