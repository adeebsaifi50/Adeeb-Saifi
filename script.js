// 1️⃣ Reel Filtering Function
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

// 2️⃣ Slideshow background animation (hero section)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.style.opacity = 0);
  slideIndex = (slideIndex + 1) % slides.length;
  if (slides[slideIndex]) {
    slides[slideIndex].style.opacity = 1;
  }
  setTimeout(showSlides, 5000); // Change every 5s
}
if (slides.length > 0) showSlides();

// 3️⃣ Scroll Highlighting Navbar
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

// 4️⃣ Theme Toggle Button 🌙/☀️
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Toggle icon
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// 5️⃣ Default dark mode on load
window.onload = () => {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "🌙";
};
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}
// Simple hover effect or animation placeholder
const travelCards = document.querySelectorAll('.travel-card');

travelCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
