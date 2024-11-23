// Lazy loading implementation
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    const loadImage = (image) => {
        image.src = image.getAttribute("data-src");
        image.removeAttribute("data-src");
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => observer.observe(image));
});

// Update footer with the last modified date
document.getElementById("lastModified").textContent = document.lastModified;
