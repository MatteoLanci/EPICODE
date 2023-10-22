// Salvare le box dei film (div.movie-box) in una variabile (array):
const movieBoxes = document.getElementsByClassName("movie-box");

// Piazzare un listener su ognuno degli elementi nell'array coi div.movie-box:
for (const movieBox of movieBoxes) {
    // Listener scatenato all'ingresso del mouse nel div.movie-box target dell'evento => Applico classe show con display block su div.movie-info:
    movieBox.addEventListener("mouseenter", function(event) {
        // console.log(event.target.getElementsByTagName("div")); // Prende tutti i div (anche nipoti), ma io salvo il primo!
        event.target.getElementsByTagName("div")[0].classList.toggle("show");
    });
    // Listener scatenato all'uscita del mouse dal div.movie-box target dell'evento => Rimuovo classe show con display block su div.movie-info:
    movieBox.addEventListener("mouseleave", function(event) {
        event.target.getElementsByTagName("div")[0].classList.toggle("show");
    });
}