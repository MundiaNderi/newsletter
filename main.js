document.addEventListener("DOMContentLoaded", () => {
  const sucessModal = document.getElementById("success");

  const cardNews = document.getElementById("card");

  const subscribeNews = document.getElementById("subscribe");

  subscribeNews.addEventListener("click", function (event) {
    event.preventDefault();
    cardNews.classList.add("hidden");
    sucessModal.classList.remove("hidden");
  });
});

function validateEmail() {
  const emailInput = document.getElementById("contact-email").value;
  const emailError = document.getElementById("email-error");

  if (emailInput.length == 0) {
    emailError.textContent = "Email is required";
    return false;
  }

  if (!emailInput.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.textContent = "Valid email required";
    return false;
  }

  emailError.textContent = ""
  return true;
}
