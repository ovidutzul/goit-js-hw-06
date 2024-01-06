const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const trimmedInput = input.value.trim();
  input.classList.add("invalid");

  if (trimmedInput.length === parseInt(input.getAttribute("data-length"))) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }

});
