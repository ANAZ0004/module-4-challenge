document.getElementById("brightness-toggle").addEventListener("click", toggleBrightness)

// Initial check to see if darkMode is specified.
if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode","false") // else set it to true
}

// Restore brightness mode from local storage.
if (JSON.parse(localStorage.getItem("darkMode")) === true) {
    localStorage.setItem("darkMode","false");
    toggleBrightness();
}

function toggleBrightness() {
    const toggleableElements = document.getElementsByClassName("toggleable")
    for (const element of toggleableElements) {
        element.classList.toggle("dark-mode")
    }
    var toggleIcon = document.getElementById("brightness-toggle");
    var heroImage = document.getElementById("hero-image");
    if (JSON.parse(localStorage.getItem("darkMode")) === true) {
        toggleIcon.src = "./assets/images/moon-icon.png";
        if (heroImage !== null) {
            heroImage.src = "./assets/images/hero-day.png";
        }
        localStorage.setItem("darkMode","false");
    } else {
        toggleIcon.src = "./assets/images/sun-icon.png";
        if (heroImage !== null) {
            heroImage.src = "./assets/images/hero-night.png";
        }
        localStorage.setItem("darkMode","true");
    }
}