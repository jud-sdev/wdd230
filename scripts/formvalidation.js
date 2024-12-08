document.addEventListener("DOMContentLoaded", function () {
    // Form validation logic
    const form = document.querySelector(".styled-form");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const email = document.querySelector("#email");
    const errors = document.querySelectorAll(".error-message");

    form.addEventListener("submit", function (e) {
        let isFormValid = true;
        errors.forEach(error => error.textContent = '');

        if (username.value.trim() === '') {
            document.querySelector("#username-error").textContent = "Username is required.";
            isFormValid = false;
        }

        if (!password.value.match(/[a-zA-Z0-9]{8,}/)) {
            document.querySelector("#password-error").textContent = "Password must be at least 8 alpha-numeric characters.";
            isFormValid = false;
        }

        if (password.value !== confirmPassword.value) {
            document.querySelector("#confirm-password-error").textContent = "Passwords must match.";
            isFormValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (!email.value.match(emailPattern)) {
            document.querySelector("#email-error").textContent = "Email must be a valid BYUI email (e.g., user@byui.edu).";
            isFormValid = false;
        }

        if (!isFormValid) {
            e.preventDefault();
        }
    });

    const slider = document.querySelector("#rating");
    const output = document.querySelector("#rating-value");
    slider.addEventListener("input", function () {
        output.textContent = slider.value;
    });

    // Header, footer, and dark mode logic
    const yearElement = document.getElementById("currentYear");
    const modifiedElement = document.getElementById("lastModified");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show'); 
        hambutton.classList.toggle('show');
    });

    const darkModeButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const main = document.querySelector("main");
    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        main.classList.toggle("dark-mode");
        darkModeButton.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });
});