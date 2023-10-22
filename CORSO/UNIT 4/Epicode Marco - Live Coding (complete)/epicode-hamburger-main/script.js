const hambMenu = document.getElementById("hamb-menu");
let hambStatus = false; // false sta per 'Menu Chiuso'...

hambMenu.addEventListener("click", () => {
    if(!hambStatus) {
        // Menu Chiuso -> Aperto:
        hambMenu.classList.remove("closing", "open");
        // Reflow trigger:
        hambMenu.offsetWidth;
        hambMenu.classList.add("open");
        hambStatus = true;
    } else {
        // Menu Aperto -> Chiuso:
        hambMenu.classList.remove("open", "closing");
        // Reflow trigger:
        hambMenu.offsetWidth;
        hambMenu.classList.add("open", "closing");
        hambStatus = false;
    }
});