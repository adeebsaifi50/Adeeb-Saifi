const container = document.getElementById("websiteContainer");
const searchInput = document.getElementById("searchInput");

function updateFavoriteButtons() {

    const buttons = document.querySelectorAll(".fav-btn");

    buttons.forEach(btn => {

        const updateUI = () => {

            const name = btn.dataset.name;

            if (favorites.includes(name)) {

                btn.textContent = "❤️";
                btn.classList.add("active");

            } else {

                btn.textContent = "🤍";
                btn.classList.remove("active");

            }

        };

        updateUI();

        btn.onclick = function () {

            const name = this.dataset.name;

            if (favorites.includes(name)) {

                favorites = favorites.filter(item => item !== name);

            } else {

                favorites.push(name);

            }

            localStorage.setItem("favorites", JSON.stringify(favorites));

            updateFavoriteButtons();

        };

    });

            }

// Page load hote hi sab websites dikhao
displayWebsites(websites);

// Live Search
searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();

    const filtered = websites.filter(site =>

        site.name.toLowerCase().includes(search) ||

        site.category.toLowerCase().includes(search) ||

        site.desc.toLowerCase().includes(search)

    );

    displayWebsites(filtered);

});
// Card Hover Sound Ready (Future)

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".25s";

});

});
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

button.addEventListener("click",()=>{

categoryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category = button.dataset.category;

if(category==="All"){

displayWebsites(websites);

return;

}

const filtered = websites.filter(site=>site.category===category);

displayWebsites(filtered);

});

});
// ===== FAVORITES =====

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function updateFavoriteButtons() {

    document.querySelectorAll(".fav-btn").forEach(btn => {

        const name = btn.dataset.name;

        if (favorites.includes(name)) {

            btn.textContent = "❤️";
            btn.classList.add("active");

        } else {

            btn.textContent = "🤍";
            btn.classList.remove("active");

        }

        btn.onclick = () => {

            if (favorites.includes(name)) {

                favorites = favorites.filter(item => item !== name);

            } else {

                favorites.push(name);

            }

            localStorage.setItem("favorites", JSON.stringify(favorites));

            updateFavoriteButtons();

        };

    });

                              }
