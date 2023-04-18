const registerForm = document.getElementById("register-form");
const galleryCards = document.querySelectorAll(".gallery .img-holder");
const productDescriptions = document.querySelectorAll(".product-description");
const container = document.getElementById("container");
const registerContainer = document.getElementById("register-container");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const nameInput = document.getElementById("register-name");
  const emailInput = document.getElementById("register-email");
  const passwordInput = document.getElementById("password");
  let isValid = true;

  // Perform form validation
  if (nameInput.value.trim() === "") {
    nameInput.parentNode.classList.add("invalid");
    isValid = false;
  } else {
    nameInput.parentNode.classList.remove("invalid");
    nameInput.parentNode.classList.add("valid");
  }

  if (emailInput.value.trim() === "") {
    emailInput.parentNode.classList.add("invalid");
    isValid = false;
  } else {
    emailInput.parentNode.classList.remove("invalid");
    emailInput.parentNode.classList.add("valid");
  }

  if (passwordInput.value.trim() === "") {
    passwordInput.parentNode.classList.add("invalid");
    isValid = false;
  } else {
    passwordInput.parentNode.classList.remove("invalid");
    passwordInput.parentNode.classList.add("valid");
  }

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
