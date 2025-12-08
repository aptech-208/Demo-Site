const snav = document.getElementById("snav");
const navmenu = document.querySelector("nav ul");

snav.addEventListener("click", () => {
    navmenu.classList.toggle("show");
});