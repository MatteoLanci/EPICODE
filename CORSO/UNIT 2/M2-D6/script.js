//! LA SEGUENTE FUNZIONE CONSENTE DI CAMBIARE IL TESTO DOVE È PRESENTE IL NOME DEL NEGOZIO (h1 & h2), PRESENTI QUINDI AD INIZIO PAGINA E NEL FOOTER
function changeH1() {
  const title = document.querySelector("h1");
  const titleFooter = document.querySelector("h2");
  title.innerText = "BuyView";
  titleFooter.innerText = "BuyView";
  console.log(title, titleFooter);
}
changeH1();

//? -----------------------------------------------------------------------------------
//! LA SEGUENTE FUNZIONE CONSENTE DI CAMBIARE COLORE ALLO SFONDO DELLA PAGINA
function changeBG() {
  const bg = document.querySelector("body");
  bg.style.background = "#f2f2f2";
  console.log(bg);
}
changeBG();

//? -----------------------------------------------------------------------------------
//! LA SEGUENTE FUNZIONE CONSENTE DI MODIFICARE IL CONTENUTO DELL'ELEMENTO (nel footer) DOVE È PRESENTE L'INDIRIZZO DEL NEGOZIO
function changeAddress() {
  const address = document.getElementById("address");
  address.innerText = "Via dei Magazzini Generali, 16, 00154 Roma RM";
  console.log(address);
}
changeAddress();

//? -----------------------------------------------------------------------------------
//! LA SEGUENTE FUNZIONE CONSENTE AGGIUNGERE UNA CLASSE DI STILE A TUTTI I LINK (elementi <a></a>)
function addClassToLink() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("amazonLink");
  }
  console.log(links);
}
addClassToLink();

//? -----------------------------------------------------------------------------------
//! LA SEGUENTE FUNZIONE CONSENTE DI AGGIUNGERE UNA CLASSE DI STILE A TUTTE LE IMMAGINI PRESENTI (elementi <img> in questo caso presenti solo nella tabella)
function imageClass() {
  const img = document.querySelectorAll("img");
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle("visibility");
  }
  console.log(img);
}
imageClass();

//? -----------------------------------------------------------------------------------
//! LA SEGUENTE FUNZIONE CONSENTE DI GENERARE DEI VALORI RANDOMICI ASSEGNATI ALLE VARIABILI CHE ANDRANNO A COMPORRE I 3 VALORI RGB (rgb(255, 255, 255)), ASSEGNARE QUESTE VARIABILI AD UN ULTERIORE VARIABILE CHE COMPONE LA 'STRINGA' DELL'RGB CHE POI ANDRÀ INSERITA COME PROPRIETÀ DI STILE 'COLOR' ED APPLICATA AD OGNI ELEMENTO CHE RAPPRESENTA IL PREZZO DI OGNI ARTICOLO ALL'INTERNO DELLA TABELLA (elementi <td> con id='price')
function priceColor() {
  const price = document.querySelectorAll(".price");
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  console.log(randomColor);
  for (let i = 0; i < price.length; i++) {
    price[i].style.color = randomColor;
  }
}
priceColor();
