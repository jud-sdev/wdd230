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
