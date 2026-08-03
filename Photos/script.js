// ===== Elements =====
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
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

    const image = `adeeb${photoList[currentIndex]}.jpg`;

    lightboxImage.src = image;

    downloadBtn.href = image;
    downloadBtn.download = image;

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

lightboxImage.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightboxImage.addEventListener("touchend", (e) => {
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
shareBtn.onclick = async () => {

    const image = `adeeb${photoList[currentIndex]}.jpg`;

    if (navigator.share) {

        navigator.share({
            title: "Adeeb Saifi Gallery",
            text: "Check out this photo!",
            url: location.origin + location.pathname.replace("Photos.html","") + image
        });

    } else {

        alert("Share is not supported on this device.");

    }

};
// ===== Drag Down To Close =====

let startY = 0;
let currentY = 0;
let isDragging = false;

lightboxImage.addEventListener("touchstart", (e) => {

    startY = e.touches[0].clientY;
    isDragging = true;

}, { passive: true });

lightboxImage.addEventListener("touchmove", (e) => {

    if (!isDragging) return;

    currentY = e.touches[0].clientY;

    const moveY = currentY - startY;

    // Sirf niche drag hone do
    if (moveY > 0) {

        lightboxImage.style.transform =
            `translateY(${moveY}px) scale(${1 - moveY / 900})`;

        lightbox.style.background =
            `rgba(0,0,0,${0.85 - moveY / 500})`;

    }

}, { passive: true });

lightboxImage.addEventListener("touchend", () => {

    if (!isDragging) return;

    isDragging = false;

    const moveY = currentY - startY;

    // Agar 150px se jyada niche gaya
    if (moveY > 150) {

        lightbox.classList.remove("show");

        setTimeout(() => {

            lightboxImage.style.transform = "";
            lightbox.style.background = "";

        },300);

    }

    // Wapas center
    else{

        lightboxImage.style.transition = ".25s";

        lightboxImage.style.transform = "";

        lightbox.style.background = "";

        setTimeout(()=>{
            lightboxImage.style.transition="";
        },250);

    }

});
