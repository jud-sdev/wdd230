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
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        // Get all required inputs
        const requiredInputs = form.querySelectorAll("input[required]");
        let isFormValid = true; // Track the form's validity

        // Loop through required inputs to check validity
        requiredInputs.forEach((input) => {
            if (!input.value.trim()) {
                isFormValid = false; // Mark form as invalid
                input.classList.add("invalid"); // Add invalid class
            } else {
                input.classList.remove("invalid"); // Remove invalid class if filled
            }
        });

        // If the form is invalid, prevent submission and show alert
        if (!isFormValid) {
            e.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        }

        // Ensure passwords match
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm-password");
        const passwordError = document.querySelector("#password-error");

        if (password.value !== confirmPassword.value) {
            e.preventDefault(); // Prevent form submission
            isFormValid = false;
            passwordError.textContent = "Passwords must match!";
            confirmPassword.classList.add("invalid");
        } else {
            passwordError.textContent = "";
            confirmPassword.classList.remove("invalid");
        }
    });

    // Synchronize range slider and number input
    const slider = document.querySelector("#rating");
    const numberInput = document.querySelector("#rating-value");

    slider.addEventListener("input", function () {
        numberInput.value = slider.value;
    });

    numberInput.addEventListener("input", function () {
        const value = Math.round(numberInput.value); // Ensure whole number
        if (value < slider.min) {
            numberInput.value = slider.min;
        } else if (value > slider.max) {
            numberInput.value = slider.max;
        } else {
            numberInput.value = value;
        }
        slider.value = numberInput.value;
    });
});