/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let l1 = 10;
let l2 = 7;

function area(l1, l2) {
  return l1 * l2;
}
console.log("ESERCIZIO 1:");
console.log(`rectangle area: ${area(l1, l2)}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
let a = 20;
let b = 20;

function crazySum(a, b) {
  if (a !== b) {
    return a + b;
  } else {
    return (a + b) * 3;
  }
}
console.log("ESERCIZIO 2:");
console.log(`crazySum: ${crazySum(a, b)}`);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
let c = 27;
let d = 19;

function crazyDiff(c, d) {
  if (c - d > d) {
    return (c - d) * 3;
  } else {
    return c - d;
  }
}
console.log("ESERCIZIO 3:");
console.log(`crazyDiff: ${crazyDiff(c, d)}`);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
let e = 26;

function boundary(e) {
  if ((e >= 20 && e <= 100) || e === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("ESERCIZIO 4:");
console.log(boundary(e));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
let f = "if fun";

function codify(f) {
  if (f.includes("code")) {
    return f;
  } else {
    return ["code ", f].join("");
  }
}
console.log("ESERCIZIO 5:");
console.log(codify(f));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
let g = 12;

function check3and7(g) {
  if (g % 3 === 0 || g % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("ESERCIZIO 6:");
console.log(check3and7(g));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
let h = "Matteo wants to be a dev!";
function reverseString(h) {
  h = h.split("");
  h.reverse();
  return h.join("");
}
console.log("ESERCIZIO 7:");
console.log(reverseString(h));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
let i = "code is fun";
function upperFirst(i) {
  i = i.split(" ");
  for (let index = 0; index < i.length; index++) {
    i[index] = i[index].charAt(0).toUpperCase() + i[index].slice(1);
  }
  return i.join(" ");
}
console.log("ESERCIZIO 8:");
console.log(upperFirst(i));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
let j = "almost to the point";
function cutString(j) {
  j = j.split("");
  j.splice(0, 1);
  j.splice(j.length - 1, 1);
  return j.join("");
}
console.log("ESERCIZIO 9:");
console.log(cutString(j));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
let k = 10;
function giveMeRandom(k) {
  let n = [];
  for (let index = 0; index < k; index++) {
    n.push(Math.floor(Math.random() * 11));
  }
  return n;
}
console.log("ESERCIZIO 10:");
console.log(giveMeRandom(k));
