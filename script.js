// Reel Filtering Function
function filterReels(category) {
  const reels = document.querySelectorAll('.reel-card');
  reels.forEach(reel => {
    const cat = reel.getAttribute('data-category');
    if (category === 'all' || cat === category) {
      reel.style.display = 'block';
    } else {
      reel.style.display = 'none';
    }
  });
}

// Slideshow background animation (hero section)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.style.opacity = 0);
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = 1;
  setTimeout(showSlides, 5000); // Change every 5s
}
showSlides();

// Scroll Highlighting Navbar (Optional)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    if (top >= offset) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Default dark mode
window.onload = () => {
  document.body.classList.add('dark-mode');
};
