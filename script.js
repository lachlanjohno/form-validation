// Selecting all elements I need for the script
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const errorUL = document.querySelector(".errors-list");
const errors = document.querySelector(".errors");

form.addEventListener("submit", (e) => {
  const errorMessages = [clearErrors()];

  // Checking if the username is atleast 6 characters
  if (username.value.length < 6) {
    e.preventDefault();
    errorMessages.push(
      showErrors("Ensure the username is at least 6 characters long")
    );
  }

  // Checking if the password is atleast 10 characters
  if (password.value.length < 10) {
    e.preventDefault();
    errorMessages.push(
      showErrors("Ensure the password is at least 10 characters long")
    );
  }

  // Checking if password and password confirmation does not match
  if (password.value !== passwordConfirmation.value) {
    e.preventDefault();
    errorMessages.push(
      showErrors("Ensure the password and confirmation password match")
    );
  }

  // Checking if the checkbox is ticked
  if (!terms.checked) {
    e.preventDefault();
    errorMessages.push(showErrors("Ensure the terms checkbox is checked"));
  }
});

function clearErrors() {
  errors.style.display = "none";
  errorUL.innerHTML = "";
}

function showErrors(errorMessages) {
  errors.style.display = "block";
  const newLI = document.createElement("li");
  newLI.textContent = errorMessages;
  errorUL.appendChild(newLI);
}
