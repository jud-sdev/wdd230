// Define constants for the elements
const yearElement = document.getElementById("currentYear");
const modifiedElement = document.getElementById("lastModified");

// Set the current year in the footer
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Set the last modified date in the footer
if (modifiedElement) {
    const lastModifiedDate = document.lastModified;
    modifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}

// Store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show');
});

// Get the dark mode toggle button and the body and main elements
const darkModeButton = document.getElementById("darkModeToggle");
const body = document.body;
const main = document.querySelector("main");

// Add event listener to toggle dark mode
darkModeButton.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on body and main
    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");

    // Change button text based on the mode
    if (body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌞"; // Sun icon for light mode
    } else {
        darkModeButton.textContent = "🌙"; // Moon icon for dark mode
    }
});
// Ensure passwords match
document.querySelector('form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const error = document.getElementById('password-error');
  
    if (password !== confirmPassword) {
      error.textContent = "Passwords do not match.";
      document.getElementById('password').value = '';
      document.getElementById('confirm-password').value = '';
      document.getElementById('password').focus();
      event.preventDefault();
    }
  });
  
  // Display range value
  document.getElementById('rating').addEventListener('input', function (event) {
    document.getElementById('rating-value').textContent = event.target.value;
  });
  