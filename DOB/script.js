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
