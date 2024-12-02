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
document.addEventListener("DOMContentLoaded", function () {
    // Handle password confirmation
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const passwordError = document.querySelector("#password-error");

    confirmPassword.addEventListener("input", function () {
        if (password.value !== confirmPassword.value) {
            passwordError.textContent = "Passwords do not match!";
            confirmPassword.setCustomValidity("Passwords do not match!");
        } else {
            passwordError.textContent = "";
            confirmPassword.setCustomValidity("");
        }
    });

    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            passwordError.textContent = "Passwords must match!";
            confirmPassword.focus();
            confirmPassword.value = "";
            password.value = "";
        }
    });

    // Get the slider and number input elements
    const slider = document.querySelector("#rating");
    const numberInput = document.querySelector("#rating-value");

    // Synchronize the slider value with the number input
    slider.addEventListener("input", function () {
        numberInput.value = slider.value;
    });

    // Synchronize the number input value with the slider
    numberInput.addEventListener("input", function () {
        // Ensure the input value stays within the min/max range
        if (numberInput.value < slider.min) {
            numberInput.value = slider.min;
        } else if (numberInput.value > slider.max) {
            numberInput.value = slider.max;
        }
        slider.value = numberInput.value;
    });
});
