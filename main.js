document.addEventListener("DOMContentLoaded", () => {
  const successModal = document.getElementById("success");
  const cardNews = document.getElementById("card");
  const subscribeButton = document.getElementById("subscribe");

  subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Validate email
    if (!validateEmail()) {
      return; // Exit function if email is invalid
    }

    // Hide card and show success modal
    cardNews.classList.add("hidden");
    successModal.classList.remove("hidden");
  });

  // Dismiss the success modal
  const dismissButton = document.getElementById("dismiss");
  dismissButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

// Validate email function
function validateEmail() {
  const emailInput = document.getElementById("contact-email").value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;

  if (emailInput.length === 0) {
    emailError.textContent = "Email is required";
    return false;
  } else if (!emailRegex.test(emailInput)) {
    emailError.textContent = "Valid email required";
    return false;
  } else {
    emailError.textContent = "";
    const encodedEmail = encodeURIComponent(emailInput);
    const redirectURL = `index.html?email=${encodedEmail}`;
    window.history.pushState({ path: redirectURL }, "", redirectURL); // Update the URL
    document.getElementById("subscriber-email").textContent = emailInput;
    return true;
  }
}
