const container = document.getElementById("websiteContainer");
const searchInput = document.getElementById("searchInput");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


function displayWebsites(list) {

    container.innerHTML = "";

    let html = "";

    list.forEach(site => {

        const isFav = favorites.includes(site.name);

        html += `
            <div class="card">

                <div class="card-header">

                    <img src="https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}"
                         alt="${site.name}"
                         loading="lazy"
                         decoding="async">

                    <div class="card-actions">
                        <span>${site.category}</span>

                        <button class="fav-btn ${isFav ? "active" : ""}" data-name="${site.name}">
                            ${isFav ? "❤️" : "🤍"}
                        </button>
                    </div>

                </div>

                <h2>
                    ${site.name}
                    ${site.top ? '<span class="top-badge">⭐ TOP</span>' : ''}
                    ${site.trending ? '<span class="trend-badge">🔥 Trending</span>' : ''}
                </h2>

                <p>${site.desc}</p>

                <div class="card-info">
                    ${site.free
                        ? '<span class="free-badge">🟢 Free</span>'
                        : '<span class="paid-badge">💎 Paid</span>'}
                </div>

                <p class="visit-count">
                    👁️ Opened ${localStorage.getItem(site.name) || 0} times
                </p>

                <a href="${site.url}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="visit-btn"
                   data-name="${site.name}">
                    Visit Website
                </a>

            </div>
        `;

    });

    container.innerHTML = html;

    updateFavoriteButtons();
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
    if(category==="Favorites"){

const favSites = websites.filter(site => favorites.includes(site.name));

displayWebsites(favSites);

return;

}

const filtered = websites.filter(site=>site.category===category);

displayWebsites(filtered);

});

});
// ===== FAVORITES =====


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

        btn.onclick = function () {

            const websiteName = this.dataset.name;

            if (favorites.includes(websiteName)) {
                favorites = favorites.filter(item => item !== websiteName);
            } else {
                favorites.push(websiteName);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));

            recent = recent.filter(item => item !== websiteName);

recent.unshift(websiteName);

if (recent.length > 10) {
    recent.pop();
}

localStorage.setItem("recentWebsites", JSON.stringify(recent));

updateRecent();

this.textContent = favorites.includes(websiteName) ? "❤️" : "🤍";
this.classList.toggle("active", favorites.includes(websiteName));
        };

    });

}
function updateCategoryCounts() {

    document.getElementById("allCount").textContent = `(${websites.length})`;

    document.getElementById("aiCount").textContent =
        `(${websites.filter(site => site.category === "AI").length})`;
    
    document.getElementById("entertainmentCount").textContent =
`(${websites.filter(site => site.category === "Entertainment").length})`;

    document.getElementById("codingCount").textContent =
        `(${websites.filter(site => site.category === "Coding").length})`;

    document.getElementById("musicCount").textContent =
        `(${websites.filter(site => site.category === "Music").length})`;

    document.getElementById("streamingCount").textContent =
        `(${websites.filter(site => site.category === "Streaming").length})`;

    document.getElementById("studyCount").textContent =
        `(${websites.filter(site => site.category === "Study").length})`;

    document.getElementById("shoppingCount").textContent =
        `(${websites.filter(site => site.category === "Shopping").length})`;

    document.getElementById("travelCount").textContent =
        `(${websites.filter(site => site.category === "Travel").length})`;

    document.getElementById("gamingCount").textContent =
        `(${websites.filter(site => site.category === "Gaming").length})`;

}

updateCategoryCounts();
document.addEventListener("click", function(e){

    if(e.target.classList.contains("visit-btn")){

        const name = e.target.dataset.name;

        let count = Number(localStorage.getItem(name) || 0);

        count++;

        localStorage.setItem(name, count);

    }

});
// ===== Recently Visited =====

let recent = JSON.parse(localStorage.getItem("recentWebsites")) || [];

function updateRecent(){

    const recentContainer = document.getElementById("recentContainer");

    if(!recentContainer) return;

    recentContainer.innerHTML="";

    recent.forEach(name=>{

        const site = websites.find(w=>w.name===name);

        if(!site) return;

        recentContainer.innerHTML += `
        <div class="recent-item"
             onclick="window.open('${site.url}','_blank')">
             ${site.name}
        </div>
        `;

    });

}

updateRecent();
document.addEventListener("click",function(e){

if(e.target.classList.contains("copy-btn")){

navigator.clipboard.writeText(e.target.dataset.url);

alert("✅ Link Copied");

}

});
document.getElementById("sortSelect").addEventListener("change",function(){

let arr=[...websites];

if(this.value==="az"){

arr.sort((a,b)=>a.name.localeCompare(b.name));

}

if(this.value==="za"){

arr.sort((a,b)=>b.name.localeCompare(a.name));

}

displayWebsites(arr);

});
