// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("show-menu");
});

// Theme toggle (dark/light)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Dark theme styles
const css = document.createElement("style");
css.innerHTML = `
.dark-theme {
  background-color: #121212;
  color: #f4f4f4;
}
.dark-theme .travel-card {
  background-color: #1c1c1c;
  color: #f4f4f4;
}
.dark-theme .hero {
  background: linear-gradient(90deg, #555 0%, #333 100%);
}
.dark-theme footer {
  background-color: #111;
}
.dark-theme .blog-btn {
  color: #fff;
  background-color: #1e90ff;
}
`;
document.head.appendChild(css);
