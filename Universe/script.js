/* =========================================================
   UNIVERSE EXPLORER
   COMPLETE CLEAN JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   PLANET DATABASE
   ========================================================= */

const planets = {

  Mercury: {
    type: "Rocky Planet",
    diameter: "4,879 km",
    day: "1,407.6 hours",
    year: "87.97 days",
    gravity: "3.70 m/s²",
    moons: "0",
    temperature: "167°C",
    orbit: "0.39 AU",
    sunDistance: 57.9e6,
    color: "mercury",

    description:
      "Mercury is the smallest planet and the closest planet to the Sun.",

    fact:
      "A year on Mercury lasts only about 88 Earth days."
  },


  Venus: {
    type: "Rocky Planet",
    diameter: "12,104 km",
    day: "5,832 hours",
    year: "224.7 days",
    gravity: "8.87 m/s²",
    moons: "0",
    temperature: "464°C",
    orbit: "0.72 AU",
    sunDistance: 108.2e6,
    color: "venus",

    description:
      "Venus is a hot world covered by a thick carbon-dioxide atmosphere.",

    fact:
      "Venus rotates so slowly that one Venus day is longer than its year."
  },


  Earth: {
    type: "Rocky Planet",
    diameter: "12,742 km",
    day: "23.93 hours",
    year: "365.25 days",
    gravity: "9.81 m/s²",
    moons: "1",
    temperature: "15°C",
    orbit: "1.00 AU",
    sunDistance: 149.6e6,
    color: "earth",

    description:
      "Earth is our home planet and the only world currently known to support life.",

    fact:
      "About 71% of Earth's surface is covered by oceans."
  },


  Mars: {
    type: "Rocky Planet",
    diameter: "6,779 km",
    day: "24.62 hours",
    year: "687 days",
    gravity: "3.71 m/s²",
    moons: "2",
    temperature: "-63°C",
    orbit: "1.52 AU",
    sunDistance: 227.9e6,
    color: "mars",

    description:
      "Mars is a cold desert world with a thin atmosphere and a reddish surface.",

    fact:
      "Mars has the largest volcano known in the Solar System, Olympus Mons."
  },


  Jupiter: {
    type: "Gas Giant",
    diameter: "139,820 km",
    day: "9.93 hours",
    year: "11.86 years",
    gravity: "24.79 m/s²",
    moons: "95+",
    temperature: "-110°C",
    orbit: "5.20 AU",
    sunDistance: 778.5e6,
    color: "jupiter",

    description:
      "Jupiter is the largest planet in the Solar System.",

    fact:
      "Jupiter's Great Red Spot is a giant storm that has lasted for centuries."
  },


  Saturn: {
    type: "Gas Giant",
    diameter: "116,460 km",
    day: "10.7 hours",
    year: "29.45 years",
    gravity: "10.44 m/s²",
    moons: "140+",
    temperature: "-140°C",
    orbit: "9.58 AU",
    sunDistance: 1.434e9,
    color: "saturn",

    description:
      "Saturn is a gas giant famous for its extensive system of icy rings.",

    fact:
      "Saturn is less dense than water at average density."
  },


  Uranus: {
    type: "Ice Giant",
    diameter: "50,724 km",
    day: "17.2 hours",
    year: "84 years",
    gravity: "8.69 m/s²",
    moons: "28",
    temperature: "-195°C",
    orbit: "19.2 AU",
    sunDistance: 2.871e9,
    color: "uranus",

    description:
      "Uranus is an ice giant with a blue-green atmosphere and an unusual sideways rotation.",

    fact:
      "Uranus rotates at an extreme axial tilt of about 98 degrees."
  },


  Neptune: {
    type: "Ice Giant",
    diameter: "49,244 km",
    day: "16.1 hours",
    year: "164.8 years",
    gravity: "11.15 m/s²",
    moons: "16",
    temperature: "-200°C",
    orbit: "30.1 AU",
    sunDistance: 4.495e9,
    color: "neptune",

    description:
      "Neptune is the outermost major planet of the Solar System.",

    fact:
      "Neptune has some of the fastest winds measured anywhere in the Solar System."
  }

};


/* =========================================================
   SUN DATA
   ========================================================= */

const sunData = {

  type: "Star",

  diameter: "1.39 million km",

  day: "≈ 25–35 days",

  year: "≈ 230 million years",

  gravity: "274 m/s²",

  moons: "—",

  temperature:
    "≈ 5,500°C surface",

  orbit:
    "Galactic orbit",

  description:
    "The Sun is the star at the centre of our Solar System.",

  fact:
    "The Sun contains almost all of the mass in the Solar System."

};


/* =========================================================
   ELEMENTS
   ========================================================= */

const space =
  document.getElementById("space");

const spaceView =
  document.getElementById("spaceView");

const pauseBtn =
  document.getElementById("pauseBtn");

const pauseIcon =
  document.getElementById("pauseIcon");

const pauseText =
  document.getElementById("pauseText");

const resetView =
  document.getElementById("resetView");

const zoomIn =
  document.getElementById("zoomIn");

const zoomOut =
  document.getElementById("zoomOut");

const zoomValue =
  document.getElementById("zoomValue");

const simulationDot =
  document.getElementById("simulationDot");

const simulationText =
  document.getElementById("simulationText");

const followIndicator =
  document.getElementById("followIndicator");

const followingName =
  document.getElementById("followingName");

const stopFollow =
  document.getElementById("stopFollow");

const followBtn =
  document.getElementById("followBtn");

const planetPanel =
  document.getElementById("planetPanel");

const panelEmpty =
  document.getElementById("panelEmpty");

const planetInfo =
  document.getElementById("planetInfo");

const infoName =
  document.getElementById("infoName");

const infoDescription =
  document.getElementById("infoDescription");

const infoType =
  document.getElementById("infoType");

const infoDiameter =
  document.getElementById("infoDiameter");

const infoDay =
  document.getElementById("infoDay");

const infoYear =
  document.getElementById("infoYear");

const infoGravity =
  document.getElementById("infoGravity");

const infoMoons =
  document.getElementById("infoMoons");

const infoTemperature =
  document.getElementById("infoTemperature");

const infoOrbit =
  document.getElementById("infoOrbit");

const infoFact =
  document.getElementById("infoFact");

const largePlanet =
  document.getElementById("largePlanet");

const sunDistance =
  document.getElementById("sunDistance");

const sunDistanceSub =
  document.getElementById("sunDistanceSub");

const earthDistance =
  document.getElementById("earthDistance");

const earthDistanceSub =
  document.getElementById("earthDistanceSub");

const settingsBtn =
  document.getElementById("settingsBtn");

const settingsOverlay =
  document.getElementById("settingsOverlay");

const closeSettings =
  document.getElementById("closeSettings");

const doneSettings =
  document.getElementById("doneSettings");

const restoreSettings =
  document.getElementById("restoreSettings");

const settingOrbits =
  document.getElementById("settingOrbits");

const settingLabels =
  document.getElementById("settingLabels");

const settingMoon =
  document.getElementById("settingMoon");

const settingTrails =
  document.getElementById("settingTrails");


/* =========================================================
   STATE
   ========================================================= */

let isPaused = false;

let speed = 1;

let zoom = 1;

let selectedPlanet = null;

let followedPlanet = null;


/* =========================================================
   SPEED
   ========================================================= */

const speedButtons =
  document.querySelectorAll(
    "[data-speed]"
  );


function updateSpeed(newSpeed) {

  speed = Number(newSpeed);

  speedButtons.forEach(button => {

    button.classList.toggle(
      "active",
      Number(button.dataset.speed) === speed
    );

  });

  updateOrbitSpeed();

}


function updateOrbitSpeed() {

  const baseTimes = {

    mercury: 4,
    venus: 7,
    earth: 10,
    mars: 15,
    jupiter: 24,
    saturn: 30,
    uranus: 38,
    neptune: 48

  };


  document
    .querySelectorAll(".orbit")
    .forEach(orbit => {

      const key =
        orbit.dataset.orbit;

      const base =
        baseTimes[key] || 10;

      orbit.style.setProperty(
        "--orbit-time",
        `${base / speed}s`
      );

      orbit.classList.toggle(
        "paused",
        isPaused
      );

    });


  const moon =
    document.querySelector(".moon-orbit");

  if (moon) {

    moon.style.animationDuration =
      `${2.5 / speed}s`;

    moon.style.animationPlayState =
      isPaused
        ? "paused"
        : "running";

  }

}


/* =========================================================
   PAUSE / RESUME
   ========================================================= */

function togglePause() {

  isPaused = !isPaused;

  document
    .querySelectorAll(".orbit")
    .forEach(orbit => {

      orbit.classList.toggle(
        "paused",
        isPaused
      );

    });


  const moon =
    document.querySelector(".moon-orbit");

  if (moon) {

    moon.style.animationPlayState =
      isPaused
        ? "paused"
        : "running";

  }


  pauseIcon.textContent =
    isPaused
      ? "▶"
      : "Ⅱ";

  pauseText.textContent =
    isPaused
      ? "Resume"
      : "Pause";


  simulationText.textContent =
    isPaused
      ? "SIMULATION PAUSED"
      : "SIMULATION RUNNING";


  simulationDot.classList.toggle(
    "paused",
    isPaused
  );

}


pauseBtn.addEventListener(
  "click",
  togglePause
);


/* =========================================================
   ZOOM
   ========================================================= */

function updateZoom() {

  space.style.transform =
    `translate(-50%, -50%) scale(${zoom})`;

  zoomValue.textContent =
    `${Math.round(zoom * 100)}%`;

}


zoomIn.addEventListener(
  "click",
  () => {

    zoom =
      Math.min(
        1.8,
        +(zoom + .1).toFixed(1)
      );

    updateZoom();

  }
);


zoomOut.addEventListener(
  "click",
  () => {

    zoom =
      Math.max(
        .6,
        +(zoom - .1).toFixed(1)
      );

    updateZoom();

  }
);


/* =========================================================
   FORMAT DISTANCE
   ========================================================= */

function formatDistance(km) {

  if (km < 1000) {

    return `${Math.round(km).toLocaleString()} km`;

  }

  if (km < 1e6) {

    return `${Math.round(km / 1000).toLocaleString()} thousand km`;

  }

  if (km < 1e9) {

    return `${(km / 1e6).toFixed(1)} million km`;

  }

  return `${(km / 1e9).toFixed(2)} billion km`;

}


/* =========================================================
   EARTH DISTANCE
   ========================================================= */

/*
  This is the difference between the planets'
  average orbital radii.

  It is NOT the live instantaneous distance,
  because the planets continuously move and their
  real positions require ephemeris data.

  Therefore the UI explicitly labels it as
  "average orbital separation".
*/

function calculateEarthDistance(name) {

  if (name === "Earth") {

    return 0;

  }


  const earth =
    planets.Earth.sunDistance;

  const target =
    planets[name].sunDistance;


  return Math.abs(
    target - earth
  );

}


/* =========================================================
   SHOW PLANET
   ========================================================= */

function showPlanet(name) {

  const data =
    planets[name];

  if (!data) return;

  selectedPlanet =
    name;


  panelEmpty.classList.add(
    "hidden"
  );

  planetInfo.classList.remove(
    "hidden"
  );


  infoName.textContent =
    name;

  infoDescription.textContent =
    data.description;

  infoType.textContent =
    data.type;

  infoDiameter.textContent =
    data.diameter;

  infoDay.textContent =
    data.day;

  infoYear.textContent =
    data.year;

  infoGravity.textContent =
    data.gravity;

  infoMoons.textContent =
    data.moons;

  infoTemperature.textContent =
    data.temperature;

  infoOrbit.textContent =
    data.orbit;

  infoFact.textContent =
    data.fact;


  sunDistance.textContent =
    formatDistance(
      data.sunDistance
    );

  sunDistanceSub.textContent =
    "Average distance from the Sun";


  const earthKm =
    calculateEarthDistance(name);


  earthDistance.textContent =
    formatDistance(earthKm);


  earthDistanceSub.textContent =
    name === "Earth"
      ? "You are here"
      : "Average orbital separation";


  largePlanet.className =
    `large-planet ${data.color}-preview`;


  highlightPlanet(name);


  planetPanel.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });


  if (
    followedPlanet &&
    followedPlanet !== name
  ) {

    stopFollowing();

  }

}


/* =========================================================
   PLANET HIGHLIGHT
   ========================================================= */

function highlightPlanet(name) {

  document
    .querySelectorAll(".planet")
    .forEach(planet => {

      planet.classList.toggle(
        "selected",
        planet.dataset.planet === name
      );

    });

}


/* =========================================================
   PLANET CLICK
   ========================================================= */

document
  .querySelectorAll(".planet")
  .forEach(planet => {

    planet.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        showPlanet(
          planet.dataset.planet
        );

      }
    );

  });


/* =========================================================
   SUN
   ========================================================= */

document
  .getElementById("sunObject")
  .addEventListener(
    "click",
    () => {

      selectedPlanet =
        "Sun";


      panelEmpty.classList.add(
        "hidden"
      );

      planetInfo.classList.remove(
        "hidden"
      );


      infoName.textContent =
        "Sun";

      infoDescription.textContent =
        sunData.description;

      infoType.textContent =
        sunData.type;

      infoDiameter.textContent =
        sunData.diameter;

      infoDay.textContent =
        sunData.day;

      infoYear.textContent =
        sunData.year;

      infoGravity.textContent =
        sunData.gravity;

      infoMoons.textContent =
        sunData.moons;

      infoTemperature.textContent =
        sunData.temperature;

      infoOrbit.textContent =
        sunData.orbit;

      infoFact.textContent =
        sunData.fact;


      sunDistance.textContent =
        "0 km";

      sunDistanceSub.textContent =
        "The Sun itself";


      earthDistance.textContent =
        formatDistance(
          planets.Earth.sunDistance
        );

      earthDistanceSub.textContent =
        "Earth → Sun average distance";


      largePlanet.className =
        "large-planet sun-preview";


      highlightPlanet("");

    }
  );


/* =========================================================
   MOON
   ========================================================= */

document
  .querySelector(".moon")
  .addEventListener(
    "click",
    event => {

      event.stopPropagation();

      selectedPlanet =
        "Moon";


      panelEmpty.classList.add(
        "hidden"
      );

      planetInfo.classList.remove(
        "hidden"
      );


      infoName.textContent =
        "Moon";

      infoDescription.textContent =
        "Earth's natural satellite and our closest major celestial neighbour.";

      infoType.textContent =
        "Natural Satellite";

      infoDiameter.textContent =
        "3,474 km";

      infoDay.textContent =
        "≈ 655.7 hours";

      infoYear.textContent =
        "≈ 27.3 days";

      infoGravity.textContent =
        "1.62 m/s²";

      infoMoons.textContent =
        "0";

      infoTemperature.textContent =
        "≈ -173 to 127°C";

      infoOrbit.textContent =
        "384,400 km from Earth";

      infoFact.textContent =
        "The Moon is tidally locked to Earth, so we mostly see the same side.";


      sunDistance.textContent =
        "≈ 149.6 million km";

      sunDistanceSub.textContent =
        "Approximate distance from Sun";


      earthDistance.textContent =
        "384,400 km";

      earthDistanceSub.textContent =
        "Average Earth → Moon distance";


      largePlanet.className =
        "large-planet moon-preview";


      highlightPlanet("");

    }
  );


/* =========================================================
   FOLLOW PLANET
   ========================================================= */

followBtn.addEventListener(
  "click",
  () => {

    if (
      !selectedPlanet ||
      selectedPlanet === "Sun" ||
      selectedPlanet === "Moon"
    ) {

      return;

    }

    followedPlanet =
      selectedPlanet;

    followingName.textContent =
      followedPlanet;

    followIndicator.classList.remove(
      "hidden"
    );

    followBtn.innerHTML =
      "◎ Following Planet";

  }
);


function stopFollowing() {

  followedPlanet =
    null;

  followIndicator.classList.add(
    "hidden"
  );

  followBtn.innerHTML =
    "◎ Follow Planet";

}


stopFollow.addEventListener(
  "click",
  stopFollowing
);


/* =========================================================
   RESET
   ========================================================= */

resetView.addEventListener(
  "click",
  () => {

    zoom = 1;

    updateZoom();

    updateSpeed(1);

    isPaused = false;

    document
      .querySelectorAll(".orbit")
      .forEach(orbit => {

        orbit.classList.remove(
          "paused"
        );

      });


    const moon =
      document.querySelector(".moon-orbit");

    if (moon) {

      moon.style.animationPlayState =
        "running";

    }


    pauseIcon.textContent =
      "Ⅱ";

    pauseText.textContent =
      "Pause";

    simulationText.textContent =
      "SIMULATION RUNNING";

    simulationDot.classList.remove(
      "paused"
    );


    stopFollowing();

  }
);


/* =========================================================
   SPEED BUTTONS
   ========================================================= */

speedButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        updateSpeed(
          button.dataset.speed
        );

      }
    );

  }
);


/* =========================================================
   SETTINGS
   ========================================================= */

function openSettings() {

  settingsOverlay.classList.add(
    "open"
  );

  settingsOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeSettingsPanel() {

  settingsOverlay.classList.remove(
    "open"
  );

  settingsOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

}


settingsBtn.addEventListener(
  "click",
  openSettings
);


closeSettings.addEventListener(
  "click",
  closeSettingsPanel
);


doneSettings.addEventListener(
  "click",
  closeSettingsPanel
);


settingsOverlay.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      settingsOverlay
    ) {

      closeSettingsPanel();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeSettingsPanel();

    }

  }
);


/* =========================================================
   SETTINGS — ORBITS
   ========================================================= */

settingOrbits.addEventListener(
  "change",
  () => {

    document
      .querySelectorAll(".orbit")
      .forEach(orbit => {

        orbit.style.borderColor =
          settingOrbits.checked
            ? ""
            : "transparent";

      });

  }
);


/* =========================================================
   SETTINGS — LABELS
   ========================================================= */

settingLabels.addEventListener(
  "change",
  () => {

    document
      .querySelectorAll(".planet-name")
      .forEach(label => {

        label.style.display =
          settingLabels.checked
            ? ""
            : "none";

      });

  }
);


/* =========================================================
   SETTINGS — MOON
   ========================================================= */

settingMoon.addEventListener(
  "change",
  () => {

    const moonOrbit =
      document.querySelector(
        ".moon-orbit"
      );

    if (!moonOrbit) return;

    moonOrbit.style.display =
      settingMoon.checked
        ? ""
        : "none";

  }
);


/* =========================================================
   SETTINGS — TRAILS
   ========================================================= */

settingTrails.addEventListener(
  "change",
  () => {

    document.body.classList.toggle(
      "trails-enabled",
      settingTrails.checked
    );

  }
);


/* =========================================================
   RESTORE SETTINGS
   ========================================================= */

restoreSettings.addEventListener(
  "click",
  () => {

    settingOrbits.checked =
      true;

    settingLabels.checked =
      true;

    settingMoon.checked =
      true;

    settingTrails.checked =
      false;


    document
      .querySelectorAll(".orbit")
      .forEach(orbit => {

        orbit.style.borderColor =
          "";

      });


    document
      .querySelectorAll(".planet-name")
      .forEach(label => {

        label.style.display =
          "";

      });


    const moonOrbit =
      document.querySelector(
        ".moon-orbit"
      );

    if (moonOrbit) {

      moonOrbit.style.display =
        "";

    }


    document.body.classList.remove(
      "trails-enabled"
    );

  }
);


/* =========================================================
   KEYBOARD PLANET ACCESS
   ========================================================= */

document
  .querySelectorAll(".planet")
  .forEach(planet => {

    planet.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          showPlanet(
            planet.dataset.planet
          );

        }

      }
    );

  });


/* =========================================================
   INITIALIZE
   ========================================================= */

updateSpeed(1);

updateZoom();

console.log(
  "Universe Explorer initialized successfully."
);
