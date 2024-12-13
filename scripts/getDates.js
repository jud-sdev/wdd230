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

// Select HTML elements for weather info
const currentTemp = document.getElementById('weatherPlaceholder');
const weatherIcon = document.createElement('img'); // Create an image element for the weather icon
const captionDesc = document.createElement('figcaption'); // Create a figcaption element for description

// Append the icon and description dynamically to the Information card
const infoCard = document.querySelector('.card:nth-child(2)');
infoCard.appendChild(weatherIcon);
infoCard.appendChild(captionDesc);

// Define the OpenWeatherMap API URL with latitude, longitude, and other parameters
const apiKey = 'f1d880ba027bef90c5cb579d72f7f15b';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.4281&lon=3.3789&units=imperial&appid=${apiKey}`;

// Function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log('Weather API Response:', data); // For testing and debugging
            displayResults(data);
        } else {
            throw new Error(`Response Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

// Function to display the weather data
function displayResults(data) {
    // Display temperature
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;

    // Display weather icon
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    // Display weather description
    const desc = data.weather[0].description;
    captionDesc.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;
}

// Call the API fetch function
apiFetch();
