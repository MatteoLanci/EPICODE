//* QUESTA FUNZIONE PERMETTE DI CAMBIARE IL CONTENUTO DI H1 (TITOLO NELLA NAVBAR) IN MODO CONTINUATIVO
let title = document.getElementById("navTitle");
function changeTitle() {
  if (title.textContent == "BuyView") {
    title.textContent = "Shop Online";
  } else {
    title.textContent = "BuyView";
  }
}

//? QUESTA FUNZIONE PERMETTE DI CAMBIARE IL COLORE DI SFONDO DELLA PAGINA IN MODO CONTINUATIVO (attualmente cambia solo al click da giallo a bianco, non cicla)
const main = document.querySelector(".mainClass");

function changeBG() {
  main.style.background = "#ffffff";
}

//* QUESTA FUNZIONE PERMETTE DI CAMBIARE IL CONTENUTO DI FOOTER P (INDIRIZZO NEL FOOTER) IN MODO CONTINUATIVO
let address = document.getElementById("address");
function changeAddress() {
  if (address.textContent == "Via dei Magazzini Generali, 16, 00154 Roma RM") {
    address.textContent = "Vedi la posizione sulla mappa";
  } else {
    address.textContent = "Via dei Magazzini Generali, 16, 00154 Roma RM";
  }
}

//* QUESTA FUNZIONE PERMETTE DI AGGIUNGERE UNA CLASSE AD OGNI LINK AMAZON DEI PRODOTTI

function addClassToLinks() {
  const links = document.getElementsByClassName("amazonLink");
  console.log(links);
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("prod-link");
  }
  return links;
}
console.log(addClassToLinks());
