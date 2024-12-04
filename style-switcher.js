// To'g'ri klass nomini ishlatish
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler"); 
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Scroll hodisasi
window.addEventListener("scroll", () => {
   if(document.querySelector(".style-switcher").classList.contains("open"))
   {
    document.querySelector(".style-switcher").classList.remove("open");
   }
});

const alternateStylets = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStylets.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled"); // Enable the selected style
        } else {
            style.setAttribute("disabled", "true"); // Disable all other styles
        }
    });
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
