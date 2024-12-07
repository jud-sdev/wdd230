// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', function () {
    const isOpen = menuButton.classList.toggle('open');
    navMenu.style.display = isOpen ? 'flex' : 'none';
});

// Highlight active menu item
document.querySelectorAll('.navigation li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.navigation li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Footer updates
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Updated: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const visitMessage = document.querySelector('#visit-message');
    if (!visitMessage) {
        console.error("visit-message element not found");
        return;  // Prevent further execution if the element is not found
    }

    const lastVisit = localStorage.getItem('lastVisit');
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

    localStorage.setItem('lastVisit', currentVisit);
});

document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        const currentTimestamp = new Date().toISOString();
        timestampInput.value = currentTimestamp;
    }
});
