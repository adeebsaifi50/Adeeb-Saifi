const container = document.getElementById("websiteContainer");
const searchInput = document.getElementById("searchInput");

function displayWebsites(list) {

    container.innerHTML = "";

    list.forEach(site => {

        container.innerHTML += `

        <div class="card">

            <div class="card-header">

                <img src="https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}" alt="${site.name}">

                <span>${site.category}</span>

            </div>

            <h2>${site.name}</h2>

            <p>${site.desc}</p>

            <a href="${site.url}" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>

        </div>

        `;

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
