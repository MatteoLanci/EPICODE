// Epicode Calculator (Marco Hijacker)

//? Definizione algoritmo:
// 1. Ingredienti (Input)?
// Primo operatore, segno di operazione, secondo operatore.

// 2. Qual è il nostro output?
// Risultato finale dell'operazione.

// Aspetti di acquisizione dei dati dall'utente:
// Elementi utili dal DOM:
// Cosa devo 'catturare'?
// Display, segni di operazione, cifre da 0->9.

// Listeners:
// Quali fra gli elementi definiti sopra devono possederli?
// Tutti i bottoni con cifre, segni di operazione, AC ed uguale (=ris.).

// Funzioni:
// Quali funzioni sono strettamente necessarie?
// Sicuramente i tasti AC ed = dovranno scaturire una funzione!

// Bonus:
// E se volessimo implementare le operazioni a catena?
// Il valore del risultato finale dev'essere salvato nel firstVal della successiva operazione!

// Elementi del DOM:
// Il mio display:
let display = document.getElementById("display"); // Elemento singolo HTML
// I segni di operazione:
let operatorEls = document.getElementsByClassName("operator"); // Array
// Le cifre 0->9:
let digitEls = document.getElementsByClassName("digit"); // Array

// Input fondalmentali:
let firstVal = "";
let secondVal = "";
let operator = null;
let finResult = null;

// Listeners (Operatori):
for (const digitEl of digitEls) {
    digitEl.addEventListener("click", (event) => {
        if(operator == null) {
            // console.log("Sono nel ramo firstVal");
            firstVal += event.target.value;
            display.value = firstVal;
        } else {
            // console.log("Sono nel ramo secondVal");
            secondVal += event.target.value;
            display.value = secondVal;
        }
    });
}

// Listeners (Segni operazione):
for (const operatorEl of operatorEls) {
    operatorEl.addEventListener("click", (event) => {
        operator = event.target.value;
    });
}

function resultCalc() {
    // Controllo di integrità:
    if(!firstVal || !secondVal || operator == null) {
        // console.log("Non ho gli elementi necessari per l'operazione!");
        return; // Devo cessare la funzione di calcolo perché non ho i 3 input fondamentali!
    }
    switch (operator) {
        case '+': // Addizione
            finResult = +firstVal + +secondVal;
        break;
        case '-': // Sottrazione
            finResult = +firstVal - +secondVal;
        break;
        case '*': // Moltiplicazione
            finResult = +firstVal * +secondVal;
        break;
        case "/": // Divisione
            finResult = +firstVal / +secondVal;
        break;
    }
    // Stampo il risultato finale a display:
    display.value = finResult;
    // Inizializzazione degli operatori e segno operazione:
    firstVal = finResult; // Questo per consentirmi l'operazione successiva a 'catena'!
    secondVal = "";
    operator = null;
}

function resetCalc() {
    // Pulizia valori in cache, ripristino condizioni iniziali:
    display.value = "0";
    firstVal = "";
    secondVal = "";
    finResult = "";
    operator = null;
}