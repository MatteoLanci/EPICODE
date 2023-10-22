//! FUNZIONE PER IMPOSTARE LA CLASSE ACTIVE AI NAV-LINKS DELLA NAVBAR AL CLICK
let links = document.querySelectorAll(".nav-link");
links = Array.from(links);
links.pop();
// ho reso la nodelist un array per rimuovere l'ultimo nav-link che sarebbe l'icona con dropdown menu di 'kids' nella navbar

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.preventDefault();
      link.classList.add("active");
    });
  });
}

//! FUNZIONE PER FAR APPARIRE LE ROWS DEGLI SHOW DURANTE LO SCROLL QUANDO SI ARRIVA ALLA LORO ALTEZZA
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("image-animation");
    }
  });
});

const row = document.querySelectorAll(".movie-cards");
row.forEach((image) => {
  observer.observe(image);
});
