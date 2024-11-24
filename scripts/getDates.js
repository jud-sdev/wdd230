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
    mainnav.classList.toggle('show');  // Toggle the navigation menu
    hambutton.classList.toggle('show'); // Toggle the hamburger icon (≡ → X)
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

document.addEventListener("DOMContentLoaded", () => {
    const visitsPlaceholder = document.getElementById("visitsPlaceholder");
    let visits = localStorage.getItem("pageVisits");

    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem("pageVisits", visits);
    visitsPlaceholder.textContent = visits;
});
