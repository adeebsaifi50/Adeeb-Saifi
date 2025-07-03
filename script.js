// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
});

// Open/Close Menu
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('open');
}

// Default to dark mode
window.onload = () => {
  document.body.classList.add('dark-mode');
};
// 🌙 Theme Toggle Button
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Toggle emoji icon
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
