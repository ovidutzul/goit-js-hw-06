let counterValue = 0;

const decreaseValueBtn = document.querySelector('button[data-action="decrement"]');
const currentValue = document.querySelector("#value");
const increaseValueBtn = document.querySelector('button[data-action="increment"]');

const increaseValue = () => {
  counterValue++;
  currentValue.textContent = counterValue;
};

const decreaseValue = () => {
  counterValue--;
 currentValue.textContent = counterValue;
};

decreaseValueBtn.addEventListener("click", decreaseValue);
increaseValueBtn.addEventListener("click", increaseValue);


