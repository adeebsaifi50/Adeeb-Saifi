/* =====================================================
   LIFE COUNTER
===================================================== */

const birthDateInput =
    document.getElementById("birthDate");

const birthTimeInput =
    document.getElementById("birthTime");

const calculateButton =
    document.getElementById("calculateButton");

const resetButton =
    document.getElementById("resetButton");

const loadingSection =
    document.getElementById("loadingSection");

const resultsSection =
    document.getElementById("resultsSection");

const loadingTitle =
    document.getElementById("loadingTitle");

const loadingText =
    document.getElementById("loadingText");

const progressBar =
    document.getElementById("progressBar");


let birthDate = null;

let liveTimer = null;

let birthdayTimer = null;


/* =====================================================
   MAXIMUM DATE
===================================================== */

function setMaximumBirthDate() {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");

    const day =
        String(today.getDate())
        .padStart(2, "0");

    birthDateInput.max =
        `${year}-${month}-${day}`;
}

setMaximumBirthDate();


/* =====================================================
   DATE CREATION
===================================================== */

function createBirthDate() {

    const dateValue =
        birthDateInput.value;

    if (!dateValue) {
        return null;
    }


    const [
        year,
        month,
        day
    ] = dateValue
        .split("-")
        .map(Number);


    let hours = 0;

    let minutes = 0;


    if (birthTimeInput.value) {

        const [
            h,
            m
        ] = birthTimeInput.value
            .split(":")
            .map(Number);

        hours = h;

        minutes = m;
    }


    return new Date(
        year,
        month - 1,
        day,
        hours,
        minutes,
        0,
        0
    );
}


/* =====================================================
   FORMAT NUMBER
===================================================== */

function formatNumber(number) {

    return new Intl.NumberFormat(
        "en-US"
    ).format(number);
}


/* =====================================================
   EXACT AGE
===================================================== */

function calculateExactAge(birth, now) {

    let years =
        now.getFullYear() -
        birth.getFullYear();

    let months =
        now.getMonth() -
        birth.getMonth();

    let days =
        now.getDate() -
        birth.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    return {
        years,
        months,
        days
    };
}


/* =====================================================
   TOTAL TIME
===================================================== */

function calculateTotals(birth, now) {

    const difference =
        now.getTime() -
        birth.getTime();


    const seconds =
        Math.floor(
            difference / 1000
        );


    const minutes =
        Math.floor(
            seconds / 60
        );


    const hours =
        Math.floor(
            seconds / 3600
        );


    const days =
        Math.floor(
            seconds / 86400
        );


    return {
        seconds,
        minutes,
        hours,
        days
    };
}


/* =====================================================
   BIRTH DAY
===================================================== */

function getBirthDay(birth) {

    return birth.toLocaleDateString(
        "en-US",
        {
            weekday: "long"
        }
    );
}


/* =====================================================
   DATE DISPLAY
===================================================== */

function formatDate(date) {

    return date.toLocaleDateString(
        "en-US",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


/* =====================================================
   NEXT BIRTHDAY
===================================================== */

function getNextBirthday(birth, now) {

    let nextBirthday =
        new Date(
            now.getFullYear(),
            birth.getMonth(),
            birth.getDate()
        );


    /*
       If this year's birthday
       has already passed,
       use next year.
    */

    if (
        nextBirthday.getTime() <=
        now.getTime()
    ) {

        nextBirthday =
            new Date(
                now.getFullYear() + 1,
                birth.getMonth(),
                birth.getDate()
            );
    }


    /*
       Preserve birth time
       if supplied.
    */

    if (birthTimeInput.value) {

        nextBirthday.setHours(
            birth.getHours(),
            birth.getMinutes(),
            0,
            0
        );
    }


    return nextBirthday;
}


/* =====================================================
   COUNTDOWN
===================================================== */

function updateBirthdayCountdown() {

    if (!birthDate) {
        return;
    }


    const now =
        new Date();


    const nextBirthday =
        getNextBirthday(
            birthDate,
            now
        );


    let difference =
        nextBirthday.getTime() -
        now.getTime();


    if (difference < 0) {
        return;
    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById(
        "countDays"
    ).textContent =
        formatNumber(days);


    document.getElementById(
        "countHours"
    ).textContent =
        String(hours)
        .padStart(2, "0");


    document.getElementById(
        "countMinutes"
    ).textContent =
        String(minutes)
        .padStart(2, "0");


    document.getElementById(
        "countSeconds"
    ).textContent =
        String(seconds)
        .padStart(2, "0");


    /*
       Update birthday text
       automatically after midnight.
    */

    document.getElementById(
        "nextBirthday"
    ).textContent =
        nextBirthday.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    document.getElementById(
        "nextBirthdayDate"
    ).textContent =
        formatDate(nextBirthday);
}


/* =====================================================
   UPDATE LIFE STATS
===================================================== */

function updateLifeStats() {

    if (!birthDate) {
        return;
    }


    const now =
        new Date();


    const age =
        calculateExactAge(
            birthDate,
            now
        );


    const totals =
        calculateTotals(
            birthDate,
            now
        );


    /* Exact Age */

    document.getElementById(
        "exactAge"
    ).textContent =
        `${age.years} Years • ` +
        `${age.months} Months • ` +
        `${age.days} Days`;


    /* Total Days */

    document.getElementById(
        "daysValue"
    ).textContent =
        formatNumber(
            totals.days
        );


    /* Total Hours */

    document.getElementById(
        "hoursValue"
    ).textContent =
        formatNumber(
            totals.hours
        );


    /* Total Minutes */

    document.getElementById(
        "minutesValue"
    ).textContent =
        formatNumber(
            totals.minutes
        );


    /* LIVE SECONDS */

    document.getElementById(
        "secondsValue"
    ).textContent =
        formatNumber(
            totals.seconds
        );


    /* Birth Day */

    document.getElementById(
        "birthDay"
    ).textContent =
        getBirthDay(
            birthDate
        );


    /* Birth Date */

    document.getElementById(
        "birthDateDisplay"
    ).textContent =
        formatDate(
            birthDate
        );


    updateBirthdayCountdown();
}


/* =====================================================
   CALCULATION ANIMATION
===================================================== */

function runCalculationAnimation() {

    loadingSection.style.display =
        "block";

    resultsSection.style.display =
        "none";


    const steps = [

        {
            title:
                "Calculating your life...",
            text:
                "Reading your birth date",
            progress:
                20
        },

        {
            title:
                "Counting your years...",
            text:
                "Calculating your exact age",
            progress:
                40
        },

        {
            title:
                "Counting your time...",
            text:
                "Converting days, hours and minutes",
            progress:
                60
        },

        {
            title:
                "Counting your seconds...",
            text:
                "Preparing your live counter",
            progress:
                80
        },

        {
            title:
                "Finding your birthday...",
            text:
                "Almost ready",
            progress:
                100
        }

    ];


    let currentStep = 0;


    function nextStep() {

        const step =
            steps[currentStep];


        loadingTitle.textContent =
            step.title;

        loadingText.textContent =
            step.text;

        progressBar.style.width =
            step.progress + "%";


        currentStep++;


        if (
            currentStep <
            steps.length
        ) {

            setTimeout(
                nextStep,
                480
            );

        } else {

            setTimeout(
                showResults,
                650
            );
        }
    }


    nextStep();
}


/* =====================================================
   SHOW RESULTS
===================================================== */

function showResults() {

    loadingSection.style.display =
        "none";


    resultsSection.style.display =
        "block";


    resultsSection.classList.remove(
        "result-reveal"
    );


    void resultsSection.offsetWidth;


    resultsSection.classList.add(
        "result-reveal"
    );


    updateLifeStats();


    /*
       Live update every second.
    */

    clearInterval(
        liveTimer
    );

    liveTimer =
        setInterval(
            updateLifeStats,
            1000
        );


    clearInterval(
        birthdayTimer
    );

    birthdayTimer =
        setInterval(
            updateBirthdayCountdown,
            1000
        );


    setTimeout(
        () => {

            resultsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        200
    );
}


/* =====================================================
   CALCULATE BUTTON
===================================================== */

calculateButton.addEventListener(
    "click",
    function() {

        const selectedBirthDate =
            createBirthDate();


        if (!selectedBirthDate) {

            alert(
                "Please enter your date of birth."
            );

            return;
        }


        const now =
            new Date();


        if (
            selectedBirthDate >
            now
        ) {

            alert(
                "Birth date cannot be in the future."
            );

            return;
        }


        birthDate =
            selectedBirthDate;


        clearInterval(
            liveTimer
        );

        clearInterval(
            birthdayTimer
        );


        runCalculationAnimation();
    }
);


/* =====================================================
   RESET
===================================================== */

resetButton.addEventListener(
    "click",
    function() {

        clearInterval(
            liveTimer
        );

        clearInterval(
            birthdayTimer
        );


        birthDate =
            null;


        birthDateInput.value =
            "";

        birthTimeInput.value =
            "";


        resultsSection.style.display =
            "none";

        loadingSection.style.display =
            "none";


        progressBar.style.width =
            "0%";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =====================================================
   ENTER KEY
===================================================== */

birthDateInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            calculateButton.click();

        }
    }
);

birthTimeInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            calculateButton.click();

        }
    }
);

/* =========================================================
   UNIVERSE EXPLORER
   PHASE 2
========================================================= */


/* =========================================================
   PLANET DATABASE
========================================================= */

const planets = {

  Mercury: {
    type: "Rocky planet",
    diameter: "4,879 km",
    year: "88 days",
    day: "58.6 days",
    gravity: "3.70 m/s²",
    moons: "0",
    sunDistance: 57.9,
    description:
      "The smallest planet and the closest planet to the Sun.",
    fact:
      "Mercury completes one orbit around the Sun in only 88 Earth days."
  },

  Venus: {
    type: "Rocky planet",
    diameter: "12,104 km",
    year: "224.7 days",
    day: "243 days",
    gravity: "8.87 m/s²",
    moons: "0",
    sunDistance: 108.2,
    description:
      "A rocky world wrapped in a thick atmosphere and intense heat.",
    fact:
      "Venus rotates so slowly that one Venusian day is longer than its year."
  },

  Earth: {
    type: "Rocky planet",
    diameter: "12,742 km",
    year: "365.25 days",
    day: "23h 56m",
    gravity: "9.81 m/s²",
    moons: "1",
    sunDistance: 149.6,
    description:
      "Our home planet and the only world currently known to support life.",
    fact:
      "Earth is the only known astronomical body to naturally support life."
  },

  Mars: {
    type: "Rocky planet",
    diameter: "6,779 km",
    year: "687 days",
    day: "24h 37m",
    gravity: "3.71 m/s²",
    moons: "2",
    sunDistance: 227.9,
    description:
      "The cold, dusty red planet with a thin atmosphere.",
    fact:
      "Mars has the largest volcano known in the Solar System: Olympus Mons."
  },

  Jupiter: {
    type: "Gas giant",
    diameter: "139,820 km",
    year: "11.86 years",
    day: "9h 56m",
    gravity: "24.79 m/s²",
    moons: "95+",
    sunDistance: 778.5,
    description:
      "The largest planet in our Solar System.",
    fact:
      "Jupiter is more than twice as massive as all the other planets combined."
  },

  Saturn: {
    type: "Gas giant",
    diameter: "116,460 km",
    year: "29.45 years",
    day: "10h 42m",
    gravity: "10.44 m/s²",
    moons: "140+",
    sunDistance: 1432,
    description:
      "A gas giant famous for its spectacular ring system.",
    fact:
      "Saturn's rings are made mostly of countless pieces of ice and rock."
  },

  Uranus: {
    type: "Ice giant",
    diameter: "50,724 km",
    year: "84 years",
    day: "17h 14m",
    gravity: "8.69 m/s²",
    moons: "28",
    sunDistance: 2867,
    description:
      "An ice giant with an extreme axial tilt.",
    fact:
      "Uranus rotates on its side with an axial tilt of roughly 98 degrees."
  },

  Neptune: {
    type: "Ice giant",
    diameter: "49,244 km",
    year: "164.8 years",
    day: "16h 6m",
    gravity: "11.15 m/s²",
    moons: "16",
    sunDistance: 4515,
    description:
      "The most distant recognized planet in our Solar System.",
    fact:
      "Neptune takes almost 165 Earth years to complete one orbit around the Sun."
  }

};


/* =========================================================
   VISUAL PLANET COLORS
========================================================= */

const planetStyles = {

  Mercury:
    "radial-gradient(circle at 32% 28%, #e1ddd4, #8c857a 48%, #4d4945)",

  Venus:
    "repeating-linear-gradient(160deg, #e4bd75 0 3px, #b87937 4px 6px, #f0ce8c 7px 9px)",

  Earth:
    "radial-gradient(circle at 30% 25%, #72e1ff, #277dc4 43%, #174b7d 70%, #0b2038)",

  Mars:
    "radial-gradient(circle at 30% 28%, #e99a78, #b74730 52%, #67251b)",

  Jupiter:
    "repeating-linear-gradient(175deg, #c69b70 0 3px, #ead2ad 4px 6px, #9a7456 7px 9px, #d4b28d 10px 13px, #8b6247 14px 17px)",

  Saturn:
    "repeating-linear-gradient(170deg, #d9c28e 0 3px, #a48b60 4px 6px, #e2cd9a 7px 9px)",

  Uranus:
    "radial-gradient(circle at 32% 28%, #d3ffff, #77cbd0 48%, #3c8f9c)",

  Neptune:
    "radial-gradient(circle at 30% 27%, #9dc5ff, #376ec0 48%, #17366f)"

};


/* =========================================================
   DOM
========================================================= */

const infoPanel =
  document.getElementById("infoPanel");

const panelClose =
  document.getElementById("panelClose");

const panelBackdrop =
  document.getElementById("panelBackdrop");

const largePlanet =
  document.getElementById("largePlanet");

const infoName =
  document.getElementById("infoName");

const infoDescription =
  document.getElementById("infoDescription");

const infoType =
  document.getElementById("infoType");

const infoDiameter =
  document.getElementById("infoDiameter");

const infoYear =
  document.getElementById("infoYear");

const infoDay =
  document.getElementById("infoDay");

const infoGravity =
  document.getElementById("infoGravity");

const infoMoons =
  document.getElementById("infoMoons");

const infoFact =
  document.getElementById("infoFact");

const earthDistance =
  document.getElementById("earthDistance");

const earthDistanceSub =
  document.getElementById("earthDistanceSub");

const sunDistance =
  document.getElementById("sunDistance");

const followBtn =
  document.getElementById("followBtn");

const compareBtn =
  document.getElementById("compareBtn");

const followIndicator =
  document.getElementById("followIndicator");

const followName =
  document.getElementById("followName");

const solarSystem =
  document.getElementById("solarSystem");

const camera =
  document.getElementById("camera");

const zoomValue =
  document.getElementById("zoomValue");

const simulationDate =
  document.getElementById("simulationDate");

const pauseBtn =
  document.getElementById("pauseBtn");

const pauseIcon =
  document.getElementById("pauseIcon");

const pauseText =
  document.getElementById("pauseText");

const resetBtn =
  document.getElementById("resetBtn");

const zoomIn =
  document.getElementById("zoomIn");

const zoomOut =
  document.getElementById("zoomOut");

const planetSearch =
  document.getElementById("planetSearch");

const searchResults =
  document.getElementById("searchResults");

const fullscreenBtn =
  document.getElementById("fullscreenBtn");

const compareModal =
  document.getElementById("compareModal");

const modalClose =
  document.getElementById("modalClose");

const comparePlanet =
  document.getElementById("comparePlanet");

const comparePlanetName =
  document.getElementById("comparePlanetName");

const comparePlanetLabel =
  document.getElementById("comparePlanetLabel");

const compareDiameter =
  document.getElementById("compareDiameter");

const compareGravity =
  document.getElementById("compareGravity");

const compareYear =
  document.getElementById("compareYear");


/* =========================================================
   ORBITS
========================================================= */

const orbitElements =
  document.querySelectorAll(".orbit");


/* =========================================================
   STATE
========================================================= */

let selectedPlanet = null;

let followedPlanet = null;

let paused = false;

let simulationSpeed = 1;

let simulationDays = 1;

let zoom = 1;


/* =========================================================
   PLANET ORBIT DATA
========================================================= */

/*
   These values are normalized orbital radii for
   the visualization.

   They are NOT physical screen distances.
*/

const orbitRadius = {

  Mercury: 0.06,
  Venus: 0.105,
  Earth: 0.15,
  Mars: 0.20,
  Jupiter: 0.265,
  Saturn: 0.33,
  Uranus: 0.39,
  Neptune: 0.45

};


/* =========================================================
   ORBITAL PERIODS
========================================================= */

const orbitalPeriods = {

  Mercury: 87.969,
  Venus: 224.701,
  Earth: 365.256,
  Mars: 686.98,
  Jupiter: 4332.59,
  Saturn: 10759.22,
  Uranus: 30688.5,
  Neptune: 60182

};


/* =========================================================
   PLANET PHASES
========================================================= */

const startingAngles = {

  Mercury: 20,
  Venus: 80,
  Earth: 140,
  Mars: 210,
  Jupiter: 275,
  Saturn: 330,
  Uranus: 35,
  Neptune: 110

};


/* =========================================================
   COLOR HELPER
========================================================= */

function setPlanetVisual(element, name) {

  if (!element) return;

  element.style.background =
    planetStyles[name] || "";

}


/* =========================================================
   OPEN PLANET PANEL
========================================================= */

function openPlanet(name) {

  const data = planets[name];

  if (!data) return;

  selectedPlanet = name;


  infoName.textContent =
    name;

  infoDescription.textContent =
    data.description;

  infoType.textContent =
    data.type;

  infoDiameter.textContent =
    data.diameter;

  infoYear.textContent =
    data.year;

  infoDay.textContent =
    data.day;

  infoGravity.textContent =
    data.gravity;

  infoMoons.textContent =
    data.moons;

  infoFact.textContent =
    data.fact;


  setPlanetVisual(
    largePlanet,
    name
  );


  updateDistancePanel();


  followBtn.innerHTML =
    followedPlanet === name
      ? "<span>◎</span> Following"
      : "<span>◎</span> Follow";


  infoPanel.classList.add(
    "open"
  );

  infoPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  panelBackdrop.classList.add(
    "open"
  );

}


/* =========================================================
   CLOSE PANEL
========================================================= */

function closePanelFunction() {

  infoPanel.classList.remove(
    "open"
  );

  infoPanel.setAttribute(
    "aria-hidden",
    "true"
  );

  panelBackdrop.classList.remove(
    "open"
  );

}


/* =========================================================
   DISTANCE CALCULATION
========================================================= */

/*
   This calculates a simulated heliocentric position
   using circularized orbital paths.

   It is intended as an educational visualization,
   not a precision ephemeris engine.
*/

function getPlanetPosition(name) {

  const data = planets[name];

  if (!data) return null;


  const period =
    orbitalPeriods[name];

  const angle =
    (
      startingAngles[name] +
      (
        simulationDays /
        period
      ) *
      360
    ) % 360;


  const radians =
    angle * Math.PI / 180;


  const radius =
    orbitRadius[name];


  return {

    x:
      radius *
      Math.cos(radians),

    y:
      radius *
      Math.sin(radians)

  };

}


/* =========================================================
   CURRENT EARTH DISTANCE
========================================================= */

function calculateEarthDistance(name) {

  if (name === "Earth") {

    return 0;

  }


  const earth =
    getPlanetPosition("Earth");

  const target =
    getPlanetPosition(name);


  if (!earth || !target) {
    return 0;
  }


  /*
     The normalized radius is mapped to AU
     using the planet's actual average
     heliocentric distance.

     This keeps the display educational.
  */

  const earthAU =
    planets.Earth.sunDistance / 149.5978707;

  const targetAU =
    planets[name].sunDistance / 149.5978707;


  const earthX =
    earth.x /
    orbitRadius.Earth *
    earthAU;

  const earthY =
    earth.y /
    orbitRadius.Earth *
    earthAU;

  const targetX =
    target.x /
    orbitRadius[name] *
    targetAU;

  const targetY =
    target.y /
    orbitRadius[name] *
    targetAU;


  const dx =
    targetX - earthX;

  const dy =
    targetY - earthY;


  const distanceAU =
    Math.sqrt(
      dx * dx +
      dy * dy
    );


  return distanceAU * 149.5978707;

}


/* =========================================================
   FORMAT DISTANCE
========================================================= */

function formatDistanceAU(au) {

  if (au === 0) {
    return "0 km";
  }


  const km =
    au * 149.5978707;


  if (km >= 1000000000) {

    return (
      (km / 1000000000)
        .toFixed(2)
      + " billion km"
    );

  }


  if (km >= 1000000) {

    return (
      (km / 1000000)
        .toFixed(2)
      + " million km"
    );

  }


  return (
    Math.round(km)
    .toLocaleString()
    + " km"
  );

}


/* =========================================================
   UPDATE DISTANCE PANEL
========================================================= */

function updateDistancePanel() {

  if (!selectedPlanet) return;


  const distanceAU =
    calculateEarthDistance(
      selectedPlanet
    );


  earthDistance.textContent =
    formatDistanceAU(
      distanceAU
    );


  if (
    selectedPlanet === "Earth"
  ) {

    earthDistanceSub.textContent =
      "You are here";

  } else {

    earthDistanceSub.textContent =
      "Current simulated distance";

  }


  const sunKm =
    planets[selectedPlanet]
      .sunDistance;


  sunDistance.textContent =
    sunKm >= 1000

      ? (
          (
            sunKm /
            149.5978707
          ).toFixed(2)
          + " AU"
        )

      : (
          sunKm.toFixed(1)
          + " million km"
        );

}


/* =========================================================
   PLANET CLICK EVENTS
========================================================= */

document
  .querySelectorAll(".planet")
  .forEach(
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


/* =========================================================
   SUN
========================================================= */

document
  .getElementById("sunObject")
  .addEventListener(
    "click",
    () => {

      selectedPlanet = "Sun";


      infoName.textContent =
        "Sun";

      infoDescription.textContent =
        "The star at the center of our Solar System.";

      infoType.textContent =
        "Star";

      infoDiameter.textContent =
        "1.39 million km";

      infoYear.textContent =
        "≈ 230 million years";

      infoDay.textContent =
        "≈ 25–35 days";

      infoGravity.textContent =
        "274 m/s²";

      infoMoons.textContent =
        "—";

      infoFact.textContent =
        "The Sun contains almost all of the mass in the Solar System.";


      largePlanet.style.background =
        "radial-gradient(circle at 34% 28%, #fff9db, #ffd66f 22%, #ff9a2d 58%, #e74f19)";


      earthDistance.textContent =
        "149.6 million km";

      earthDistanceSub.textContent =
        "Earth → Sun average distance";

      sunDistance.textContent =
        "0 km";


      followBtn.innerHTML =
        "<span>◎</span> Follow";


      infoPanel.classList.add(
        "open"
      );

      infoPanel.setAttribute(
        "aria-hidden",
        "false"
      );

      panelBackdrop.classList.add(
        "open"
      );

    }
  );


/* =========================================================
   FOLLOW MODE
========================================================= */

followBtn.addEventListener(
  "click",
  () => {

    if (
      !selectedPlanet ||
      selectedPlanet === "Sun"
    ) {
      return;
    }


    if (
      followedPlanet === selectedPlanet
    ) {

      followedPlanet =
        null;

      followIndicator.classList.remove(
        "active"
      );

      followBtn.innerHTML =
        "<span>◎</span> Follow";

      camera.style.transform =
        "translate(-50%, -50%)";

      return;

    }


    followedPlanet =
      selectedPlanet;


    followIndicator.classList.add(
      "active"
    );

    followName.textContent =
      selectedPlanet;

    followBtn.innerHTML =
      "<span>◎</span> Following";


    focusPlanet(
      selectedPlanet
    );

  }
);


/* =========================================================
   FOCUS PLANET
========================================================= */

function focusPlanet(name) {

  if (!name) return;


  const element =
    document.querySelector(
      `[data-planet="${name}"]`
    );


  if (!element) return;


  const orbit =
    element.closest(".orbit");


  if (!orbit) return;


  const rect =
    orbit.getBoundingClientRect();


  const view =
    document
      .getElementById("spaceView")
      .getBoundingClientRect();


  const x =
    rect.left +
    rect.width / 2 -
    (
      view.left +
      view.width / 2
    );

  const y =
    rect.top +
    rect.height / 2 -
    (
      view.top +
      view.height / 2
    );


  camera.style.transform =
    `translate(
      calc(-50% - ${x}px),
      calc(-50% - ${y}px)
    )`;

}


/* =========================================================
   PAUSE
========================================================= */

pauseBtn.addEventListener(
  "click",
  () => {

    paused =
      !paused;


    orbitElements.forEach(
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


/* =========================================================
   SPEED CONTROL
========================================================= */

const speedButtons =
  document.querySelectorAll(
    "[data-speed]"
  );


const baseOrbitDurations = {

  mercury: 8,
  venus: 14,
  earth: 18,
  mars: 24,
  jupiter: 34,
  saturn: 43,
  uranus: 52,
  neptune: 60

};


function setSimulationSpeed(speed) {

  simulationSpeed =
    Number(speed);


  orbitElements.forEach(
    orbit => {

      const name =
        orbit.dataset.orbit;

      const base =
        baseOrbitDurations[name];


      if (!base) return;


      orbit.style.animationDuration =
        `${base / simulationSpeed}s`;

    }
  );

}


speedButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const speed =
          Number(
            button.dataset.speed
          );


        setSimulationSpeed(
          speed
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

      }
    );

  }
);


/* =========================================================
   SIMULATION CLOCK
========================================================= */

let lastFrame =
  performance.now();


function simulationLoop(now) {

  const delta =
    now - lastFrame;


  lastFrame =
    now;


  if (!paused) {

    /*
       1x = 1 simulated day every
       2 real seconds.

       Higher speed multiplies it.
    */

    const daysPerSecond =
      0.5 *
      simulationSpeed;


    simulationDays +=
      (
        delta / 1000
      ) *
      daysPerSecond;


    updateSimulationDate();

    updateDistancePanel();

  }


  requestAnimationFrame(
    simulationLoop
  );

}


requestAnimationFrame(
  simulationLoop
);


/* =========================================================
   SIMULATION DATE
========================================================= */

function updateSimulationDate() {

  const day =
    Math.floor(
      simulationDays
    );


  const year =
    Math.floor(
      (
        day - 1
      ) / 365.25
    ) + 1;


  const dayOfYear =
    Math.floor(
      (
        day - 1
      ) % 365.25
    ) + 1;


  simulationDate.textContent =
    `Day ${dayOfYear} · Year ${year}`;

}


/* =========================================================
   ZOOM
========================================================= */

function updateZoom() {

  zoom =
    Math.min(
      1.7,
      Math.max(
        0.65,
        zoom
      )
    );


  document.documentElement.style
    .setProperty(
      "--zoom",
      zoom
    );


  zoomValue.textContent =
    Math.round(
      zoom * 100
    ) + "%";

}


zoomIn.addEventListener(
  "click",
  () => {

    zoom += .15;

    updateZoom();

  }
);


zoomOut.addEventListener(
  "click",
  () => {

    zoom -= .15;

    updateZoom();

  }
);


/* =========================================================
   MODE SWITCH
========================================================= */

document
  .querySelectorAll(".mode-button")
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const mode =
            button.dataset.mode;


          document
            .querySelectorAll(
              ".mode-button"
            )
            .forEach(
              item => {

                item.classList.remove(
                  "active"
                );

              }
            );


          button.classList.add(
            "active"
          );


          document.body.classList.toggle(
            "true-scale",
            mode === "true"
          );

        }
      );

    }
  );


/* =========================================================
   SEARCH
========================================================= */

planetSearch.addEventListener(
  "input",
  () => {

    const query =
      planetSearch.value
        .trim()
        .toLowerCase();


    searchResults.innerHTML = "";


    if (!query) {

      searchResults.classList.remove(
        "open"
      );

      return;

    }


    const matches =
      Object.keys(planets)
        .filter(
          name =>
            name
              .toLowerCase()
              .includes(query)
        );


    if (!matches.length) {

      searchResults.innerHTML =
        `<div class="search-result">
          No planet found
        </div>`;

      searchResults.classList.add(
        "open"
      );

      return;

    }


    matches.forEach(
      name => {

        const item =
          document.createElement(
            "button"
          );


        item.className =
          "search-result";


        item.innerHTML = `
          <span
            class="result-dot"
            style="background:${planetStyles[name]}"
          ></span>

          <span>${name}</span>
        `;


        item.addEventListener(
          "click",
          () => {

            openPlanet(name);

            searchResults.classList.remove(
              "open"
            );

            planetSearch.value =
              "";

          }
        );


        searchResults.appendChild(
          item
        );

      }
    );


    searchResults.classList.add(
      "open"
    );

  }
);


/* =========================================================
   SEARCH KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      (
        event.ctrlKey ||
        event.metaKey
      ) &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      planetSearch.focus();

    }


    if (
      event.key === "Escape"
    ) {

      searchResults.classList.remove(
        "open"
      );

      closePanelFunction();

      closeCompareModal();

    }

  }
);


/* =========================================================
   CLOSE PANEL
========================================================= */

panelClose.addEventListener(
  "click",
  closePanelFunction
);

panelBackdrop.addEventListener(
  "click",
  closePanelFunction
);


/* =========================================================
   COMPARE
========================================================= */

compareBtn.addEventListener(
  "click",
  () => {

    if (
      !selectedPlanet ||
      selectedPlanet === "Sun"
    ) {
      return;
    }


    const data =
      planets[selectedPlanet];


    comparePlanetName.textContent =
      selectedPlanet;

    comparePlanetLabel.textContent =
      selectedPlanet;

    comparePlanet.style.background =
      planetStyles[selectedPlanet];

    compareDiameter.textContent =
      data.diameter;

    compareGravity.textContent =
      data.gravity;

    compareYear.textContent =
      data.year;


    compareModal.classList.add(
      "open"
    );

    compareModal.setAttribute(
      "aria-hidden",
      "false"
    );

  }
);


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCompareModal() {

  compareModal.classList.remove(
    "open"
  );

  compareModal.setAttribute(
    "aria-hidden",
    "true"
  );

}


modalClose.addEventListener(
  "click",
  closeCompareModal
);


compareModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      compareModal
    ) {

      closeCompareModal();

    }

  }
);


/* =========================================================
   RESET
========================================================= */

resetBtn.addEventListener(
  "click",
  () => {

    paused =
      false;

    simulationSpeed =
      1;

    simulationDays =
      1;

    zoom =
      1;

    followedPlanet =
      null;


    orbitElements.forEach(
      orbit => {

        orbit.classList.remove(
          "paused"
        );

        orbit.style.animationDuration =
          "";

      }
    );


    speedButtons.forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.speed === "1"
        );

      }
    );


    pauseIcon.textContent =
      "Ⅱ";

    pauseText.textContent =
      "Pause";


    followIndicator.classList.remove(
      "active"
    );


    camera.style.transform =
      "translate(-50%, -50%)";


    updateZoom();

    updateSimulationDate();

    updateDistancePanel();

  }
);


/* =========================================================
   FULLSCREEN
========================================================= */

fullscreenBtn.addEventListener(
  "click",
  async () => {

    try {

      if (
        !document.fullscreenElement
      ) {

        await document.documentElement
          .requestFullscreen();

      } else {

        await document.exitFullscreen();

      }

    } catch (error) {

      console.log(
        "Fullscreen unavailable"
      );

    }

  }
);


/* =========================================================
   CLICK OUTSIDE SEARCH
========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      !event.target.closest(
        ".search-wrap"
      )
    ) {

      searchResults.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   INITIALIZATION
========================================================= */

updateZoom();

updateSimulationDate();

setSimulationSpeed(1);


/* =========================================================
   INITIAL PLANET
========================================================= */

setTimeout(
  () => {

    openPlanet("Earth");

  },
  350
);
/* =========================================================
   PHASE 3 — ADVANCED UNIVERSE EXPLORER JS
   ========================================================= */

(() => {

  "use strict";

  /* ================= DATA ================= */

  const planetData = {

    Mercury: {
      type: "Rocky Planet",
      diameter: "4,879 km",
      gravity: "3.70 m/s²",
      temperature: "167°C",
      moons: "0",
      day: "1,407.6 hours",
      year: "87.97 days",
      sunDistance: "57.9 million km",
      sunAU: "0.39 AU",
      description:
        "The smallest planet and the closest planet to the Sun."
    },

    Venus: {
      type: "Rocky Planet",
      diameter: "12,104 km",
      gravity: "8.87 m/s²",
      temperature: "464°C",
      moons: "0",
      day: "5,832 hours",
      year: "224.7 days",
      sunDistance: "108.2 million km",
      sunAU: "0.72 AU",
      description:
        "A hot, cloudy world with the densest atmosphere of the rocky planets."
    },

    Earth: {
      type: "Rocky Planet",
      diameter: "12,742 km",
      gravity: "9.81 m/s²",
      temperature: "15°C",
      moons: "1",
      day: "23.93 hours",
      year: "365.25 days",
      sunDistance: "149.6 million km",
      sunAU: "1.00 AU",
      description:
        "Our home planet and the only known world with life."
    },

    Mars: {
      type: "Rocky Planet",
      diameter: "6,779 km",
      gravity: "3.71 m/s²",
      temperature: "-63°C",
      moons: "2",
      day: "24.62 hours",
      year: "687 days",
      sunDistance: "227.9 million km",
      sunAU: "1.52 AU",
      description:
        "A cold desert world known for its red surface and ancient valleys."
    },

    Jupiter: {
      type: "Gas Giant",
      diameter: "139,820 km",
      gravity: "24.79 m/s²",
      temperature: "-110°C",
      moons: "95+",
      day: "9.93 hours",
      year: "11.86 years",
      sunDistance: "778.5 million km",
      sunAU: "5.20 AU",
      description:
        "The largest planet in our Solar System."
    },

    Saturn: {
      type: "Gas Giant",
      diameter: "116,460 km",
      gravity: "10.44 m/s²",
      temperature: "-140°C",
      moons: "140+",
      day: "10.7 hours",
      year: "29.45 years",
      sunDistance: "1.43 billion km",
      sunAU: "9.58 AU",
      description:
        "A giant planet famous for its spectacular ring system."
    },

    Uranus: {
      type: "Ice Giant",
      diameter: "50,724 km",
      gravity: "8.69 m/s²",
      temperature: "-195°C",
      moons: "28",
      day: "17.2 hours",
      year: "84 years",
      sunDistance: "2.87 billion km",
      sunAU: "19.2 AU",
      description:
        "An ice giant rotating on its side with a blue-green atmosphere."
    },

    Neptune: {
      type: "Ice Giant",
      diameter: "49,244 km",
      gravity: "11.15 m/s²",
      temperature: "-200°C",
      moons: "16",
      day: "16.1 hours",
      year: "164.8 years",
      sunDistance: "4.50 billion km",
      sunAU: "30.1 AU",
      description:
        "The farthest major planet from the Sun."
    }

  };


  /* ================= ELEMENTS ================= */

  const advancedName =
    document.getElementById("advancedPlanetName");

  const advancedSunDistance =
    document.getElementById("advancedSunDistance");

  const advancedSunAU =
    document.getElementById("advancedSunDistanceAU");

  const advancedEarthDistance =
    document.getElementById("advancedEarthDistance");

  const advancedEarthAU =
    document.getElementById("advancedEarthDistanceAU");

  const advancedDiameter =
    document.getElementById("advancedDiameter");

  const advancedGravity =
    document.getElementById("advancedGravity");

  const advancedTemperature =
    document.getElementById("advancedTemperature");

  const advancedMoons =
    document.getElementById("advancedMoons");

  const advancedDay =
    document.getElementById("advancedDayLength");

  const advancedYear =
    document.getElementById("advancedYearLength");

  const objectStatus =
    document.getElementById("objectStatus");


  /* ================= UPDATE DATA ================= */

  function updateAdvancedData(name) {

    if (!planetData[name]) return;

    const data = planetData[name];

    if (advancedName)
      advancedName.textContent = name;

    if (advancedSunDistance)
      advancedSunDistance.textContent = data.sunDistance;

    if (advancedSunAU)
      advancedSunAU.textContent = data.sunAU;

    if (advancedDiameter)
      advancedDiameter.textContent = data.diameter;

    if (advancedGravity)
      advancedGravity.textContent = data.gravity;

    if (advancedTemperature)
      advancedTemperature.textContent = data.temperature;

    if (advancedMoons)
      advancedMoons.textContent = data.moons;

    if (advancedDay)
      advancedDay.textContent = data.day;

    if (advancedYear)
      advancedYear.textContent = data.year;

    /* Earth distance */

    if (advancedEarthDistance && advancedEarthAU) {

      if (name === "Earth") {

        advancedEarthDistance.textContent = "0 km";
        advancedEarthAU.textContent = "0 AU";

      } else {

        const earthDistance =
          calculateEarthDistance(name);

        advancedEarthDistance.textContent =
          earthDistance.km;

        advancedEarthAU.textContent =
          earthDistance.au;

      }

    }

    if (objectStatus)
      objectStatus.textContent = "SELECTED";

  }


  /* ================= EARTH DISTANCE ================= */

  const orbitalAU = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1,
    Mars: 1.52,
    Jupiter: 5.20,
    Saturn: 9.58,
    Uranus: 19.2,
    Neptune: 30.1
  };


  function calculateEarthDistance(name) {

    const difference =
      Math.abs(orbitalAU[name] - 1);

    const km =
      difference * 149597870.7;

    return {
      km: formatDistance(km),
      au: difference.toFixed(2) + " AU"
    };

  }


  function formatDistance(km) {

    if (km < 1000)
      return Math.round(km) + " km";

    if (km < 1000000)
      return Math.round(km / 1000) + " thousand km";

    if (km < 1000000000)
      return (km / 1000000).toFixed(1) + " million km";

    return (km / 1000000000).toFixed(2) + " billion km";

  }


  /* ================= PLANET CLICK DETECTION ================= */

  document.addEventListener("click", event => {

    const planet =
      event.target.closest("[data-planet]");

    if (!planet) return;

    const name =
      planet.getAttribute("data-planet");

    if (!planetData[name]) return;

    updateAdvancedData(name);

  });


  /* ================= ORBIT TOGGLE ================= */

  const toggleOrbits =
    document.getElementById("toggleOrbits");

  const settingOrbits =
    document.getElementById("settingOrbits");

  function setOrbits(enabled) {

    document
      .querySelectorAll(".orbit")
      .forEach(orbit => {

        orbit.style.borderColor =
          enabled
            ? ""
            : "transparent";

      });

    toggleOrbits?.classList.toggle(
      "active",
      enabled
    );

    if (settingOrbits)
      settingOrbits.checked = enabled;

  }

  toggleOrbits?.addEventListener(
    "click",
    () => {

      const enabled =
        !toggleOrbits.classList.contains("active");

      setOrbits(enabled);

    }
  );


  /* ================= LABEL TOGGLE ================= */

  const toggleLabels =
    document.getElementById("toggleLabels");

  const settingLabels =
    document.getElementById("settingLabels");

  function setLabels(enabled) {

    document
      .querySelectorAll(".planet-label")
      .forEach(label => {

        label.style.display =
          enabled ? "block" : "none";

      });

    toggleLabels?.classList.toggle(
      "active",
      enabled
    );

    if (settingLabels)
      settingLabels.checked = enabled;

  }


  toggleLabels?.addEventListener(
    "click",
    () => {

      const enabled =
        !toggleLabels.classList.contains("active");

      setLabels(enabled);

    }
  );


  /* ================= MOON TOGGLE ================= */

  const toggleMoon =
    document.getElementById("toggleMoon");

  const settingMoon =
    document.getElementById("settingMoon");

  function setMoon(enabled) {

    document
      .querySelectorAll(".earth-moon-orbit, .moon")
      .forEach(item => {

        item.style.display =
          enabled ? "" : "none";

      });

    toggleMoon?.classList.toggle(
      "active",
      enabled
    );

    if (settingMoon)
      settingMoon.checked = enabled;

  }


  toggleMoon?.addEventListener(
    "click",
    () => {

      const enabled =
        !toggleMoon.classList.contains("active");

      setMoon(enabled);

    }
  );


  /* ================= TRAILS ================= */

  const toggleTrails =
    document.getElementById("toggleTrails");

  const settingTrails =
    document.getElementById("settingTrails");

  function setTrails(enabled) {

    document.body.classList.toggle(
      "trails-enabled",
      enabled
    );

    toggleTrails?.classList.toggle(
      "active",
      enabled
    );

    if (settingTrails)
      settingTrails.checked = enabled;

  }


  toggleTrails?.addEventListener(
    "click",
    () => {

      const enabled =
        !toggleTrails.classList.contains("active");

      setTrails(enabled);

    }
  );


  /* ================= SETTINGS MODAL ================= */

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


  function openSettings() {

    settingsOverlay?.classList.add("open");

    settingsOverlay?.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  function closeSettingsPanel() {

    settingsOverlay?.classList.remove("open");

    settingsOverlay?.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  settingsBtn?.addEventListener(
    "click",
    openSettings
  );

  closeSettings?.addEventListener(
    "click",
    closeSettingsPanel
  );

  doneSettings?.addEventListener(
    "click",
    closeSettingsPanel
  );


  settingsOverlay?.addEventListener(
    "click",
    event => {

      if (event.target === settingsOverlay)
        closeSettingsPanel();

    }
  );


  /* ================= SETTINGS SYNC ================= */

  settingOrbits?.addEventListener(
    "change",
    event => {

      setOrbits(event.target.checked);

    }
  );


  settingLabels?.addEventListener(
    "change",
    event => {

      setLabels(event.target.checked);

    }
  );


  settingMoon?.addEventListener(
    "change",
    event => {

      setMoon(event.target.checked);

    }
  );


  settingTrails?.addEventListener(
    "change",
    event => {

      setTrails(event.target.checked);

    }
  );


  /* ================= RESTORE ================= */

  restoreSettings?.addEventListener(
    "click",
    () => {

      setOrbits(true);
      setLabels(true);
      setMoon(true);
      setTrails(false);

    }
  );


  /* ================= ESCAPE ================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape")
        closeSettingsPanel();

    }
  );


  /* ================= INITIAL ================= */

  setOrbits(true);
  setLabels(true);
  setMoon(true);
  setTrails(false);

  updateAdvancedData("Earth");


})();
