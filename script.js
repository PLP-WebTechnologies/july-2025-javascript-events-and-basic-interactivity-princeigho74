// -------------------------
// Interactive Feature 1: Counter
// -------------------------
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", updateCounter);

function updateCounter() {
  count++;
  countDisplay.textContent = count;
}

// -------------------------
// Interactive Feature 2: Toggle Password Visibility
// -------------------------
const passwordField = document.getElementById("passwordField");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", togglePassword);

function togglePassword() {
  passwordField.type =
    passwordField.type === "password" ? "text" : "password";
}

// -------------------------
// Custom Form Validation
// -------------------------
const form = document.getElementById("myForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); // Stop default submission
  errorMsg.textContent = ""; // Clear previous errors

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let valid = true;

  // Check username
  if (username.length < 3) {
    showError("Username must be at least 3 characters long.");
    valid = false;
  }

  // Check email format with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("Please enter a valid email address.");
    valid = false;
  }

  // Check password strength
  if (password.length < 6) {
    showError("Password must be at least 6 characters long.");
    valid = false;
  }

  // If valid, simulate success
  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}

// Utility function to show error messages
function showError(message) {
  errorMsg.textContent += message + "\n";
}
