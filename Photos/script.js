// ===== Elements =====
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let photoList = [];
let currentIndex = 0;

// ===== Load Photos =====
fetch("photos.json")
  .then(res => res.json())
  .then(data => {

    // Random Order
    photoList = [...data];
    photoList.sort(() => Math.random() - 0.5);

    photoList.forEach((photo, index) => {

      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");
      img.src = `adeebthmb${photo}.jpg`;
      img.alt = `Adeeb Photo ${photo}`;

      img.addEventListener("click", () => {
        currentIndex = index;
        openPhoto();
      });

      item.appendChild(img);
      gallery.appendChild(item);

    });

  });

// ===== Open Photo =====
function openPhoto() {
  lightboxImage.src = `adeeb${photoList[currentIndex]}.jpg`;
  lightbox.classList.add("show");
}

// ===== Close =====
closeLightbox.onclick = () => {
  lightbox.classList.remove("show");
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
  }
};

// ===== Next =====
nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex >= photoList.length) currentIndex = 0;
  openPhoto();
};

// ===== Previous =====
prevBtn.onclick = () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = photoList.length - 1;
  openPhoto();
};

// ===== Swipe Gesture =====

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {

    const swipeDistance = touchEndX - touchStartX;

    // Right Swipe = Previous
    if (swipeDistance > 60) {
        currentIndex--;
        if (currentIndex < 0)
            currentIndex = photoList.length - 1;
        openPhoto();
    }

    // Left Swipe = Next
    else if (swipeDistance < -60) {
        currentIndex++;
        if (currentIndex >= photoList.length)
            currentIndex = 0;
        openPhoto();
    }
}
