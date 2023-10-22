//! FUNZIONE PER FAR APPARIRE IL BTN PER IL BACK TO TOP ONSCROLL ED UNA VOLTA CLICCATO FARLO FUNZIONARE
let backToTopBtn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
 scrollFunction();
};

function scrollFunction() {
 if (
  document.body.scrollTop > 300 ||
  document.documentElement.scrollTop > 300
 ) {
  backToTopBtn.style.display = "block";
 } else {
  backToTopBtn.style.display = "none";
 }
}
scrollFunction();

backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}
backToTop();

//! ALERT PER INDICARE QUANTE CARD INERENTI A VIAGGI CI SONO NELLA PAGINA (vengono escluse con 'slice' le card dei Testimonials)
let card = document.querySelectorAll(".card");
let myArr = [];

for (let i = 0; i < card.length; i++) {
 myArr.push(card[i]);
}
myArr.splice(-3);
// console.log(myArr);
myArr = myArr.length;
alert(`Nella pagina sono presenti ${myArr} viaggi disponibili`);

//! FUNZIONE PER RIMUOVERE TUTTE LE CARDS DALLA PAGINA
let cardsRemove = () => {
 let cards = document.querySelectorAll(".card");
 let dailyDealImg = document.querySelector("#dailyDealImg");

 for (let i = 0; i < cards.length; i++) {
  let singleCard = cards[i];
  singleCard.remove();
 }
 dailyDealImg.remove();
};
