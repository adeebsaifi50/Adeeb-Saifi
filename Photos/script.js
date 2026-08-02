// ===== Elements =====
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

// ===== Load Photos =====
fetch("photos.json")
  .then(response => response.json())
  .then(photos => {

    // Random order
photos.sort(() => Math.random() - 0.5);

    photos.forEach(photo => {

      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");

      // Thumbnail
img.src = `Images/adeebthmb${photo}.jpg`;

// Full Image
img.dataset.full = `Images/adeeb${photo}.jpg`;

img.alt = `Adeeb Photo ${photo}`;

      // Click to open
      img.addEventListener("click", () => {
        lightboxImage.src = img.dataset.full;
        lightbox.classList.add("show");
      });

      item.appendChild(img);
      gallery.appendChild(item);

    });

  })
  .catch(error => {
    console.error("Photos load nahi hui:", error);
  });

// ===== Close Lightbox =====
closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
  }
});
