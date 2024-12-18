document.addEventListener('DOMContentLoaded', () => {
    // === Hamburger Menu Toggle ===
    const menuButton = document.getElementById('menu');
    const navMenu = document.querySelector('.navigation');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function () {
            menuButton.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
    }

    // === Highlight Active Menu Item ===
    const navLinks = document.querySelectorAll('.navigation li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const activeItem = document.querySelector('.navigation li a.active');
            if (activeItem) activeItem.classList.remove('active');
            this.classList.add('active');
        });
    });

    // === Footer Updates ===
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) {
        lastModifiedEl.textContent = "Last Updated: " + document.lastModified;
    }

    // === Visit Message Logic ===
    const visitMessage = document.querySelector('#visit-message');
    if (visitMessage) {
        const lastVisitKey = 'myApp_lastVisit'; // Custom localStorage key to avoid conflicts
        const lastVisit = localStorage.getItem(lastVisitKey);
        const currentVisit = Date.now();

        if (!lastVisit) {
            visitMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
            if (daysSinceLastVisit < 1) {
                visitMessage.textContent = "Back so soon! Awesome!";
            } else if (daysSinceLastVisit === 1) {
                visitMessage.textContent = "You last visited 1 day ago.";
            } else {
                visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
            }
        }
        localStorage.setItem(lastVisitKey, currentVisit);
    } else {
        console.error("visit-message element not found");
    }

    // === Timestamp Input (if present) ===
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        const currentTimestamp = new Date().toISOString();
        timestampInput.value = currentTimestamp;
    }

    // === Member Directory View Toggle ===
    const memberContainer = document.getElementById('member-container');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    if (memberContainer && gridViewButton && listViewButton) {
        // Fetch the JSON data
        fetch('data/members.json')
            .then(response => response.json())
            .then(members => {
                displayMembers(members, 'grid');
            });

        // Display members in the desired format
        function displayMembers(members, view) {
            memberContainer.innerHTML = ''; // Clear container
            members.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('member', view === 'grid' ? 'card' : 'list-item');
                memberElement.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                memberContainer.appendChild(memberElement);
            });
        }

        // Event Listeners for view toggle
        gridViewButton.addEventListener('click', () => {
            memberContainer.classList.add('grid-view');
            memberContainer.classList.remove('list-view');
            gridViewButton.classList.add('active');
            listViewButton.classList.remove('active');
        });

        listViewButton.addEventListener('click', () => {
            memberContainer.classList.remove('grid-view');
            memberContainer.classList.add('list-view');
            listViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
        });
    } else {
        console.error("Member container or view toggle buttons not found");
    }

    // === Meet & Greet Banner ===
    const meetGreetBanner = document.getElementById('meet-greet-banner');
    const closeBannerButton = document.getElementById('close-banner');

    // Show banner only on Monday, Tuesday, and Wednesday
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Show on Monday, Tuesday, and Wednesday
        meetGreetBanner.style.display = 'block';
    }

    // Close the banner when the close button is clicked
    if (closeBannerButton) {
        closeBannerButton.addEventListener('click', () => {
            meetGreetBanner.style.display = 'none';
        });
    }

    // === Fetch Weather Data ===
    const weatherDescription = document.getElementById('weather-description');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherCard = document.querySelector('.weather-card');

    if (weatherCard) {
        const apiKey = 'f1d880ba027bef90c5cb579d72f7f15b';
        const city = 'Lagos';  // Replace with actual city name if needed
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                const currentTemp = data.main.temp;
                const weatherDesc = data.weather[0].description;

                // Update the weather card with the fetched data
                weatherDescription.textContent = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
                weatherTemp.textContent = `${currentTemp}°C`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherDescription.textContent = 'Unable to fetch weather data';
                weatherTemp.textContent = '';
            });
    }

    // === Spotlight Advertisements ===
    const spotlightAdsContainer = document.getElementById('spotlight-ads');

    if (spotlightAdsContainer) {
        fetch('data/members.json') // Ensure this path is correct
            .then(response => response.json())
            .then(members => {
                const spotlightMembers = members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
                const randomSpotlights = getRandomItems(spotlightMembers, 3);
                displaySpotlights(randomSpotlights);
            })
            .catch(error => console.error('Error fetching members data:', error));

        function getRandomItems(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        }

        function displaySpotlights(members) {
            members.forEach(member => {
                const spotlightElement = document.createElement('div');
                spotlightElement.classList.add('spotlight');
                spotlightElement.innerHTML = `
                    <h4>${member.name}</h4>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>${member.description}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightAdsContainer.appendChild(spotlightElement);
            });
        }
    }
});