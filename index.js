const registerForm = document.getElementById("register-form");
const galleryCards = document.querySelectorAll(".gallery .img-holder");
const productDescriptions = document.querySelectorAll(".product-description");
const container = document.getElementById("container");
const registerContainer = document.getElementById("register-container");
const nameInput = document.getElementById("register-name");
const emailInput = document.getElementById("register-email");
const passwordInput = document.getElementById("password");

let isValid;

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control valid"
}

function showError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control invalid"
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input);
      isValid = false
    } else {
      showSuccess(input);
      isValid = true
    }
  });
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Perform form validation
  checkRequired([nameInput, emailInput, passwordInput]);

  // If form is valid, proceed with form submission
  if (isValid) {
    registerContainer.style.display = "none";
    container.style.display = "block";
  }
});

// Show product information when a card is clicked
galleryCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    productDescriptions[index].classList.toggle("show-info");
  });
});
