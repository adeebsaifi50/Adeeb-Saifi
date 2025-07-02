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
