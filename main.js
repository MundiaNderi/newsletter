document.addEventListener("DOMContentLoaded", () => {
  const sucessModal = document.getElementById("success");
  console.log(success)

  const cardNews = document.getElementById("card");

  const subscribeNews = document.getElementById("subscribe");

  subscribeNews.addEventListener("click", function (event) {
    event.preventDefault();
    cardNews.classList.add("hidden");
    sucessModal.classList.remove("hidden");
  });


});

// Validate the form 
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


// Dismiss the success card
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const userEmail = urlParams.get("email");
  const dismiss = document.getElementById("success");

  // Display the email on the success page
  document.getElementById("subscriber-email").textContent = userEmail;

  dismiss.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
