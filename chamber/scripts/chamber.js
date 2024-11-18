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

// JavaScript to toggle the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});
