// Esercizi aggiuntivi

/* //* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
let k = 10;
let numberRandom = [];
let booleanRandom = [];
function giveMeRandom(k) {
  for (let index = 0; index < k; index++) {
    numberRandom.push(Math.floor(Math.random() * 11));
    if (numberRandom[index] > 5) {
      booleanRandom.push(true);
    } else {
      booleanRandom.push(false);
    }
  }
  return { numberRandom, booleanRandom };
}
console.log("SOLUZIONE ESERCIZIO 1: ");
console.log(giveMeRandom(k));

let sumTrue = 0;
function checkArray(numberRandom, booleanRandom) {
  for (let i = 0; i < booleanRandom.length; i++) {
    if (booleanRandom[i] === true) {
      sumTrue += numberRandom[i];
    } else {
      continue;
    }
  }
  return sumTrue;
}
console.log("this is TRUE values sum");
console.log(checkArray(numberRandom, booleanRandom));

/* //* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/
let shoppingCart = [
  {
    price: 25.9,
    name: "smartphone car support",
    id: 5098265,
    quantity: 1,
  },
  {
    price: 9.9,
    name: "smartwatch wrist band",
    id: 0371600,
    quantity: 2,
  },
  {
    price: 259,
    name: "Ironman helmet 1:1",
    id: 6281903,
    quantity: 1,
  },
  {
    price: 15,
    name: "Bluethooth adapter USB-A",
    id: 4129766,
    quantity: 5,
  },
];

function shoppingCartTotal() {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
}
console.log("SOLUZIONE ESERCIZIO 2: ");
console.log(shoppingCartTotal());

/* //* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/
let item = 0;

function addToShoppingCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    item += shoppingCart[i].quantity;
  }
  return item;
}
console.log("SOLUZIONE ESERCIZIO 3: ");
console.log(addToShoppingCart());

/* //* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart() {
  let max = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > max) {
      max = shoppingCart[i].price;
    }
  }
  return max;
}
console.log("SOLUZIONE ESERCIZIO 4: ");
console.log(maxShoppingCart());

/* //* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/
function latestShoppingCart() {
  let latest = shoppingCart[0];
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] >= latest) {
      latest = shoppingCart[i];
      continue;
    } else {
      break;
    }
  }
  return latest;
}
console.log("SOLUZIONE ESERCIZIO 5: ");
console.log(latestShoppingCart());

/* //* EXTRA 6 
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finché il numero estratto è maggiore di x per 3 volte di fila.
*/
function loopUntil(x) {
  let biggerThanX = 0;
  let fails = 0;

  while (biggerThanX !== 3) {
    let random = Math.floor(Math.random() * 10);

    console.log(random);
    if (random > x) {
      biggerThanX++;
    } else {
      biggerThanX = 0;
      console.log("counter has been reset - below new try");
      fails++;
    }
  }
  console.log(`I used ${fails} attempts to stop this madness`);
  return `random number bigger than ${x} has been published ${biggerThanX} times in a row, random generator stopped.`;
}
console.log("SOLUZIONE ESERCIZIO 6: ");
console.log(loopUntil(5));
//? più alto sarà il valore di "x" e statisticamente più attempts serviranno per uscire dal ciclo.

/* //* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
let avarageArr = [56, 74, 12, 29, "disturbatore", 97, "disturbatore2"];
let avarageNumArr = [];

function avarage(avarageArr) {
  for (let i = 0; i < avarageArr.length; i++) {
    if (typeof avarageArr[i] === "number") {
      avarageNumArr.push(avarageArr[i]);
    }
  }
  let avarageSum = 0;
  for (let i = 0; i < avarageNumArr.length; i++) {
    avarageSum += avarageNumArr[i];
  }
  let avarageCalc = avarageSum / avarageNumArr.length;
  return avarageCalc;
}
console.log("SOLUZIONE ESERCIZIO 7:");
console.log(avarage(avarageArr));

/* //* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
let strArray = ["sono", "un", "aspirante", "sviluppatore", "web"];

function longest(strArray) {
  let longest = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longest.length) {
      longest = strArray[i];
    }
  }
  return longest;
}
console.log("SOLUZIONE ESERCIZIO 8: ");
console.log(longest(strArray));

/* //*EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/
function isSpam(emailContent) {
  const filterWordOne = "SCAM";
  const filterWordTwo = "SPAM";
  emailContent = emailContent.toUpperCase();
  if (
    emailContent.includes(filterWordOne) ||
    emailContent.includes(filterWordTwo)
  ) {
    return false;
  } else {
    return true;
  }
}
console.log("SOLUZIONE ESERCIZIO 9: ");
console.log(isSpam("spam"));

/* //* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/
let date = "2023-03-01";

function daysElapsed(date) {
  const passedDay = new Date(date).getTime();
  let today = Date.now();
  let diff = today - passedDay;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log("SOLUZIONE ESERCIZIO 10");
console.log(`${daysElapsed(date)} days have been elapsed since ${date}`); //expected output: 35

/* //* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 [
  ["00","01","02"],
  ["10","11","12"]
 ];
*/
let x = 3;
let y = 2;
function matrixGenerator(x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    let rowArr = [];
    for (let index = 0; index < x; index++) {
      rowArr.push(i.toString() + index.toString());
    }
    matrix.push(rowArr);
  }
  return matrix;
}
console.log("SOLUZIONE ESERCIZIO 11");
console.log(matrixGenerator(x, y));
