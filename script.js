/* =====================================================
   ADEEB SAIFI — HOME PAGE JS
===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMobileMenu);


/* Close menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {
    closeMobileMenu();
  });

});


/* ================= SEARCH ================= */

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("siteSearch");

function openSearch() {

  searchOverlay.classList.add("open");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    searchInput.focus();
  }, 100);

}

function closeSearchBox() {

  searchOverlay.classList.remove("open");

  document.body.style.overflow = "";

  searchInput.value = "";

  filterSearch("");

}

searchBtn.addEventListener("click", openSearch);

closeSearch.addEventListener("click", closeSearchBox);


/* Search filtering */

const searchItems = document.querySelectorAll(".search-results a");

function filterSearch(value) {

  const query = value.toLowerCase().trim();

  searchItems.forEach(item => {

    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }

  });

}

searchInput.addEventListener("input", () => {

  filterSearch(searchInput.value);

});


/* ================= THEME ================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("adeeb-theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

  themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  localStorage.setItem(
    "adeeb-theme",
    isLight ? "light" : "dark"
  );

  themeBtn.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeMobileMenu();
    closeSearchBox();

  }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ================= STATS COUNTER ================= */

const counters =
  document.querySelectorAll("[data-count]");

let countersStarted = false;


function startCounters() {

  if (countersStarted) return;

  countersStarted = true;

  counters.forEach(counter => {

    const target =
      Number(counter.dataset.count);

    let current = 0;

    const duration = 1200;

    const startTime = performance.now();


    function update(time) {

      const progress =
        Math.min(
          (time - startTime) / duration,
          1
        );

      current =
        Math.floor(
          progress * target
        );

      counter.textContent = current;

      if (progress < 1) {

        requestAnimationFrame(update);

      } else {

        counter.textContent = target;

      }

    }

    requestAnimationFrame(update);

  });

}


/* Observe stats */

const statsSection =
  document.querySelector(".stats");

const statsObserver =
  new IntersectionObserver(
    entries => {

      if (entries[0].isIntersecting) {

        startCounters();

        statsObserver.disconnect();

      }

    },
    {
      threshold: .4
    }
  );

statsObserver.observe(statsSection);


/* ================= SCROLL TOP ================= */

const scrollTop =
  document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    scrollTop.classList.add("show");

  } else {

    scrollTop.classList.remove("show");

  }

});


scrollTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ================= SEARCH OVERLAY BACKDROP ================= */

searchOverlay.addEventListener("click", event => {

  if (event.target === searchOverlay) {

    closeSearchBox();

  }

});


/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
/* =========================
   WEBSITE GLOBAL SEARCH
========================= */

const searchInput = document.getElementById("siteSearch");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults && typeof sitePages !== "undefined") {

  searchInput.addEventListener("input", function () {

    const query = this.value.trim().toLowerCase();

    if (!query) {
      searchResults.innerHTML = "";
      return;
    }

    const results = sitePages.filter(page =>
      page.name.toLowerCase().includes(query) ||
      page.description.toLowerCase().includes(query)
    );

    if (results.length === 0) {

      searchResults.innerHTML = `
        <div class="no-results">
          <div>🔍</div>
          <strong>No results found</strong>
          <span>Try another search</span>
        </div>
      `;

      return;
    }

    searchResults.innerHTML = results.map(page => `
      <a href="${page.url}">
        <i>${page.icon}</i>

        <span>
          <strong>${page.name}</strong>
          <small>${page.description}</small>
        </span>
      </a>
    `).join("");

  });

}
