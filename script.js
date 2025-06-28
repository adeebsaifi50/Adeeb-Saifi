// Get all destination cards
const destinationCards = document.querySelectorAll('.destination-card');

// Get lightbox elements
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.querySelector('.lightbox-close');

// Function to open the lightbox
function openLightbox(imageSrc, title, description) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = title; // Set alt text for accessibility
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    lightboxOverlay.style.display = 'flex'; // Show the overlay
}

// Function to close the lightbox
function closeLightbox() {
    lightboxOverlay.style.display = 'none'; // Hide the overlay
    lightboxImage.src = ''; // Clear image source
    lightboxTitle.textContent = ''; // Clear title
    lightboxDescription.textContent = ''; // Clear description
}

// Add click event listener to each destination card
destinationCards.forEach(card => {
    card.addEventListener('click', () => {
        const imageElement = card.querySelector('img');
        const titleElement = card.querySelector('h2');
        const descriptionElement = card.querySelector('p');

        const imageSrc = imageElement.getAttribute('data-src'); // Get the high-res image source
        const title = titleElement.textContent;
        const description = descriptionElement.textContent;

        openLightbox(imageSrc, title, description);
    });
});

// Add click event listener to the close button
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image (on the overlay itself)
lightboxOverlay.addEventListener('click', (event) => {
    // Check if the click occurred directly on the overlay, not on its children
    if (event.target === lightboxOverlay) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
        closeLightbox();
    }
});
