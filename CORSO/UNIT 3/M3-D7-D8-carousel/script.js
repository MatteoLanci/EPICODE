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

//! FUNZIONE PER I CAROSELLI - ho dovuto creare 3 funzioni differenti a causa di un problema di acquisizione immagini su carousel2 e carousel3 in quanto avendo la stessa class, scrollando prendevano le immagini del carousel1

//?----------------------------------- FUNZIONE PER IL CAROSELLO 1
const carouselOneItems = document.querySelectorAll(
  ".carousel-one .carousel-item"
);

carouselOneItems.forEach((el) => {
  const minPerSlide = 7;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = carouselOneItems[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//?----------------------------------- FUNZIONE PER IL CAROSELLO 2
const carouselTwoItems = document.querySelectorAll(
  ".carousel-two .carousel-item"
);

carouselTwoItems.forEach((el) => {
  const minPerSlide = 7;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = carouselTwoItems[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//?----------------------------------- FUNZIONE PER IL CAROSELLO 3
const carouselThreeItems = document.querySelectorAll(
  ".carousel-three .carousel-item"
);

carouselThreeItems.forEach((el) => {
  const minPerSlide = 7;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = carouselThreeItems[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//! FUNZIONE PER ABILITARE UNA CLASSE BY TOGGLE CHE ANIMA IL TRIANGOLINO DEL BTN DROPDOWN MENU
const dropdownButton = document.getElementById("dropdown-button");

dropdownButton.addEventListener("click", () => {
  dropdownButton.classList.toggle("rotate-toggle");
});

dropdownButton.addEventListener("hidden.bs.dropdown", () => {
  dropdownButton.classList.remove("rotate-toggle");
});

//! FUNZIONE PER IL DROPDOWN BTN DELLA NAVBAR
const navDropdownButton = document.getElementById("navUserBtn");

navDropdownButton.addEventListener("click", () => {
  navDropdownButton.classList.toggle("rotate-toggle");
});

navDropdownButton.addEventListener("hidden.bs.dropdown", () => {
  navDropdownButton.classList.remove("rotate-toggle");
});
