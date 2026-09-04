/* =====================================================
   UNIVERSE EXPLORER
   Phase 1 — Solar System
===================================================== */


/* =========================
   PLANET DATA
========================= */

const planetData = {

  Mercury: {
    type: "Rocky planet",
    diameter: "4,879 km",
    year: "88 Earth days",
    moons: "0",
    description:
      "The smallest planet and the closest planet to the Sun."
  },

  Venus: {
    type: "Rocky planet",
    diameter: "12,104 km",
    year: "225 Earth days",
    moons: "0",
    description:
      "A hot rocky world with a thick carbon-dioxide atmosphere."
  },

  Earth: {
    type: "Rocky planet",
    diameter: "12,742 km",
    year: "365.25 days",
    moons: "1",
    description:
      "Our home planet and the only world currently known to support life."
  },

  Mars: {
    type: "Rocky planet",
    diameter: "6,779 km",
    year: "687 Earth days",
    moons: "2",
    description:
      "The cold, dusty red planet with two small natural satellites."
  },

  Jupiter: {
    type: "Gas giant",
    diameter: "139,820 km",
    year: "11.86 Earth years",
    moons: "95+",
    description:
      "The largest planet in our Solar System."
  },

  Saturn: {
    type: "Gas giant",
    diameter: "116,460 km",
    year: "29.45 Earth years",
    moons: "140+",
    description:
      "A gas giant famous for its spectacular ring system."
  },

  Uranus: {
    type: "Ice giant",
    diameter: "50,724 km",
    year: "84 Earth years",
    moons: "28",
    description:
      "An ice giant that rotates on its side relative to most planets."
  },

  Neptune: {
    type: "Ice giant",
    diameter: "49,244 km",
    year: "164.8 Earth years",
    moons: "16",
    description:
      "The most distant recognized planet in our Solar System."
  }

};


/* =========================
   ELEMENTS
========================= */

const infoPanel =
  document.getElementById("infoPanel");

const closePanel =
  document.getElementById("closePanel");

const planetName =
  document.getElementById("planetName");

const planetDescription =
  document.getElementById("planetDescription");

const planetType =
  document.getElementById("planetType");

const planetDiameter =
  document.getElementById("planetDiameter");

const planetYear =
  document.getElementById("planetYear");

const planetMoons =
  document.getElementById("planetMoons");

const previewPlanet =
  document.querySelector(".preview-planet");

const pauseBtn =
  document.getElementById("pauseBtn");

const pauseIcon =
  document.getElementById("pauseIcon");

const pauseText =
  document.getElementById("pauseText");

const resetView =
  document.getElementById("resetView");

const followBtn =
  document.getElementById("followBtn");

const orbits =
  document.querySelectorAll(".orbit");

const planets =
  document.querySelectorAll(".planet");


/* =========================
   STATE
========================= */

let paused = false;

let currentPlanet = null;


/* =========================
   PLANET COLORS
========================= */

const planetColors = {

  Mercury:
    "radial-gradient(circle at 30% 30%, #cfc7b7, #746d64)",

  Venus:
    "radial-gradient(circle at 35% 30%, #f5d79c, #b86f36)",

  Earth:
    "radial-gradient(circle at 30% 30%, #83d9ff, #2468ad 45%, #183d65)",

  Mars:
    "radial-gradient(circle at 35% 30%, #e78b67, #9d3826 65%, #682217)",

  Jupiter:
    "linear-gradient(180deg, #d6b78c, #9c7655, #e0c49c, #8f6d52, #c7a47b)",

  Saturn:
    "linear-gradient(140deg, #e2c892, #967c54)",

  Uranus:
    "radial-gradient(circle at 35% 30%, #baf5f3, #5bb3c1)",

  Neptune:
    "radial-gradient(circle at 35% 30%, #77a9ff, #244d9a)"

};


/* =========================
   OPEN PLANET
========================= */

function openPlanet(name) {

  const data =
    planetData[name];

  if (!data) {
    return;
  }


  currentPlanet =
    name;


  planetName.textContent =
    name;

  planetDescription.textContent =
    data.description;

  planetType.textContent =
    data.type;

  planetDiameter.textContent =
    data.diameter;

  planetYear.textContent =
    data.year;

  planetMoons.textContent =
    data.moons;


  previewPlanet.style.background =
    planetColors[name];


  infoPanel.classList.add("open");

  infoPanel.setAttribute(
    "aria-hidden",
    "false"
  );
}


/* =========================
   CLOSE PANEL
========================= */

function closePlanet() {

  infoPanel.classList.remove(
    "open"
  );

  infoPanel.setAttribute(
    "aria-hidden",
    "true"
  );

  currentPlanet =
    null;
}


/* =========================
   PLANET CLICK
========================= */

planets.forEach(
  planet => {

    planet.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const name =
          planet.dataset.planet;

        openPlanet(name);
      }
    );


    planet.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openPlanet(
            planet.dataset.planet
          );
        }
      }
    );

  }
);


/* =========================
   SUN CLICK
========================= */

document
  .getElementById("sun")
  .addEventListener(
    "click",
    () => {

      planetName.textContent =
        "Sun";

      planetDescription.textContent =
        "The star at the center of our Solar System.";

      planetType.textContent =
        "Star";

      planetDiameter.textContent =
        "1.39 million km";

      planetYear.textContent =
        "≈ 230 million years";

      planetMoons.textContent =
        "—";

      previewPlanet.style.background =
        "radial-gradient(circle at 35% 35%, #fff, #ffe08a 25%, #ff9d32 60%, #e65c1c)";

      infoPanel.classList.add(
        "open"
      );

      infoPanel.setAttribute(
        "aria-hidden",
        "false"
      );

      currentPlanet =
        "Sun";
    }
  );


/* =========================
   CLOSE
========================= */

closePanel.addEventListener(
  "click",
  closePlanet
);


/* =========================
   PAUSE / PLAY
========================= */

pauseBtn.addEventListener(
  "click",
  () => {

    paused =
      !paused;


    orbits.forEach(
      orbit => {

        orbit.classList.toggle(
          "paused",
          paused
        );

      }
    );


    pauseIcon.textContent =
      paused ? "▶" : "Ⅱ";

    pauseText.textContent =
      paused ? "Play" : "Pause";

  }
);


/* =========================
   SPEED
========================= */

const speedButtons =
  document.querySelectorAll(
    "[data-speed]"
  );


speedButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const speed =
          Number(
            button.dataset.speed
          );


        speedButtons.forEach(
          item => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        orbits.forEach(
          orbit => {

            const current =
              parseFloat(
                getComputedStyle(
                  orbit
                ).animationDuration
              );


            /*
              The original CSS duration
              is stored in seconds.
            */

            const base =
              orbit.dataset.baseSpeed ||
              current;


            orbit.dataset.baseSpeed =
              base;


            orbit.style.animationDuration =
              `${Number(base) / speed}s`;

          }
        );

      }
    );

  }
);


/* =========================
   RESET
========================= */

resetView.addEventListener(
  "click",
  () => {

    closePlanet();


    paused =
      false;


    orbits.forEach(
      orbit => {

        orbit.classList.remove(
          "paused"
        );

        orbit.style.animationDuration =
          "";

      }
    );


    pauseIcon.textContent =
      "Ⅱ";

    pauseText.textContent =
      "Pause";


    speedButtons.forEach(
      button => {

        button.classList.remove(
          "active"
        );

        if (
          button.dataset.speed === "1"
        ) {

          button.classList.add(
            "active"
          );

        }

      }
    );

  }
);


/* =========================
   ESCAPE
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closePlanet();

    }

  }
);


/* =========================
   BACKGROUND CLICK
========================= */

document.addEventListener(
  "click",
  event => {

    if (
      infoPanel.classList.contains(
        "open"
      ) &&
      !infoPanel.contains(event.target)
    ) {

      closePlanet();

    }

  }
);
