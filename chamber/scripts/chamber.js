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
});
